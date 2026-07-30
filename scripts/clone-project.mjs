#!/usr/bin/env node

/**
 * Boilerplate cloning utility.
 *
 * Usage:
 *   node scripts/clone-project.mjs "<Tên dự án mới>"
 *
 * Copies the entire repository (excluding node_modules, .next, .git, out,
 * and .env.local) into a new sibling directory named after a kebab-case
 * slug of the given project name, updates the new package.json's "name"
 * field to that slug, and seeds a fresh .env.local from .env.example.
 *
 * After cloning, the only files a new project should ever need to touch are
 * src/config/site.ts (domain, phone/Zalo, layoutOrder, image paths) and the
 * files under public/images/ — the core data pipeline (LeadForm, Supabase,
 * CMS, Meta CAPI) is copied as-is and must not be edited per clone.
 */

import fs from "node:fs/promises";
import path from "node:path";

const EXCLUDED_ENTRIES = new Set(["node_modules", ".next", ".git", "out", ".env.local"]);

function toKebabCase(input) {
  return input
    .normalize("NFD")
    .replace(new RegExp("[\\u0300-\\u036f]", "g"), "")
    .trim()
    .toLowerCase()
    .replace(/đ/g, "d")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

async function copyDirectory(sourceDir, destDir) {
  await fs.mkdir(destDir, { recursive: true });
  const entries = await fs.readdir(sourceDir, { withFileTypes: true });

  for (const entry of entries) {
    if (EXCLUDED_ENTRIES.has(entry.name)) {
      continue;
    }

    const sourcePath = path.join(sourceDir, entry.name);
    const destPath = path.join(destDir, entry.name);

    if (entry.isSymbolicLink()) {
      const linkTarget = await fs.readlink(sourcePath);
      await fs.symlink(linkTarget, destPath);
    } else if (entry.isDirectory()) {
      await copyDirectory(sourcePath, destPath);
    } else {
      await fs.copyFile(sourcePath, destPath);
    }
  }
}

async function updatePackageName(destDir, kebabName) {
  const packageJsonPath = path.join(destDir, "package.json");
  const raw = await fs.readFile(packageJsonPath, "utf8");
  const packageJson = JSON.parse(raw);
  packageJson.name = kebabName;
  await fs.writeFile(packageJsonPath, `${JSON.stringify(packageJson, null, 2)}\n`, "utf8");
}

async function pathExists(candidatePath) {
  try {
    await fs.access(candidatePath);
    return true;
  } catch {
    return false;
  }
}

async function createEnvLocal(destDir) {
  const envExamplePath = path.join(destDir, ".env.example");
  const envLocalPath = path.join(destDir, ".env.local");

  if (!(await pathExists(envExamplePath))) {
    console.warn(`Cảnh báo: không tìm thấy ${envExamplePath}, bỏ qua tạo .env.local.`);
    return;
  }

  await fs.copyFile(envExamplePath, envLocalPath);
}

async function main() {
  const projectNameArg = process.argv[2];

  if (!projectNameArg) {
    console.error("Cách dùng: node scripts/clone-project.mjs \"<Tên dự án mới>\"");
    process.exitCode = 1;
    return;
  }

  const kebabName = toKebabCase(projectNameArg);

  if (!kebabName) {
    console.error(`Tên dự án không hợp lệ: "${projectNameArg}"`);
    process.exitCode = 1;
    return;
  }

  const sourceDir = process.cwd();
  const destDir = path.join(path.dirname(sourceDir), kebabName);

  if (await pathExists(destDir)) {
    console.error(`Thư mục đích đã tồn tại, dừng lại để tránh ghi đè: ${destDir}`);
    process.exitCode = 1;
    return;
  }

  console.log(`Đang sao chép "${sourceDir}"\n  -> "${destDir}" ...`);
  await copyDirectory(sourceDir, destDir);

  console.log(`Đang cập nhật package.json "name" thành "${kebabName}" ...`);
  await updatePackageName(destDir, kebabName);

  console.log("Đang tạo .env.local từ .env.example ...");
  await createEnvLocal(destDir);

  console.log(`
Hoàn tất! Dự án mới đã sẵn sàng tại:
  ${destDir}

Các bước tiếp theo:
  1. cd "${destDir}"
  2. npm install
  3. Điền giá trị thật vào .env.local (Supabase, Telegram, CMS_USERNAME/CMS_PASSWORD)
  4. Trong src/config/site.ts, chỉ cần chỉnh: url/basePath (domain), hotline/hotlineDisplay/zaloNumber/zaloLink (số điện thoại),
     layoutOrder (thứ tự sắp xếp section), và images (đường dẫn ảnh) — không cần đụng vào LeadForm, Supabase client, CMS hay Meta CAPI.
  5. Thay ảnh thật trong public/images/ theo đúng tên file được tham chiếu trong images của site.ts.
  6. Cập nhật basePath trong next.config.mjs nếu domain/slug thay đổi, và thêm rewrite tương ứng ở gateway project.
`);
}

main().catch((error) => {
  console.error("Sao chép dự án thất bại:", error);
  process.exitCode = 1;
});

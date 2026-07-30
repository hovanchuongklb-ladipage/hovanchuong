// The set of page sections a clone is allowed to reorder via `layoutOrder`
// below. Every key here must have a matching entry in the `sectionComponents`
// registry in `src/app/page.tsx` — that registry is what actually resolves
// each key to its component; this type only constrains what strings are
// valid to put in the array.
export type SectionKey =
  | "Hero"
  | "ProjectInfo"
  | "Location"
  | "Amenities"
  | "GoldValues"
  | "ApartmentDesign"
  | "FloorPlan"
  | "Pricing";

// Keys into the icon registry each amenity card resolves against (see
// `amenityIcons` in src/components/Amenities.tsx). Config stays plain data —
// it can't hold a React component reference — so it only ever stores which
// icon to use, never the icon itself.
export type AmenityIconKey = "pool" | "restaurant" | "gym" | "mall" | "park" | "security";

export interface AmenityItem {
  icon: AmenityIconKey;
  title: string;
  description: string;
  image: string;
}

export interface FloorPlanItem {
  id: string;
  name: string;
  image: string;
  specs: string;
  stats: { label: string; value: string }[];
}

export interface ApartmentTypeItem {
  id: string;
  name: string;
  image: string;
  areaThongThuy: string;
  areaTimTuong: string;
  gallery: string[];
}

export interface TowerFloorPlateItem {
  id: string;
  tower: string;
  floorRange: string;
  image: string;
}

export const siteConfig = {
  name: "Noble Crystal Riverside",
  shortName: "Noble Crystal Riverside Quận 7",
  description:
    "Noble Crystal Riverside - Tổ hợp căn hộ 4.0 ven sông tại Nam Sài Gòn (Quận 7), phát triển bởi Sunshine Group. Không gian nghỉ dưỡng hình số 8 độc bản trên trục đường Đào Trí, liền kề Phú Mỹ Hưng.",
  // No custom domain/deployment target has been provided for this project
  // yet — basePath is empty (site lives at the domain root) and `url` is a
  // placeholder. Update both together (plus next.config.mjs's basePath)
  // once a real domain or Vercel URL exists; see CLAUDE.md "Deployment
  // notes" for what else needs updating alongside these two.
  url: "https://noble-crystal-riverside.vercel.app",
  basePath: "",
  hotline: "0901440868",
  hotlineDisplay: "0901.440.868",
  zaloNumber: "0901440868",
  zaloLink: "https://zalo.me/0901440868",
  email: "cskh@noblecrystalriverside.com",
  address: "Đường Đào Trí, Phường Phú Thuận, Quận 7, TP. Hồ Chí Minh",
  salesOffice: "1A Phạm Viết Chánh, Phường Nguyễn Cư Trinh, Quận 1, TP. Hồ Chí Minh",
  developer: "Sunshine Group",
  facebook: "https://facebook.com",
  youtube: "https://youtube.com",
  // Top-to-bottom render order of the page sections inside <main> — see
  // `sectionComponents` in src/app/page.tsx.
  layoutOrder: [
    "Hero",
    "ProjectInfo",
    "Location",
    "Amenities",
    "GoldValues",
    "ApartmentDesign",
    "FloorPlan",
    "Pricing",
  ] as SectionKey[],
  // Every local image path a component needs, grouped by the section that
  // consumes it. All local paths point into
  // public/images/noble-crystal-riverside/ — every file there is a real
  // Noble Crystal Riverside asset (sourced from noblecrystalriverside.vn),
  // no boilerplate placeholders. Several sections intentionally reuse the
  // same handful of real images (there is no dedicated photo per amenity/
  // gold-value yet) — see README.txt in that folder for the full mapping
  // and what a follow-up photo drop should replace.
  images: {
    hero: "/images/noble-crystal-riverside/tong-mat-bang.jpg",
    location: "/images/noble-crystal-riverside/ha-tang-giao-thong.jpg",
    apartmentDesign: {
      living: "/images/noble-crystal-riverside/layout-2pn.jpg",
      kitchen: "/images/noble-crystal-riverside/layout-3pn.jpg",
    },
    pricing: "/images/noble-crystal-riverside/chiet-khau-thanh-toan.jpg",
    goldValues: {
      smartHome: "/images/noble-crystal-riverside/ha-tang-giao-thong.jpg",
      greenLiving: "/images/noble-crystal-riverside/tong-mat-bang.jpg",
      luxuryInterior: "/images/noble-crystal-riverside/layout-5pn.jpg",
      security: "/images/noble-crystal-riverside/chiet-khau-thanh-toan.jpg",
    },
  },
  // Array-based sections: each item is a self-contained card (icon key,
  // copy, and its own image) so a section can hold any number of entries —
  // adding/removing/reordering a card is purely a config edit, the
  // components (Amenities.tsx, FloorPlan.tsx) just map over these arrays.
  sections: {
    // No dedicated close-up amenity photography exists for this project yet
    // (only the master site plan showing amenity zones A-L) — every card
    // below temporarily shares tong-mat-bang.jpg until individual photos
    // (pool, gym, retail, playground) are available.
    amenities: [
      {
        icon: "pool",
        title: "Hồ bơi vô cực hình số 8 độc bản",
        description:
          "Đường bơi vô cực uốn lượn hình số 8 xuyên suốt toàn khu, chuẩn nghỉ dưỡng resort ngay tại nội khu.",
        image: "/images/noble-crystal-riverside/tong-mat-bang.jpg",
      },
      {
        icon: "gym",
        title: "Sân tennis & khu thể thao ngoài trời",
        description:
          "Sân tennis tiêu chuẩn cùng các khu tập luyện ngoài trời bố trí xen kẽ mảng xanh cảnh quan.",
        image: "/images/noble-crystal-riverside/tong-mat-bang.jpg",
      },
      {
        icon: "park",
        title: "Vườn cảnh quan & hồ sinh thái nội khu",
        description:
          "Hệ thống hồ cảnh quan, vườn dạo bộ và tiểu cảnh trải dài theo toàn bộ trục hình số 8 của dự án.",
        image: "/images/noble-crystal-riverside/tong-mat-bang.jpg",
      },
      {
        icon: "mall",
        title: "Quảng trường & khu thương mại nội khu",
        description:
          "Quảng trường trung tâm và các tiện ích thương mại – dịch vụ ngay chân đế, đáp ứng nhu cầu cư dân.",
        image: "/images/noble-crystal-riverside/tong-mat-bang.jpg",
      },
      {
        icon: "restaurant",
        title: "Khu vực sinh hoạt cộng đồng",
        description:
          "Không gian sinh hoạt chung, sân chơi trẻ em và khu vực thư giãn bố trí quanh các đảo cảnh quan A-L.",
        image: "/images/noble-crystal-riverside/tong-mat-bang.jpg",
      },
      {
        icon: "security",
        title: "An ninh 24/7 khép kín toàn khu",
        description:
          "Hệ thống kiểm soát ra vào và an ninh 24/7 khép kín cho toàn bộ chu vi hình số 8 của dự án.",
        image: "/images/noble-crystal-riverside/tong-mat-bang.jpg",
      },
    ] as AmenityItem[],
    // Single typical floor plan (mặt bằng điển hình) — this project is one
    // continuous block (unit codes C1-C10), not multiple named towers like
    // the base boilerplate's S2/S3/S4, so there is only one entry here.
    floorPlans: [
      {
        id: "dien-hinh",
        name: "Toàn Dự Án",
        image: "/images/noble-crystal-riverside/mat-bang-dien-hinh.jpg",
        specs: "10 căn/tầng · Lầu 2-19, 22-35 · Cao 37 tầng",
        stats: [
          { label: "Số căn / tầng", value: "10" },
          { label: "Loại căn hộ", value: "2-3 PN" },
          { label: "Thông thủy từ", value: "~104 m²" },
          { label: "Tầng cao nhất", value: "37" },
        ],
      },
    ] as FloorPlanItem[],
    // Individual apartment layouts (mặt bằng theo loại căn hộ). `image` is
    // the 3D floor-plan render; `gallery` holds real staged interior photos
    // (empty for all four here — none provided yet for this project).
    apartmentTypes: [
      {
        id: "2pn",
        name: "Căn hộ 2 Phòng ngủ",
        image: "/images/noble-crystal-riverside/layout-2pn.jpg",
        areaThongThuy: "104,4 ~ 116,6 m²",
        areaTimTuong: "116,2 ~ 129,0 m²",
        gallery: [],
      },
      {
        id: "3pn",
        name: "Căn hộ 3 Phòng ngủ",
        image: "/images/noble-crystal-riverside/layout-3pn.jpg",
        areaThongThuy: "141,0 ~ 141,9 m²",
        areaTimTuong: "155,0 m²",
        gallery: [],
      },
      {
        id: "4pn",
        name: "Sky Villa 4 Phòng ngủ (Duplex 2 tầng)",
        image: "/images/noble-crystal-riverside/layout-4pn.jpg",
        areaThongThuy: "214,3 m² (2 tầng)",
        areaTimTuong: "252,0 m²",
        gallery: [],
      },
      {
        id: "5pn",
        name: "Sky Villa 5 Phòng ngủ (Duplex 2 tầng)",
        image: "/images/noble-crystal-riverside/layout-5pn.jpg",
        areaThongThuy: "Liên hệ để nhận thông tin chi tiết",
        areaTimTuong: "Liên hệ để nhận thông tin chi tiết",
        gallery: [],
      },
    ] as ApartmentTypeItem[],
    // Per-floor-range floor plates (mặt bằng tầng) — one continuous block,
    // so every entry shares the same `tower` label; `floorRange` is what
    // distinguishes each card. Floors 35-37 are the Sky Garden / Sky Villa
    // levels at the top of the building.
    towerFloorPlates: [
      {
        id: "tang2-5",
        tower: "Noble Crystal Riverside",
        floorRange: "Tầng 2 - 5",
        image: "/images/noble-crystal-riverside/floorplate-tang2-5.jpg",
      },
      {
        id: "tang6-14",
        tower: "Noble Crystal Riverside",
        floorRange: "Tầng 6 - 14",
        image: "/images/noble-crystal-riverside/floorplate-tang6-14.jpg",
      },
      {
        id: "tang35",
        tower: "Noble Crystal Riverside",
        floorRange: "Tầng 35 (Sky Garden)",
        image: "/images/noble-crystal-riverside/floorplate-tang35.jpg",
      },
      {
        id: "tang36",
        tower: "Noble Crystal Riverside",
        floorRange: "Tầng 36 (Sky Villas & Sky Garden)",
        image: "/images/noble-crystal-riverside/floorplate-tang36.jpg",
      },
      {
        id: "tang37",
        tower: "Noble Crystal Riverside",
        floorRange: "Tầng 37 (Sky Villas & Sky Garden)",
        image: "/images/noble-crystal-riverside/floorplate-tang37.jpg",
      },
    ] as TowerFloorPlateItem[],
  },
  seo: {
    title: "Noble Crystal Riverside Quận 7 - Tổ Hợp Căn Hộ 4.0 Ven Sông Nam Sài Gòn",
    keywords: [
      "Noble Crystal Riverside",
      "Noble Crystal Riverside Quận 7",
      "căn hộ Đào Trí",
      "Sunshine Group",
      "căn hộ Nam Sài Gòn",
      "căn hộ Phú Mỹ Hưng",
      "chung cư Quận 7",
      "Sky Villa Quận 7",
      "bảng giá Noble Crystal Riverside",
    ],
    // Full absolute URL (not a root-relative path) — see asset()/basePath
    // note below; update once a real domain replaces the Vercel placeholder
    // above.
    ogImage: "https://noble-crystal-riverside.vercel.app/images/noble-crystal-riverside/tong-mat-bang.jpg",
  },
  nav: [
    { label: "Tổng quan", href: "#tong-quan" },
    { label: "Vị trí", href: "#vi-tri" },
    { label: "Tiện ích", href: "#tien-ich" },
    { label: "Thiết kế", href: "#thiet-ke" },
    { label: "Mặt bằng", href: "#mat-bang" },
    { label: "Giá bán", href: "#gia-ban" },
    { label: "Liên hệ", href: "#lien-he" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;

/**
 * Prefixes a root-relative local path (e.g. "/images/hero.jpg") with the
 * app's basePath. Next.js auto-prefixes `next/link` hrefs, but NOT
 * `next/image` `src` values for local images — those must be prefixed
 * manually, or the image optimizer's internal lookup 404s once basePath is
 * set. Absolute URLs (external images, e.g. Unsplash placeholders) are
 * returned unchanged. With `basePath: ""` this is currently a no-op, but
 * every local image still goes through it so nothing breaks if this project
 * later moves under a subpath.
 */
export function asset(path: string): string {
  if (/^https?:\/\//.test(path)) {
    return path;
  }
  return `${siteConfig.basePath}${path}`;
}

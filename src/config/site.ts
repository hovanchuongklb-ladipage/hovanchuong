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
  name: "Sunshine Sky City",
  shortName: "Sunshine Sky City Quận 7",
  description:
    "Sunshine Sky City - Tái định nghĩa chuẩn sống tầm cao mới giữa lòng Quận 7, TP. Hồ Chí Minh. Chuẩn sống 5 sao Smart Compound đẳng cấp quốc tế.",
  // This clone owns its own standalone domain in Vercel (chauthanhvuong.site)
  // — no gateway/rewrite project involved, unlike the base boilerplate.
  // basePath is still set because the site is meant to live at /skycity on
  // that domain, not at the domain root. Keep this in sync with
  // next.config.mjs's basePath.
  url: "https://chauthanhvuong.site/skycity",
  basePath: "/skycity",
  hotline: "0901841064",
  hotlineDisplay: "0901.841.064",
  zaloNumber: "0901841064",
  zaloLink: "https://zalo.me/0901841064",
  email: "cskh@canhoquan7.site",
  address: "Ngã tư Phú Thuận & Huỳnh Tấn Phát, Phường Tân Phú, Quận 7, TP. Hồ Chí Minh",
  salesOffice: "1A Phạm Viết Chánh, Phường Nguyễn Cư Trinh, Quận 1, TP. Hồ Chí Minh",
  developer: "Sunshine Group",
  facebook: "https://facebook.com",
  youtube: "https://youtube.com",
  // Top-to-bottom render order of the page sections inside <main> — see
  // `sectionComponents` in src/app/page.tsx. Deliberately reordered from the
  // base boilerplate's Hero/ProjectInfo/Location/... sequence to give this
  // clone a distinct browsing flow while reusing the exact same components.
  layoutOrder: [
    "Hero",
    "GoldValues",
    "Amenities",
    "Location",
    "ApartmentDesign",
    "FloorPlan",
    "ProjectInfo",
    "Pricing",
  ] as SectionKey[],
  // Every local image path a component needs, grouped by the section that
  // consumes it. All local paths point into public/images/chau-thanh-vuong/
  // — a folder created specifically for this clone so its photography never
  // collides with the base boilerplate's public/images/*.jpg. The files
  // currently in that folder are copies of the boilerplate renders acting as
  // working placeholders; drop in this project's real photos under the same
  // filenames (see public/images/chau-thanh-vuong/README.txt) and no code
  // changes are needed.
  images: {
    logo: "/images/chau-thanh-vuong/logo-sky-city-1.png",
    hero: "/images/chau-thanh-vuong/hero-twilight-riverside.jpg",
    location: "/images/chau-thanh-vuong/location-map.jpg",
    apartmentDesign: {
      living: "/images/chau-thanh-vuong/interior-living-piano.jpg",
      kitchen: "/images/chau-thanh-vuong/interior-kitchen-dining.jpg",
    },
    pricing: "/images/chau-thanh-vuong/towers-dusk-riverside.jpg",
    goldValues: {
      smartHome: "/images/chau-thanh-vuong/smart-home-tech.jpg",
      greenLiving: "/images/chau-thanh-vuong/amenity-fountain-walkway.jpg",
      luxuryInterior: "/images/chau-thanh-vuong/interior-living-piano.jpg",
      security: "/images/chau-thanh-vuong/amenity-retail-podium.jpg",
    },
  },
  // Array-based sections: each item is a self-contained card (icon key,
  // copy, and its own image) so a section can hold any number of entries —
  // adding/removing/reordering a card is purely a config edit, the
  // components (Amenities.tsx, FloorPlan.tsx) just map over these arrays.
  sections: {
    amenities: [
      {
        icon: "pool",
        title: "Hồ bơi vô cực Rooftop chuẩn Resort",
        description:
          "Hồ bơi tràn bờ trên cao, phóng tầm mắt toàn cảnh thành phố, mang chuẩn nghỉ dưỡng 5 sao.",
        image: "/images/chau-thanh-vuong/amenity-pool-rooftop.jpg",
      },
      {
        icon: "restaurant",
        title: "Nhà hàng sang trọng",
        description:
          "Không gian ẩm thực đẳng cấp ngay trong nội khu, phục vụ cư dân theo tiêu chuẩn khách sạn 5 sao.",
        image: "/images/chau-thanh-vuong/amenity-restaurant.jpg",
      },
      {
        icon: "gym",
        title: "Phòng Gym & Yoga Fitness",
        description:
          "Trung tâm thể chất hiện đại, trang bị đầy đủ dụng cụ tập luyện tiêu chuẩn quốc tế.",
        image: "/images/chau-thanh-vuong/amenity-gym.jpg",
      },
      {
        icon: "mall",
        title: "Trung tâm thương mại nội khu",
        description:
          "Hệ tiện ích thương mại – dịch vụ ngay chân đế, đáp ứng mọi nhu cầu cư dân.",
        image: "/images/chau-thanh-vuong/amenity-retail-podium.jpg",
      },
      {
        icon: "park",
        title: "Khu vui chơi trẻ em ngoài trời",
        description:
          "Sân chơi liên hoàn dưới tán cây xanh mát, dành riêng cho các thiên thần nhỏ của gia đình.",
        image: "/images/chau-thanh-vuong/amenity-kids-playground.jpg",
      },
      {
        icon: "security",
        title: "An ninh 24/7 công nghệ Smart Living",
        description:
          "Hệ thống nhận diện khuôn mặt, kiểm soát ra vào thông minh cho từng căn hộ.",
        // Already an absolute external URL (Unsplash placeholder) — asset()
        // passes it through unchanged, same as every other external image.
        image:
          "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1200&q=80",
      },
    ] as AmenityItem[],
    floorPlans: [
      {
        id: "s2",
        name: "Tòa S2",
        image: "/images/chau-thanh-vuong/hero-aerial-day.jpg",
        specs: "356 sản phẩm • 108 căn hộ • 10 Sky Villa • 238 văn phòng đa năng",
        stats: [
          { label: "Tổng sản phẩm", value: "356" },
          { label: "Căn hộ", value: "108" },
          { label: "Sky Villa", value: "10" },
          { label: "Văn phòng đa năng", value: "238" },
        ],
      },
      {
        id: "s3",
        name: "Tòa S3",
        image: "/images/chau-thanh-vuong/towers-dusk-riverside.jpg",
        specs: "379 sản phẩm • 108 căn hộ • 9 Sky Villa • 262 văn phòng đa năng",
        stats: [
          { label: "Tổng sản phẩm", value: "379" },
          { label: "Căn hộ", value: "108" },
          { label: "Sky Villa", value: "9" },
          { label: "Văn phòng đa năng", value: "262" },
        ],
      },
      {
        id: "s4",
        name: "Tòa S4",
        image: "/images/chau-thanh-vuong/towers-street-day.jpg",
        specs: "385 sản phẩm • 108 căn hộ • 12 Sky Villa • 265 văn phòng đa năng",
        stats: [
          { label: "Tổng sản phẩm", value: "385" },
          { label: "Căn hộ", value: "108" },
          { label: "Sky Villa", value: "12" },
          { label: "Văn phòng đa năng", value: "265" },
        ],
      },
    ] as FloorPlanItem[],
    // Individual apartment layouts (mặt bằng theo loại căn hộ). `image` is
    // the floor-plan diagram; `gallery` holds real interior sample photos
    // for that unit type (can be empty — 4PN has no staged photos yet).
    apartmentTypes: [
      {
        id: "2pn",
        name: "Căn hộ 2 Phòng ngủ",
        image: "/images/chau-thanh-vuong/floorplan-2pn.jpg",
        areaThongThuy: "61 ~ 68 m²",
        areaTimTuong: "69 ~ 77 m²",
        gallery: [
          "/images/chau-thanh-vuong/floorplan-2pn-living.jpg",
          "/images/chau-thanh-vuong/floorplan-2pn-bedroom.jpg",
        ],
      },
      {
        id: "3pn",
        name: "Căn hộ 3 Phòng ngủ",
        image: "/images/chau-thanh-vuong/floorplan-3pn.jpg",
        areaThongThuy: "95 ~ 102 m²",
        areaTimTuong: "105 ~ 113 m²",
        gallery: [
          "/images/chau-thanh-vuong/floorplan-3pn-living.jpg",
          "/images/chau-thanh-vuong/floorplan-3pn-bedroom.jpg",
        ],
      },
      {
        id: "4pn",
        name: "Căn hộ 4 Phòng ngủ",
        image: "/images/chau-thanh-vuong/floorplan-4pn.jpg",
        areaThongThuy: "102 ~ 132 m²",
        areaTimTuong: "114 ~ 148 m²",
        gallery: [],
      },
    ] as ApartmentTypeItem[],
    // Per-tower, per-floor-range floor plates (mặt bằng tầng).
    towerFloorPlates: [
      {
        id: "v7-24-34",
        tower: "Tòa V7",
        floorRange: "Tầng 24 - 26, 28 - 34",
        image: "/images/chau-thanh-vuong/floorplate-v7-tang24-34.jpg",
      },
      {
        id: "v7-12-23",
        tower: "Tòa V7",
        floorRange: "Tầng 12, 14 - 23",
        image: "/images/chau-thanh-vuong/floorplate-v7-tang12-23.jpg",
      },
      {
        id: "v8-12-23",
        tower: "Tòa V8",
        floorRange: "Tầng 12, 14 - 23",
        image: "/images/chau-thanh-vuong/floorplate-v8-tang12-23.jpg",
      },
      {
        id: "v8-24-34",
        tower: "Tòa V8",
        floorRange: "Tầng 24 - 26, 28 - 34",
        image: "/images/chau-thanh-vuong/floorplate-v8-tang24-34.jpg",
      },
      {
        id: "v9-15-24",
        tower: "Tòa V9",
        floorRange: "Tầng 15 - 24",
        image: "/images/chau-thanh-vuong/floorplate-v9-tang15-24.jpg",
      },
      {
        id: "v9-25-34",
        tower: "Tòa V9",
        floorRange: "Tầng 25 - 34",
        image: "/images/chau-thanh-vuong/floorplate-v9-tang25-34.jpg",
      },
    ] as TowerFloorPlateItem[],
  },
  seo: {
    title: "Sunshine Sky City Quận 7 - Tái Định Nghĩa Chuẩn Sống Tầm Cao Mới",
    keywords: [
      "Sunshine Sky City",
      "Sunshine Sky City Quận 7",
      "căn hộ Quận 7",
      "Sunshine Group",
      "Sunshine Homes",
      "căn hộ Phú Mỹ Hưng",
      "chung cư Quận 7",
      "Sky Villa Quận 7",
      "bảng giá Sunshine Sky City",
    ],
    // Full absolute URL (not a root-relative path) — a leading "/" here
    // would resolve against the domain root and silently drop the
    // /skycity prefix when combined with metadataBase.
    ogImage: "https://chauthanhvuong.site/skycity/images/chau-thanh-vuong/hero-twilight-riverside.jpg",
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
 * returned unchanged.
 */
export function asset(path: string): string {
  if (/^https?:\/\//.test(path)) {
    return path;
  }
  return `${siteConfig.basePath}${path}`;
}

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
  url: "https://noble-crystal-riverside.vercel.app",
  basePath: "",
  hotline: "0901440868",
  hotlineDisplay: "0901.440.868",
  zaloNumber: "0901440868",
  zaloLink: "https://zalo.me/0901440868",
  email: "cskh@noblecrystalriverside.com",
  address: "Đường Đào Trí, Phường Phú Thuận, Quận 7, TP. Hồ Chí Minh",
  salesOffice: "422 Đường Đào Trí, Phường Phú Thuận, Quận 7, TP. Hồ Chí Minh",
  developer: "Sunshine Group",
  facebook: "https://facebook.com",
  youtube: "https://youtube.com",
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
  images: {
    hero: "/images/noble-crystal-riverside/hero-exterior.jpg",
    location: "/images/noble-crystal-riverside/location-map.jpg",
    apartmentDesign: {
      living: "/images/noble-crystal-riverside/interior-3pn-1.jpg",
      kitchen: "/images/noble-crystal-riverside/interior-3pn-5.jpg",
    },
    pricing: "/images/noble-crystal-riverside/pricing-1.jpg",
    goldValues: {
      smartHome: "/images/noble-crystal-riverside/location-map.jpg",
      greenLiving: "/images/noble-crystal-riverside/gold-scenery-1.jpg",
      luxuryInterior: "/images/noble-crystal-riverside/interior-4pn-1.jpg",
      security: "/images/noble-crystal-riverside/6-core-values.jpg",
    },
  },
  sections: {
    amenities: [
      {
        icon: "pool",
        title: "Hồ bơi vô cực hình số 8 độc bản",
        description:
          "Đường bơi vô cực uốn lượn hình số 8 xuyên suốt toàn khu, chuẩn nghỉ dưỡng resort ngay tại nội khu.",
        image: "/images/noble-crystal-riverside/amenity-pool.jpg",
      },
      {
        icon: "gym",
        title: "Sân tennis & khu thể thao ngoài trời",
        description:
          "Sân tennis tiêu chuẩn cùng các khu tập luyện ngoài trời bố trí xen kẽ mảng xanh cảnh quan.",
        image: "/images/noble-crystal-riverside/amenity-gym.jpg",
      },
      {
        icon: "park",
        title: "Vườn cảnh quan & hồ sinh thái nội khu",
        description:
          "Hệ thống hồ cảnh quan, vườn dạo bộ và tiểu cảnh trải dài theo toàn bộ trục hình số 8 của dự án.",
        image: "/images/noble-crystal-riverside/amenity-park.jpg",
      },
      {
        icon: "mall",
        title: "Quảng trường & khu thương mại nội khu",
        description:
          "Quảng trường trung tâm và các tiện ích thương mại – dịch vụ ngay chân đế, đáp ứng nhu cầu cư dân.",
        image: "/images/noble-crystal-riverside/amenity-mall.jpg",
      },
      {
        icon: "restaurant",
        title: "Khu vực sinh hoạt cộng đồng",
        description:
          "Không gian sinh hoạt chung, sân chơi trẻ em và khu vực thư giãn bố trí quanh các đảo cảnh quan A-L.",
        image: "/images/noble-crystal-riverside/amenity-community.jpg",
      },
      {
        icon: "security",
        title: "An ninh 24/7 khép kín toàn khu",
        description:
          "Hệ thống kiểm soát ra vào và an ninh 24/7 khép kín cho toàn bộ chu vi hình số 8 của dự án.",
        image: "/images/noble-crystal-riverside/amenity-security.jpg",
      },
    ] as AmenityItem[],
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
    apartmentTypes: [
      {
        id: "2pn",
        name: "Căn hộ 2 Phòng ngủ",
        image: "/images/noble-crystal-riverside/layout-2pn.jpg",
        areaThongThuy: "104,4 ~ 116,6 m²",
        areaTimTuong: "116,2 ~ 129,0 m²",
        gallery: [
          "/images/noble-crystal-riverside/interior-2pn-1.jpg",
          "/images/noble-crystal-riverside/interior-2pn-2.jpg",
          "/images/noble-crystal-riverside/interior-2pn-3.jpg",
          "/images/noble-crystal-riverside/interior-2pn-4.jpg",
          "/images/noble-crystal-riverside/interior-2pn-5.jpg",
          "/images/noble-crystal-riverside/interior-2pn-6.jpg",
        ],
      },
      {
        id: "3pn",
        name: "Căn hộ 3 Phòng ngủ",
        image: "/images/noble-crystal-riverside/layout-3pn.jpg",
        areaThongThuy: "141,0 ~ 141,9 m²",
        areaTimTuong: "155,0 m²",
        gallery: [
          "/images/noble-crystal-riverside/interior-3pn-1.jpg",
          "/images/noble-crystal-riverside/interior-3pn-2.jpg",
          "/images/noble-crystal-riverside/interior-3pn-3.jpg",
          "/images/noble-crystal-riverside/interior-3pn-4.jpg",
          "/images/noble-crystal-riverside/interior-3pn-5.jpg",
          "/images/noble-crystal-riverside/interior-3pn-6.jpg",
        ],
      },
      {
        id: "4pn",
        name: "Sky Villa 4 Phòng ngủ (Duplex 2 tầng)",
        image: "/images/noble-crystal-riverside/layout-4pn.jpg",
        areaThongThuy: "214,3 m² (2 tầng)",
        areaTimTuong: "252,0 m²",
        gallery: [
          "/images/noble-crystal-riverside/interior-4pn-1.jpg",
          "/images/noble-crystal-riverside/interior-4pn-2.jpg",
          "/images/noble-crystal-riverside/interior-4pn-3.jpg",
          "/images/noble-crystal-riverside/interior-4pn-4.jpg",
          "/images/noble-crystal-riverside/interior-4pn-5.jpg",
        ],
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
    ogImage: "https://noble-crystal-riverside.vercel.app/images/noble-crystal-riverside/hero-exterior.jpg",
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

export function asset(path: string): string {
  if (/^https?:\/\//.test(path)) {
    return path;
  }
  return `${siteConfig.basePath}${path}`;
}
const facts: { label: string; value: string }[] = [
  { label: "Tên dự án", value: "Sunshine Sky City" },
  { label: "Vị trí", value: "Đường Phú Thuận, Phường Tân Phú, Quận 7, TP. Hồ Chí Minh" },
  { label: "Chủ đầu tư", value: "Sunshine Homes (Sunshine Group)" },
  { label: "Đơn vị thi công", value: "Hòa Bình" },
  { label: "Tư vấn giám sát", value: "Apave Châu Á Thái Bình Dương" },
  { label: "Quy mô dự án", value: "Hơn 4,2 ha" },
  { label: "Số tòa tháp", value: "9 tòa tháp cao 9 - 38 tầng" },
  { label: "Loại hình sản phẩm", value: "Căn hộ, Sky Villa, Duplex, Penthouse, Văn phòng đa năng" },
  { label: "Diện tích căn hộ", value: "50 - 117 m² (1 - 3 phòng ngủ)" },
  { label: "Khởi công", value: "Quý 4/2018" },
  { label: "Hình thức sở hữu", value: "Sổ hồng lâu dài (người Việt Nam) / 50 năm (người nước ngoài)" },
];

export function ProjectInfo() {
  return (
    <section className="bg-navy-950 pb-16 sm:pb-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-2xl border border-gold-500/20 bg-white/5">
          <div className="border-b border-gold-500/20 px-6 py-4">
            <h2 className="font-display text-lg font-bold text-gold-400 sm:text-xl">
              Thông Tin Tổng Quan Dự Án
            </h2>
          </div>
          <dl className="grid grid-cols-1 divide-y divide-white/10 sm:grid-cols-2 sm:divide-x sm:divide-y-0">
            {facts.map((fact, index) => (
              <div
                key={fact.label}
                className={`flex flex-col gap-1 px-6 py-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4 ${
                  index % 2 === 0 ? "" : "sm:pl-8"
                }`}
              >
                <dt className="text-sm font-semibold text-white/60">{fact.label}</dt>
                <dd className="text-sm font-medium text-white sm:text-right">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

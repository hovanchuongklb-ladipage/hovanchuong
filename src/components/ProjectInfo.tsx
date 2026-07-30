const facts: { label: string; value: string }[] = [
  { label: "Tên dự án", value: "Noble Crystal Riverside" },
  { label: "Vị trí", value: "Đường Đào Trí, Phường Phú Thuận, Quận 7, TP. Hồ Chí Minh" },
  { label: "Phát triển bởi", value: "Sunshine Group" },
  { label: "Số tầng", value: "37 tầng" },
  { label: "Số căn / tầng điển hình", value: "10 căn (đơn nguyên C1 - C10)" },
  { label: "Loại hình sản phẩm", value: "Căn hộ 2 - 3PN, Sky Villa & Sky Garden duplex 4 - 5PN" },
  { label: "Diện tích căn hộ", value: "~104 - 155 m² thông thủy (2 - 3 phòng ngủ)" },
  { label: "Diện tích Sky Villa", value: "~214 m² thông thủy, duplex 2 tầng" },
  { label: "Không gian nghỉ dưỡng", value: "Hồ bơi vô cực & vườn cảnh quan hình số 8" },
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

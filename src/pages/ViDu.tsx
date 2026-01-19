import React from "react";
import daiHoiDangImg from "../assets/daihoidang.jpg";

const ViDuPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-50">
      <div className="max-w-6xl mx-auto px-4 py-8 lg:py-12">
        {/* Top heading */}
        <div className="mb-8">
          <div className="text-xs uppercase tracking-widest text-slate-400">
            TƯ TƯỞNG HỒ CHÍ MINH - CHƯƠNG V · Liên hệ thực tế
          </div>

          <h1 className="mt-2 text-2xl md:text-3xl font-bold leading-snug">
            Đại đoàn kết dân tộc trong quá trình chuẩn bị Đại hội Đảng lần thứ XIV
          </h1>

          <p className="mt-2 text-sm text-slate-300">
            Từ bối cảnh, biểu hiện đến ý nghĩa: thể hiện sinh động tư tưởng đại đoàn kết dân tộc của Hồ Chí Minh trong đời sống chính trị - xã hội hiện nay.
          </p>

          <div className="mt-3 flex flex-wrap items-center gap-3 text-xs text-slate-400">
            <span className="inline-flex items-center gap-1 rounded-full bg-slate-800 px-3 py-1">
              <span>📅</span>
              <span>Cập nhật: 2026</span>
            </span>
            <span className="inline-flex items-center gap-1 rounded-full bg-orange-500/10 text-orange-300 px-3 py-1">
              <span>🤝</span>
              <span>Đại đoàn kết dân tộc</span>
            </span>
          </div>
        </div>

        {/* Main layout */}
        <div>
          {/* Article */}
          <article className="space-y-8">
            {/* Hero placeholder */}
            <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-800/60">
              <div className="relative h-40 md:h-56">
                <img
                  src={daiHoiDangImg}
                  alt="Đại hội Đảng"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900/70 via-slate-900/40 to-slate-900/60" />
              </div>
              <p className="px-4 py-3 text-xs text-slate-300 border-t border-slate-700/60">
                Liên hệ thực tế tư tưởng Hồ Chí Minh về đại đoàn kết dân tộc qua quá trình chuẩn bị Đại hội XIV.
              </p>
            </div>

            {/* Section 1 */}
            <section id="boi-canh" className="space-y-3">
              <h2 className="text-xl font-semibold text-orange-300">
                1️⃣ Bối cảnh sự kiện
              </h2>
              <div className="rounded-2xl border border-slate-700 bg-slate-800/40 p-5 space-y-3">
                <p className="text-sm md:text-base text-slate-200 leading-relaxed">
                  Đại hội Đảng toàn quốc lần thứ XIV là <span className="font-semibold">sự kiện chính trị đặc biệt quan trọng</span>, định hướng chiến lược phát triển đất nước giai đoạn mới và tầm nhìn dài hạn cho dân tộc Việt Nam.
                </p>
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="rounded-xl border border-slate-700/60 bg-slate-900/30 p-4">
                    <div className="text-xs font-semibold text-orange-300 mb-2">Định hướng</div>
                    <ul className="list-disc list-inside text-sm text-slate-200 space-y-1">
                      <li>Chiến lược phát triển giai đoạn mới</li>
                      <li>Tầm nhìn dài hạn cho dân tộc</li>
                    </ul>
                  </div>
                  <div className="rounded-xl border border-slate-700/60 bg-slate-900/30 p-4">
                    <div className="text-xs font-semibold text-orange-300 mb-2">Nhấn mạnh trong chuẩn bị</div>
                    <ul className="list-disc list-inside text-sm text-slate-200 space-y-1">
                      <li>Sự thống nhất về tư tưởng</li>
                      <li>Sự đồng thuận trong toàn xã hội</li>
                    </ul>
                  </div>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed">
                  → Đây là biểu hiện sinh động của tư tưởng <span className="font-semibold">đại đoàn kết dân tộc</span> của Hồ Chí Minh.
                </p>
              </div>
            </section>

            {/* Section 2 */}
            <section id="bieu-hien" className="space-y-3">
              <h2 className="text-xl font-semibold text-orange-300">
                2️⃣ Biểu hiện của đại đoàn kết dân tộc hướng tới Đại hội XIV
              </h2>

              <div className="grid lg:grid-cols-3 gap-4 items-stretch">
                <div className="rounded-2xl border border-slate-700 bg-slate-800/40 p-5 space-y-3">
                  <div className="text-sm font-semibold text-slate-100">🔹 Thứ nhất: Phát huy sự tham gia của toàn dân</div>
                  <ul className="list-disc list-inside text-sm text-slate-200 space-y-1">
                    <li>Góp ý văn kiện Đại hội</li>
                    <li>Góp ý định hướng phát triển kinh tế – xã hội</li>
                    <li>Triển khai rộng rãi trong Đảng, nhân dân, trí thức & chuyên gia</li>
                  </ul>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    👉 Thể hiện quan điểm: <span className="font-semibold">đoàn kết toàn dân</span>, không phân biệt vị trí xã hội, miễn là vì lợi ích dân tộc.
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-700 bg-slate-800/40 p-5 space-y-3">
                  <div className="text-sm font-semibold text-slate-100">🔹 Thứ hai: Lấy lợi ích quốc gia – dân tộc làm điểm thống nhất</div>
                  <ul className="list-disc list-inside text-sm text-slate-200 space-y-1">
                    <li>Phát triển đất nước bền vững</li>
                    <li>Giữ vững độc lập, chủ quyền</li>
                    <li>Nâng cao đời sống nhân dân</li>
                    <li>Gác lại khác biệt cục bộ, lợi ích riêng</li>
                  </ul>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    👉 Vận dụng trực tiếp tư tưởng: <span className="font-semibold">“Dân tộc trên hết, Tổ quốc trên hết.”</span>
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-700 bg-slate-800/40 p-5 space-y-3">
                  <div className="text-sm font-semibold text-slate-100">🔹 Thứ ba: Củng cố khối đoàn kết trước thách thức mới</div>
                  <ul className="list-disc list-inside text-sm text-slate-200 space-y-1">
                    <li>Hội nhập quốc tế sâu rộng</li>
                    <li>Chuyển đổi số</li>
                    <li>Biến động kinh tế – chính trị toàn cầu</li>
                  </ul>
                  <div className="rounded-xl border border-slate-700/60 bg-slate-900/30 p-4">
                    <div className="text-xs font-semibold text-orange-300 mb-2">Nhấn mạnh</div>
                    <ul className="list-disc list-inside text-sm text-slate-200 space-y-1">
                      <li>Giữ vững ổn định chính trị</li>
                      <li>Tăng cường niềm tin của nhân dân vào Đảng</li>
                      <li>Phát huy sức mạnh tổng hợp toàn dân tộc</li>
                    </ul>
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    👉 Phản ánh tinh thần: <span className="font-semibold">đại đoàn kết là nguồn sức mạnh quyết định mọi thắng lợi</span>, kể cả trong thời bình.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 3 */}
            <section id="y-nghia" className="space-y-3">
              <h2 className="text-xl font-semibold text-orange-300">
                3️⃣ Ý nghĩa của đại đoàn kết dân tộc qua sự kiện Đại hội XIV
              </h2>

              <div className="grid md:grid-cols-3 gap-4">
                <div className="rounded-2xl border border-slate-700 bg-slate-800/40 p-5 space-y-2">
                  <div className="text-sm font-semibold text-slate-100">🔹 Đối với Đảng và Nhà nước</div>
                  <ul className="list-disc list-inside text-sm text-slate-200 space-y-1">
                    <li>Củng cố vai trò lãnh đạo của Đảng</li>
                    <li>Tạo nền tảng chính trị – xã hội vững chắc cho giai đoạn phát triển mới</li>
                  </ul>
                </div>

                <div className="rounded-2xl border border-slate-700 bg-slate-800/40 p-5 space-y-2">
                  <div className="text-sm font-semibold text-slate-100">🔹 Đối với nhân dân</div>
                  <ul className="list-disc list-inside text-sm text-slate-200 space-y-1">
                    <li>Người dân không đứng ngoài tiến trình chính trị</li>
                    <li>Trở thành chủ thể tham gia xây dựng đất nước</li>
                  </ul>
                </div>

                <div className="rounded-2xl border border-slate-700 bg-slate-800/40 p-5 space-y-2">
                  <div className="text-sm font-semibold text-slate-100">🔹 Đối với sinh viên và thế hệ trẻ</div>
                  <ul className="list-disc list-inside text-sm text-slate-200 space-y-1">
                    <li>Thể hiện trách nhiệm: đồng hành cùng dân tộc</li>
                    <li>Góp ý, cống hiến trí tuệ</li>
                    <li>Giữ vững tinh thần đoàn kết trong học tập và lao động</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Notes area */}
            
          </article>
        </div>
      </div>
    </div>
  );
};

export default ViDuPage;
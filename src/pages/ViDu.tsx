import React from "react";

const ViDuPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-50">
      <div className="max-w-6xl mx-auto px-4 py-8 lg:py-12">
        {/* Top heading */}
        <div className="mb-8">
          <div className="text-xs uppercase tracking-widest text-slate-400">
            HỌC THUYẾT MÁC – LÊNIN · Chương 3 · Ví dụ thực tiễn
          </div>

          <h1 className="mt-2 text-2xl md:text-3xl font-bold leading-snug">
            Các quốc gia theo mô hình XHCN và ứng dụng thực tiễn tại Việt Nam
          </h1>

          <p className="mt-2 text-sm text-slate-300">
            Tìm hiểu các quốc gia theo chủ nghĩa xã hội và phân tích cụ thể chương trình giảm nghèo bền vững tại Việt Nam qua 6 đặc trưng CNXH.
          </p>

          <div className="mt-3 flex flex-wrap items-center gap-3 text-xs text-slate-400">
            <span className="inline-flex items-center gap-1 rounded-full bg-slate-800 px-3 py-1">
              <span>✍️</span>
              <span>Tác giả: Tên của bạn</span>
            </span>
            <span className="inline-flex items-center gap-1 rounded-full bg-slate-800 px-3 py-1">
              <span>📅</span>
              <span>Cập nhật: 2025</span>
            </span>
            <span className="inline-flex items-center gap-1 rounded-full bg-blue-500/10 text-blue-300 px-3 py-1">
              <span>🌍</span>
              <span>Ví dụ thực tiễn</span>
            </span>
          </div>
        </div>

        {/* Main layout */}
        <div>
          {/* Article */}
          <article className="space-y-8">
            {/* Hero placeholder */}
            <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-800/60">
              <div className="h-40 md:h-56 bg-gradient-to-r from-red-400/20 via-yellow-500/10 to-blue-400/20" />
              <p className="px-4 py-3 text-xs text-slate-300 border-t border-slate-700/60">
                Nghiên cứu thực tiễn áp dụng chủ nghĩa xã hội trên thế giới và tại Việt Nam.
              </p>
            </div>

            {/* Section 1 */}
            <section id="cac-quoc-gia-xhcn" className="space-y-3">
              <h2 className="text-xl font-semibold text-blue-300">
                🌍 Các quốc gia theo mô hình XHCN (dựa trên chủ nghĩa Mác – Lênin)
              </h2>
              <p className="text-sm md:text-base text-slate-200 leading-relaxed">
                Hiện nay trên thế giới có <span className="font-semibold">5 quốc gia</span> theo mô hình chủ nghĩa xã hội dựa trên nền tảng học thuyết Mác – Lênin:
              </p>
              <ul className="list-disc pl-6 text-sm md:text-base text-slate-200 space-y-1">
                <li>🇨🇳 Trung Quốc</li>
                <li>🇰🇵 Triều Tiên</li>
                <li>🇨🇺 Cuba</li>
                <li>🇱🇦 Lào</li>
                <li>🇻🇳 Việt Nam</li>
              </ul>
              <div className="mt-4 rounded-xl border border-slate-700 bg-slate-800/40 p-4">
                <h3 className="text-sm font-semibold text-slate-100 mb-2">
                  Đặc điểm chung:
                </h3>
                <ul className="list-disc pl-6 text-sm text-slate-200 space-y-1">
                  <li>Đảng Cộng sản lãnh đạo</li>
                  <li>Nhà nước giữ vai trò trung tâm trong định hướng phát triển</li>
                  <li>Mục tiêu: công bằng xã hội – an sinh – phát triển con người</li>
                </ul>
              </div>
            </section>

            {/* Section 2 */}
            <section id="viet-nam" className="space-y-3">
              <h2 className="text-xl font-semibold text-blue-300">
                🇻🇳 Việt Nam – "Kinh tế thị trường định hướng XHCN"
              </h2>
              
              <div className="space-y-4">
                <div className="rounded-xl border border-slate-700 bg-slate-800/40 p-4">
                  <h3 className="text-base font-semibold text-yellow-300 mb-2">
                    Chính trị:
                  </h3>
                  <ul className="list-disc pl-6 text-sm text-slate-200 space-y-1">
                    <li>Đảng Cộng sản Việt Nam lãnh đạo</li>
                    <li>Mục tiêu: dân giàu – nước mạnh – dân chủ – công bằng – văn minh</li>
                  </ul>
                </div>

                <div className="rounded-xl border border-slate-700 bg-slate-800/40 p-4">
                  <h3 className="text-base font-semibold text-yellow-300 mb-2">
                    Kinh tế:
                  </h3>
                  <ul className="list-disc pl-6 text-sm text-slate-200 space-y-1">
                    <li>Nhiều thành phần kinh tế, vận hành theo cơ chế thị trường</li>
                    <li>Nhà nước định hướng, điều tiết vĩ mô</li>
                    <li>Phát triển lực lượng sản xuất, hạn chế mặt trái của thị trường</li>
                  </ul>
                </div>

                <div className="rounded-xl border border-slate-700 bg-slate-800/40 p-4">
                  <h3 className="text-base font-semibold text-yellow-300 mb-2">
                    Xã hội:
                  </h3>
                  <ul className="list-disc pl-6 text-sm text-slate-200 space-y-1">
                    <li>Giảm nghèo bền vững, giáo dục phổ cập, bảo hiểm y tế toàn dân</li>
                    <li>Phát triển gắn với công bằng xã hội</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 3 */}
            <section id="cuba" className="space-y-3">
              <h2 className="text-xl font-semibold text-blue-300">
                🇨🇺 Cuba – Mô hình phúc lợi xã hội điển hình
              </h2>
              
              <div className="space-y-4">
                <div className="rounded-xl border border-slate-700 bg-slate-800/40 p-4">
                  <h3 className="text-base font-semibold text-red-300 mb-2">
                    Chính trị:
                  </h3>
                  <p className="text-sm text-slate-200">Đảng Cộng sản Cuba lãnh đạo</p>
                </div>

                <div className="rounded-xl border border-slate-700 bg-slate-800/40 p-4">
                  <h3 className="text-base font-semibold text-red-300 mb-2">
                    Kinh tế:
                  </h3>
                  <ul className="list-disc pl-6 text-sm text-slate-200 space-y-1">
                    <li>Công hữu tư liệu sản xuất, phân phối theo kế hoạch</li>
                    <li>Ưu tiên y tế – giáo dục – an sinh xã hội</li>
                  </ul>
                </div>

                <div className="rounded-xl border border-slate-700 bg-slate-800/40 p-4">
                  <h3 className="text-base font-semibold text-red-300 mb-2">
                    Xã hội:
                  </h3>
                  <ul className="list-disc pl-6 text-sm text-slate-200 space-y-1">
                    <li>Y tế & giáo dục miễn phí 100%</li>
                    <li>"Ngoại giao bác sĩ" nổi tiếng thế giới</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Comparison table */}
            <section id="so-sanh" className="space-y-3">
              <h2 className="text-xl font-semibold text-blue-300">
                So sánh nhanh Việt Nam - Cuba
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                  <thead className="text-xs uppercase bg-slate-800 text-slate-300">
                    <tr>
                      <th className="px-4 py-3 rounded-tl-lg">Tiêu chí</th>
                      <th className="px-4 py-3">🇻🇳 Việt Nam</th>
                      <th className="px-4 py-3 rounded-tr-lg">🇨🇺 Cuba</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-200">
                    <tr className="border-b border-slate-700">
                      <td className="px-4 py-3 font-medium">Mô hình</td>
                      <td className="px-4 py-3">Thị trường + định hướng XHCN</td>
                      <td className="px-4 py-3">Kế hoạch hóa tập trung</td>
                    </tr>
                    <tr className="border-b border-slate-700">
                      <td className="px-4 py-3 font-medium">Vận dụng Mác–Lênin</td>
                      <td className="px-4 py-3">Linh hoạt, theo thời kỳ quá độ</td>
                      <td className="px-4 py-3">Gần mô hình cổ điển</td>
                    </tr>
                    <tr className="border-b border-slate-700">
                      <td className="px-4 py-3 font-medium">Trọng tâm</td>
                      <td className="px-4 py-3">Phát triển + công bằng</td>
                      <td className="px-4 py-3">Phúc lợi xã hội</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium">Thành tựu</td>
                      <td className="px-4 py-3">Tăng trưởng, giảm nghèo</td>
                      <td className="px-4 py-3">Giáo dục & y tế miễn phí</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Main case study */}
            <section id="lien-he-viet-nam" className="space-y-3">
              <h2 className="text-xl font-semibold text-green-300">
                🇻🇳 Liên hệ thực tiễn: Giảm nghèo bền vững tại Việt Nam (theo 6 đặc trưng CNXH)
              </h2>
              <p className="text-sm md:text-base text-slate-200 leading-relaxed">
                Chương trình giảm nghèo bền vững của Việt Nam là minh chứng sinh động cho việc vận dụng 6 đặc trưng cơ bản của chủ nghĩa xã hội vào thực tiễn.
              </p>

              {/* Feature 1 */}
              <div className="rounded-xl border border-green-700/50 bg-slate-800/40 p-5 space-y-3">
                <h3 className="text-base font-semibold text-green-300 flex items-center gap-2">
                  <span>1️⃣</span>
                  <span>Giải phóng con người</span>
                </h3>
                <ul className="list-disc pl-6 text-sm text-slate-200 space-y-1">
                  <li>Tỷ lệ nghèo giảm từ <span className="font-semibold text-green-300">9.88%</span> (2015) xuống <span className="font-semibold text-green-300">2.93%</span> (2023)</li>
                  <li><span className="font-semibold">1,2 triệu</span> học sinh nghèo được miễn giảm học phí (2023)</li>
                </ul>
              </div>

              {/* Feature 2 */}
              <div className="rounded-xl border border-blue-700/50 bg-slate-800/40 p-5 space-y-3">
                <h3 className="text-base font-semibold text-blue-300 flex items-center gap-2">
                  <span>2️⃣</span>
                  <span>Kinh tế phát triển dựa trên lực lượng sản xuất hiện đại</span>
                </h3>
                <ul className="list-disc pl-6 text-sm text-slate-200 space-y-1">
                  <li>Viettel phủ sóng 4G đến <span className="font-semibold text-blue-300">97%</span> dân số</li>
                  <li>EVN: <span className="font-semibold text-blue-300">99%</span> hộ dân có điện</li>
                  <li>Sơn La: nông nghiệp số giúp thu nhập tăng <span className="font-semibold text-blue-300">30–50%</span></li>
                </ul>
              </div>

              {/* Feature 3 */}
              <div className="rounded-xl border border-purple-700/50 bg-slate-800/40 p-5 space-y-3">
                <h3 className="text-base font-semibold text-purple-300 flex items-center gap-2">
                  <span>3️⃣</span>
                  <span>Xã hội do nhân dân làm chủ</span>
                </h3>
                <ul className="list-disc pl-6 text-sm text-slate-200 space-y-1">
                  <li>Chương trình Nông thôn mới: <span className="font-semibold">dân biết – dân bàn – dân làm – dân kiểm tra</span></li>
                  <li>Đồng Tháp: dân tự chọn nhà thầu → tiết kiệm <span className="font-semibold text-purple-300">2,1 tỷ</span> đồng</li>
                </ul>
              </div>

              {/* Feature 4 */}
              <div className="rounded-xl border border-orange-700/50 bg-slate-800/40 p-5 space-y-3">
                <h3 className="text-base font-semibold text-orange-300 flex items-center gap-2">
                  <span>4️⃣</span>
                  <span>Nhà nước kiểu mới – liêm chính, vì dân</span>
                </h3>
                <ul className="list-disc pl-6 text-sm text-slate-200 space-y-1">
                  <li>2016–2024: xử lý hơn <span className="font-semibold text-orange-300">180 cán bộ cấp cao</span></li>
                  <li>Thu hồi gần <span className="font-semibold text-orange-300">40.000 tỷ đồng</span> tài sản tham nhũng</li>
                </ul>
              </div>

              {/* Feature 5 */}
              <div className="rounded-xl border border-pink-700/50 bg-slate-800/40 p-5 space-y-3">
                <h3 className="text-base font-semibold text-pink-300 flex items-center gap-2">
                  <span>5️⃣</span>
                  <span>Văn hóa tiên tiến – nhân văn – bản sắc</span>
                </h3>
                <ul className="list-disc pl-6 text-sm text-slate-200 space-y-1">
                  <li>Sa Pa (2023): doanh thu <span className="font-semibold text-pink-300">7.300 tỷ</span> đồng từ du lịch cộng đồng</li>
                  <li>Người H'Mông tăng thu nhập từ <span className="font-semibold">5–7 triệu</span> → <span className="font-semibold text-pink-300">15–20 triệu</span> đồng/tháng</li>
                </ul>
              </div>

              {/* Feature 6 */}
              <div className="rounded-xl border border-cyan-700/50 bg-slate-800/40 p-5 space-y-3">
                <h3 className="text-base font-semibold text-cyan-300 flex items-center gap-2">
                  <span>6️⃣</span>
                  <span>Bình đẳng dân tộc – đoàn kết – hợp tác quốc tế</span>
                </h3>
                <p className="text-sm text-slate-200">
                  Chương trình phát triển vùng dân tộc thiểu số (2021–2030):
                </p>
                <ul className="list-disc pl-6 text-sm text-slate-200 space-y-1">
                  <li>Vốn đầu tư: <span className="font-semibold text-cyan-300">137.664 tỷ đồng</span></li>
                  <li>Xây dựng: <span className="font-semibold">2.200 trường học</span>, <span className="font-semibold">1.500 trạm y tế</span></li>
                  <li>Hỗ trợ đất ở, nước sạch, sinh kế cho <span className="font-semibold">hàng trăm nghìn hộ</span></li>
                </ul>
              </div>
            </section>

            {/* Conclusion */}
            <section id="ket-luan" className="space-y-3">
              <div className="rounded-2xl border border-yellow-700/50 bg-gradient-to-br from-yellow-900/20 to-orange-900/20 p-6 space-y-3">
                <h2 className="text-xl font-semibold text-yellow-300 flex items-center gap-2">
                  <span>⭐</span>
                  <span>Kết luận</span>
                </h2>
                <p className="text-sm md:text-base text-slate-200 leading-relaxed">
                  <span className="font-semibold">6 đặc trưng của chủ nghĩa xã hội không phải lý thuyết xa vời.</span> Trong thực tiễn giảm nghèo Việt Nam:
                </p>
                <ul className="list-disc pl-6 text-sm text-slate-200 space-y-1">
                  <li>Con người được giải phóng khỏi đói nghèo và lạc hậu</li>
                  <li>Kinh tế hiện đại được mở rộng đến vùng sâu, vùng xa</li>
                  <li>Nhân dân tham gia quản lý, quyết định các dự án phát triển</li>
                  <li>Nhà nước liêm chính, chống tham nhũng quyết liệt</li>
                  <li>Văn hóa tạo động lực phát triển và tăng thu nhập</li>
                  <li>Bình đẳng dân tộc được bảo đảm thực chất</li>
                </ul>
                <p className="text-sm md:text-base text-yellow-200 leading-relaxed font-semibold mt-3">
                  ➡️ Hàng triệu người thoát nghèo, chất lượng sống tăng rõ rệt, khẳng định tính đúng đắn của con đường xã hội chủ nghĩa mà Việt Nam đã lựa chọn.
                </p>
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
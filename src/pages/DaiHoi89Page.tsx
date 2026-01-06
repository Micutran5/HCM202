import React from "react";
import macLeninImg from "../assets/mac-lenin-anh-minh-hoa.jpg";
import hinhThangBacImg from "../assets/hinh_thang_bac_rong_net_hon.png";
import hinhThaiKinhTeImg from "../assets/hinh_thai_kinh_te.png";
import leninImg from "../assets/lenin.png";
import leninJfifImg from "../assets/lenin.jfif";

const ChuNghiaXaHoiPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-50">
      <div className="max-w-6xl mx-auto px-4 py-8 lg:py-12">
        {/* Top heading */}
        <div className="mb-8">
          <div className="text-xs uppercase tracking-widest text-slate-400">
            HỌC THUYẾT MÁC – LÊNIN · Chương 3
          </div>

          <h1 className="mt-2 text-2xl md:text-3xl font-bold leading-snug text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-300 to-orange-500">
            Chủ nghĩa xã hội và thời kỳ quá độ lên chủ nghĩa xã hội
          </h1>

          <p className="mt-2 text-sm text-slate-300">
            Phần I · Chủ nghĩa xã hội – giai đoạn đầu của hình thái kinh tế – xã hội cộng sản
            chủ nghĩa.
          </p>
        </div>

        {/* Main layout */}
        <div className="space-y-24 mt-16">
          
          {/* Section 01 */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-4">
              <div className="text-7xl md:text-8xl font-bold text-slate-800/30">01</div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-50">
                Theo
              C.Mác & Ph.Ăngghen
              </h2>
              <p className="text-slate-300 leading-relaxed">
                Vận dụng quan điểm duy vật về lịch sử để nghiên cứu xã hội loài người, C.Mác và Ph.Ăngghen xây dựng nên học thuyết hình thái kinh tế - xã hội.
                              </p>
              <blockquote className="border-l-4 border-orange-500 bg-slate-800/40 pl-4 py-3 italic text-orange-200/80">
                "Theo các ông C. Mác và Ph. Ăngghen, sự chuyển biến từ hình thái kinh tế xã hội thấp lên hình thái kinh tế – xã hội cao là một quá trình lịch sử – tự nhiên."
              </blockquote>
              <p className="text-sm text-slate-400">
Sự thay thế hình thái kinh tế – xã hội tư bản chủ nghĩa bằng hình thái kinh tế – xã hội cộng sản chủ nghĩa.              </p>
            </div>
            <div className="relative order-1 lg:order-2">
              <img 
                src={macLeninImg}
                alt="Mô hình: Dòng chảy lịch sử" 
                className="rounded-3xl shadow-2xl w-full h-auto"
              />
          
            </div>
          </section>

          {/* Section 02 */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="relative order-2 lg:order-1">
              <img 
                src={hinhThangBacImg}
                alt="Sơ đồ: Các lớp thang lịch sử" 
                className="rounded-3xl shadow-2xl w-full h-auto"
              />
         
            </div>
            <div className="space-y-4 order-1 lg:order-2">
              <div className="text-7xl md:text-8xl font-bold text-slate-800/30">02</div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-50">
                Các hình thái kinh tế - xã hội
              </h2>
              <p className="text-slate-300 leading-relaxed">
                Lịch sử nhân loại là sự thay thế kế tiếp nhau của các hình thái kinh tế - xã hội, từ thấp đến cao.
              </p>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-slate-800/40 border border-slate-700 rounded-xl px-4 py-3">
                  <div className="text-sm font-semibold text-slate-300">Nguyên thủy</div>
                </div>
                <div className="bg-slate-800/40 border border-slate-700 rounded-xl px-4 py-3">
                  <div className="text-sm font-semibold text-slate-300">Chiếm hữu nô lệ</div>
                </div>
                <div className="bg-slate-800/40 border border-slate-700 rounded-xl px-4 py-3">
                  <div className="text-sm font-semibold text-slate-300">Phong kiến</div>
                </div>
                <div className="bg-slate-800/40 border border-slate-700 rounded-xl px-4 py-3">
                  <div className="text-sm font-semibold text-slate-300">Tư bản CN</div>
                </div>
              </div>
              <button className="w-full bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-xl font-semibold transition">
                Công sản chủ nghĩa
              </button>
              <p className="text-sm text-slate-400">
                Hiện nay chúng ta đang hướng tới nấc thang cao nhất: Công sản chủ nghĩa.
              </p>
            </div>
          </section>

          {/* Section 03 */}
          <section className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
            <div className="space-y-4 lg:col-span-2">
              <div className="text-7xl md:text-8xl font-bold text-slate-800/30">03</div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-50">
                Cấu trúc xã hội mới
              </h2>
              <p className="text-slate-300 leading-relaxed">
                Hình thái kinh tế - xã hội Cộng sản chủ nghĩa không xuất hiện ngay lập tức mà trải qua 2 giai đoạn:
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold flex-shrink-0 text-sm">1</div>
                  <div>
                    <div className="font-semibold text-orange-400">Giai đoạn thấp (Chủ nghĩa xã hội)</div>
                    <p className="text-sm text-slate-400">Thời kỳ quá độ, xây dựng cơ sở vật chất, văn hóa cần thiết về cơ bản.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-pink-600 text-white flex items-center justify-center font-bold flex-shrink-0 text-sm">2</div>
                  <div>
                    <div className="font-semibold text-pink-400">Giai đoạn cao (Chủ nghĩa cộng sản)</div>
                    <p className="text-sm text-slate-400">Phát triển toàn diện, làm theo năng lực – hưởng theo nhu cầu.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative order-1 lg:order-2 lg:col-span-3">
              <img 
                src={hinhThaiKinhTeImg}
                alt="Hình thái kinh tế - xã hội cộng sản chủ nghĩa" 
                className="rounded-3xl shadow-2xl w-full h-auto"
              />
            </div>
          </section>

          {/* Section 04 */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <div className="text-7xl md:text-8xl font-bold text-slate-800/30">04</div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-50">
Theo V.I Lênin
              </h2>
              <p className="text-slate-300 leading-relaxed">
     V.I.Lênin, từ thực tiễn nước Nga, đối với những nước chưa có chủ nghĩa tư bản phát triển cao “cần phải có một thời kì quá độ khá lâu dài từ chủ nghĩa tư bản lên chủ nghĩa xã hội”.              </p>
            </div>
            <div className="relative order-1 lg:order-2">
              <img 
                src={leninImg}
                alt="Hình thái kinh tế - xã hội cộng sản chủ nghĩa" 
                className="rounded-3xl shadow-2xl w-full h-auto"
              />
            </div>
          </section>

          {/* Section 05 */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-4">
              <div className="text-7xl md:text-8xl font-bold text-slate-800/30">05</div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-50">
Theo V.I Lênin, từ thực tiễn nước Nga               </h2>
              <p className="text-slate-300 leading-relaxed">
Thời kỳ quá độ từ chủ nghĩa tư bản lên chủ nghĩa cộng sản được hiểu theo hai nghĩa:             </p>
              <div className="space-y-3">
                <div className="bg-slate-800/40 border border-slate-700 rounded-xl px-4 py-3">
                  <div className="font-semibold text-slate-200 mb-1">Thứ nhất</div>
                  <p className="text-sm text-slate-400">
Đốì với các nước chưa trải qua chủ nghĩa tư bản phát triển, cần thiết phải có thời kỳ quá độ khá lâu dài từ chủ nghĩa tư bản lên chủ nghĩa xã hội "những cơn đau đẻ kéo dài"                  </p>
                </div>
                <div className="bg-slate-800/40 border border-slate-700 rounded-xl px-4 py-3">
                  <div className="font-semibold text-slate-200 mb-1">Thứ hai</div>
                  <p className="text-sm text-slate-400">
                    Đối với những nước đã trải qua chủ nghĩa tư bản phát triển, giữa chủ nghĩa tư bản và chu nghĩa cộng sản có một thời kỳ quá độ nhất định, thời kỳ cái biên cách mạng từ xã hội này sang xã hội kia, thời kỳ quá độ từ chủ nghĩa tư bản lên chủ nghĩa cộng sản.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative order-1 lg:order-2">
              <img 
                src={leninJfifImg}
                alt="Thực tiễn: Việt Nam đổi mới" 
                className="rounded-3xl shadow-2xl w-full h-auto"
              />
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};

export default ChuNghiaXaHoiPage;

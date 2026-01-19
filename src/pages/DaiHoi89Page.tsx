import React from "react";
import macLeninImg from "../assets/mac-lenin-anh-minh-hoa.jpg";
import hcm1Img from "../assets/hcm1.jpg";
import hcm2Img from "../assets/hcm2.jpg";
import hcm4Img from "../assets/hcm4.jpg";

const ChuNghiaXaHoiPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-50">
      <div className="max-w-6xl mx-auto px-4 py-8 lg:py-12">
        {/* Top heading */}
        <div className="mb-8">
          <div className="text-xs uppercase tracking-widest text-slate-400">
            TƯ TƯỞNG HỒ CHÍ MINH - CHƯƠNG V
          </div>

          <h1 className="mt-2 text-2xl md:text-3xl font-bold leading-snug text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-300 to-orange-500">
          ĐIỀU KIỆN ĐỂ XÂY DỰNG ĐẠI ĐOÀN KẾT DÂN TỘC
          </h1>

        </div>

        {/* Main layout */}
        <div className="space-y-24 mt-16">
          
          {/* Section 01 */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-4">
              <div className="text-7xl md:text-8xl font-bold text-slate-800/30">01</div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-50">
              LẤY LỢI ÍCH CHUNG CỦA DÂN TỘC LÀM ĐIỂM QUY TỤ
              </h2>
              <p className="text-slate-300 leading-relaxed">
              Hồ Chí Minh khẳng định:               </p>
              <blockquote className="border-l-4 border-orange-500 bg-slate-800/40 pl-4 py-3 italic text-orange-200/80">
                "Đoàn kết chỉ bền vững khi đặt lợi ích tối cao của Tổ quốc và nhân dân lên trên hết."
              </blockquote>
              <p className="text-sm text-slate-400">
              Đại đoàn kết không đồng nghĩa với việc xóa bỏ sự khác biệt, mà tôn trọng những lợi ích khác biệt chính đáng, đồng thời kiên quyết chống lại lợi ích cục bộ, cá nhân làm phương hại đến lợi ích chung.
              Lợi ích chung của dân tộc chính là "mẫu số chung" bảo đảm cho sự đoàn kết bền vững và lâu dài.            </p>

              
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
                src={hcm1Img}
                alt="Sơ đồ: Các lớp thang lịch sử" 
                className="rounded-3xl shadow-2xl w-full h-auto"
              />
         
            </div>
            <div className="space-y-4 order-1 lg:order-2">
              <div className="text-7xl md:text-8xl font-bold text-slate-800/30">02</div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-50">
              Kế thừa phát huy truyền thống yêu nước - đoàn kết dân tộc
              </h2>
              <p className="text-slate-300 leading-relaxed">
              Theo Hồ Chí Minh, đại đoàn kết toàn dân tộc không phải là sản phẩm nhất thời của cách mạng, mà là giá trị truyền thống được hình thành, bồi đắp và phát triển trong suốt lịch sử dựng nước và giữ nước của dân tộc Việt Nam.
              </p>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-slate-800/40 border border-slate-700 rounded-xl px-4 py-3">
                  <div className="text-sm font-semibold text-slate-300">Nguồn gốc</div>
                </div>
                <div className="bg-slate-800/40 border border-slate-700 rounded-xl px-4 py-3">
                  <div className="text-sm font-semibold text-slate-300">Lợi ích dân tộc</div>
                </div>
                <div className="bg-slate-800/40 border border-slate-700 rounded-xl px-4 py-3">
                  <div className="text-sm font-semibold text-slate-300">Nền tảng tinh thần</div>
                </div>
                <div className="bg-slate-800/40 border border-slate-700 rounded-xl px-4 py-3">
                  <div className="text-sm font-semibold text-slate-300">Giá trị truyền thống</div>
                </div>
              </div>
              <button className="w-full bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-xl font-semibold transition">
                Đoàn kết toàn dân tộc
              </button>
            </div>
          </section>


          {/* Section 03 */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <div className="text-7xl md:text-8xl font-bold text-slate-800/30">03</div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-50">
Tin dân, yêu dân, dựa vào dân
              </h2>
              <p className="text-slate-300 leading-relaxed">
              Muốn thực hiện đại đoàn kết phải thực sự tin dân, hiểu dân, tôn trọng dân và vì hạnh phúc của nhân dân.Dựa trên niềm tin chân thành vào sức mạnh, trí tuệ và lòng yêu nước của nhân dân.      </p>
            </div>
            <div className="relative order-1 lg:order-2">
              <img 
                src={hcm2Img}
                alt="Hình thái kinh tế - xã hội cộng sản chủ nghĩa" 
                className="rounded-3xl shadow-2xl w-full h-auto"
              />
            </div>
          </section>

          {/* Section 04 */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="relative order-2 lg:order-1">
              <img 
                src={hcm4Img}
                alt="Kết luận về đại đoàn kết dân tộc" 
                className="rounded-3xl shadow-2xl w-full h-auto"
              />
            </div>
            <div className="space-y-4 order-1 lg:order-2">
              <div className="text-7xl md:text-8xl font-bold text-slate-800/30">04</div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-50">
Kết luận        </h2>
              <p className="text-slate-300 leading-relaxed">
Đạt được đại đoàn kết toàn dân tộc cần những bước đầu như sau:             </p>
              <div className="space-y-3">
                <div className="bg-slate-800/40 border border-slate-700 rounded-xl px-4 py-3">
                  <div className="font-semibold text-slate-200 mb-1">Thứ nhất</div>
                  <p className="text-sm text-slate-400">
                  Lấy cái chung để hạn chế cái riêng, đặt điểm tương đồng làm
                    cơ sở để quy tụ lực lượng; tôn trọng những khác biệt chính
                    đáng, miễn là không trái với lợi ích của dân tộc và mục
                    tiêu độc lập dân tộc gắn liền với chủ nghĩa xã hội.
                  </p>
                </div>
                <div className="bg-slate-800/40 border border-slate-700 rounded-xl px-4 py-3">
                  <div className="font-semibold text-slate-200 mb-1">Thứ hai</div>
                  <p className="text-sm text-slate-400">
                  Thực hiện đoàn kết trên cơ sở chân thành, khoan dung và tôn trọng sự khác biệt, gác lại những mâu thuẫn riêng để hướng tới mục tiêu chung là độc lập dân tộc, thống nhất đất nước và hạnh phúc của nhân dân.                  </p>
                </div>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};

export default ChuNghiaXaHoiPage;

import React from "react";
import noiDungHeaderImg from "../assets/noidung.jpg";
import khoiDaiDoanKetImg from "../assets/khoidaidoanket.jpg";
import matTranImg from "../assets/mattran.jpg";

const noiDungCards = [
  {
    title: "Chủ thể",
    desc: "Bao gồm mọi người dân Việt Nam (“con Rồng cháu Tiên”), không phân biệt dân tộc, tôn giáo, tuổi tác, giới tính, giàu nghèo, địa vị.",
  },
  {
    title: "Nền tảng của khối đại đoàn kết",
    desc: "Liên minh Công nhân – Nông dân – Trí thức.",
  },
  {
    title: "Lý do",
    desc: "Công nhân – nông dân đông đảo, bị áp bức nặng nề, có tinh thần cách mạng bền bỉ; trí thức giữ vai trò quan trọng trong xây dựng CNXH.",
  },
  {
    title: "Nguyên tắc cốt lõi",
    desc: "Vững lập trường giai cấp công nhân, xử lý hài hòa quan hệ giai cấp – dân tộc.",
  },
];

const matTranCards = [
  {
    title: "Bản chất",
    desc: "Tổ chức chính trị – xã hội rộng lớn, quy tụ mọi tổ chức và cá nhân yêu nước.",
  },
  {
    title: "Sự phát triển qua các thời kỳ lịch sử",
    desc: "Tên gọi thay đổi theo giai đoạn, nhưng bản chất không đổi:",
    items: [
      "Hội Phản đế đồng minh (1930)",
      "Mặt trận Dân chủ Đông Dương (1936)",
      "Mặt trận Việt Minh (1941)",
      "Mặt trận Liên Việt (1951)",
      "Mặt trận Dân tộc Giải phóng Miền Nam (1960)",
      "Mặt trận Tổ quốc Việt Nam (1955; 1976 đến nay)",
    ],
  },
];

const nguyenTacCards = [
  {
    title: "Hiệp thương dân chủ",
    desc: "Bàn bạc công khai để thống nhất, tránh áp đặt; đặt lợi ích chung lên trên hết.",
  },
  {
    title: "Đoàn kết chặt chẽ, lâu dài",
    desc: "Chân thành, thân ái, giúp nhau cùng tiến bộ.",
  },
  {
    title: "Đoàn kết gắn liền với đấu tranh",
    desc: "Có phê bình – tự phê bình; đấu tranh để củng cố đoàn kết.",
  },
  {
    title: "Cầu đồng tồn dị",
    desc: "Lấy cái chung làm chính, tôn trọng khác biệt để quy tụ lực lượng.",
  },
];

const GiaiDoan1Page: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-50">
      {/* Header Section */}
      <header className="px-4 py-6 lg:py-10">
        <div className="max-w-6xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-800/60 shadow-xl">
            <img
              src={noiDungHeaderImg}
              alt="Điều kiện ra đời chủ nghĩa xã hội"
              className="absolute inset-0 h-full w-full object-cover"
              style={{ objectPosition: "50% 35%" }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/70 to-slate-900/35" />

            <div className="relative p-6 md:p-10 lg:p-12 space-y-3 max-w-3xl">
              <div className="text-[11px] md:text-xs uppercase tracking-[0.25em] text-slate-300">
                TƯ TƯỞNG HỒ CHÍ MINH - CHƯƠNG V
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight drop-shadow text-orange-300">
                NỘI DUNG & HÌNH THỨC TỔ CHỨC CỦA KHỐI ĐẠI ĐOÀN KẾT DÂN TỘC
              </h1>

              <p className="text-sm md:text-base text-slate-200 max-w-2xl">
                Đại đoàn kết dân tộc là vấn đề sống còn của cách mạng Việt Nam
              </p>
            </div>
          </div>
        </div>
      </header>

      <main className="px-4 py-8 lg:py-12">
        <div className="max-w-6xl mx-auto space-y-10">

          {/* Cụm ảnh minh họa (đồng bộ tỉ lệ) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
            <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-800/60 shadow-lg flex flex-col aspect-[16/9]">
              <img
                src={khoiDaiDoanKetImg}
                alt="Khối đại đoàn kết dân tộc"
                className="absolute inset-0 h-full w-full object-contain"
                style={{ objectPosition: "50% 50%" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/30 to-transparent" />
              <div className="relative px-4 py-3 text-xs text-slate-200 border-t border-slate-700/60 backdrop-blur-[2px] bg-slate-900/30 mt-auto">
                Minh họa khối đại đoàn kết dân tộc.
              </div>
            </div>

            <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-800/60 shadow-lg flex flex-col aspect-[16/9]">
              <img
                src={matTranImg}
                alt="Mặt trận Dân tộc Thống nhất"
                className="absolute inset-0 h-full w-full object-contain"
                style={{ objectPosition: "50% 50%" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/30 to-transparent" />
              <div className="relative px-4 py-3 text-xs text-slate-200 border-t border-slate-700/60 backdrop-blur-[2px] bg-slate-900/30 mt-auto">
                Minh họa Mặt trận Dân tộc Thống nhất.
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <p className="text-sm md:text-base text-slate-200 leading-relaxed">
              Đại đoàn kết dân tộc là vấn đề sống còn của cách mạng Việt Nam.
              Khối đại đoàn kết cần được tổ chức chặt chẽ thông qua Mặt trận
              Dân tộc Thống nhất.
            </p>
          </div>

          {/* Section 1: Nội dung và lực lượng */}
          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-orange-300">1. Nội dung và lực lượng: Đại đoàn kết là vấn đề sống còn</h2>

            <div className="grid md:grid-cols-2 gap-4 mt-4 items-stretch">
              {noiDungCards.map((item, idx) => (
                <div key={item.title} className="rounded-2xl border border-slate-800 bg-slate-800/60 p-5 flex flex-col h-full">
                  <p className="text-xs font-semibold text-orange-300 mb-2">
                    {idx === 0 ? "Chủ thể" : idx === 1 ? "Nền tảng" : idx === 2 ? "Lý do" : "Nguyên tắc"}
                  </p>
                  <h3 className="text-lg font-bold text-slate-100 mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 2: Hình thức tổ chức */}
          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-orange-300">2. Hình thức tổ chức: Mặt trận Dân tộc Thống nhất</h2>
            <p className="text-sm text-slate-200 leading-relaxed">
              Khối đại đoàn kết được tập hợp trong một tổ chức vững chắc: Mặt trận Dân tộc Thống nhất.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mt-3 items-stretch">
              {matTranCards.map((item) => (
                <div key={item.title} className="rounded-2xl border border-slate-800 bg-slate-800/60 p-5 flex flex-col h-full">
                  <h3 className="text-lg font-bold text-slate-100 mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-300 leading-relaxed">{item.desc}</p>
                  {"items" in item && Array.isArray(item.items) ? (
                    <ul className="mt-3 space-y-1 text-sm text-slate-300 list-disc list-inside">
                      {item.items.map((it) => (
                        <li key={it}>{it}</li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              ))}
            </div>
          </section>

          {/* Section 3: Nguyên tắc xây dựng và hoạt động */}
          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-orange-300">3. Nguyên tắc xây dựng và hoạt động của Mặt trận</h2>
            <p className="text-sm text-slate-200 leading-relaxed">
              Hồ Chí Minh nêu các nguyên tắc hoạt động chặt chẽ để khối đại đoàn kết vận hành hiệu quả:
            </p>
            <div className="grid md:grid-cols-2 gap-4 mt-3 items-stretch">
              {nguyenTacCards.map((item) => (
                <div key={item.title} className="rounded-2xl border border-slate-800 bg-slate-800/60 p-5 flex flex-col h-full">
                  <h3 className="text-lg font-bold text-slate-100 mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-300 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

        </div>
      </main>
    </div>
  );
};

export default GiaiDoan1Page;

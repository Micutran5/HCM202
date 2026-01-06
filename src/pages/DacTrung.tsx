import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, X } from "lucide-react";

const DacTrung = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const expandedRef = useRef(null);
  const modalContentRef = useRef(null);

  const features = [
    {
      title: "Giải phóng con người – giai cấp – xã hội",
      description:
        "Đặc trưng thể hiện bản chất nhân văn, nhân đạo và sự khác biệt về chất của chủ nghĩa xã hội so với các chế độ trước đó.",
      icon: "🕊️",
      color: "from-orange-400/20 via-fuchsia-500/10 to-sky-400/20",
      image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&h=600&fit=crop",
      sections: [
        {
          subtitle: "Mục tiêu tổng quát",
          content:
            "Chủ nghĩa xã hội hướng tới giải phóng giai cấp, giải phóng dân tộc, giải phóng xã hội và giải phóng con người, tạo điều kiện để con người phát triển toàn diện.",
        },
        {
          subtitle: "Sự phát triển tự do",
          content:
            'Theo C. Mác và Ph. Ăngghen trong Tuyên ngôn của Đảng Cộng sản, xã hội tương lai sẽ là một khối liên hiệp, trong đó "sự phát triển tự do của mỗi người là điều kiện của sự phát triển tự do của tất cả mọi người". Khi đó, con người sẽ làm chủ tồn tại xã hội của mình, làm chủ tự nhiên và làm chủ bản thân, trở thành người tự do.',
        },
        {
          subtitle: "Xóa bỏ áp bức bóc lột",
          content:
            "Để đạt được mục tiêu giải phóng, cách mạng xã hội chủ nghĩa phải xóa bỏ tình trạng giai cấp này bóc lột, áp bức giai cấp kia. Khi tình trạng người áp bức người bị xóa bỏ thì tình trạng dân tộc này bóc lột dân tộc khác cũng bị xóa bỏ.",
        },
        {
          subtitle: "Mục đích cao nhất",
          content:
            'V.I. Lênin nhấn mạnh mục đích cuối cùng là thực hiện nguyên tắc "làm theo năng lực, hưởng theo nhu cầu". Xã hội sẽ xóa bỏ sự phân chia thành giai cấp, biến tất cả thành viên thành người lao động, tiêu diệt cơ sở của tình trạng người bóc lột người.',
        },
      ],
    },
    {
      title: "Nền kinh tế phát triển cao",
      description:
        "Đặc trưng về phương diện kinh tế, là cơ sở vật chất để thực hiện mục tiêu giải phóng con người.",
      icon: "📊",
      color: "from-sky-400/20 via-orange-400/10 to-fuchsia-500/20",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
      sections: [
        {
          subtitle: "Đặc điểm nền kinh tế",
          content:
            "Chủ nghĩa xã hội có nền kinh tế phát triển cao, dựa trên lực lượng sản xuất hiện đại và chế độ công hữu về các tư liệu sản xuất chủ yếu.",
        },
        {
          subtitle: "Tổ chức và phân phối",
          content:
            "Nền kinh tế này được tổ chức quản lý có hiệu quả, năng suất lao động cao và thực hiện phân phối chủ yếu theo lao động. V.I. Lênin khẳng định tiến lên chủ nghĩa xã hội nghĩa là tiến lên chế độ công hữu về tư liệu sản xuất và phân phối sản phẩm theo lao động.",
        },
        {
          subtitle: "Quá trình thực hiện dần dần",
          content:
            "Ph. Ăngghen chỉ ra rằng không thể thủ tiêu chế độ tư hữu ngay lập tức. Cần phải cải tạo xã hội dần dần và chỉ khi tạo ra đủ khối lượng tư liệu sản xuất cần thiết thì mới có thể thủ tiêu chế độ tư hữu.",
        },
        {
          subtitle: "Năng suất lao động",
          content:
            "Để thiết lập chế độ xã hội cao hơn chủ nghĩa tư bản, nhiệm vụ then chốt là phải nâng cao năng suất lao động và tổ chức lao động theo trình độ cao hơn.",
        },
      ],
    },
    {
      title: "Xã hội do nhân dân lao động làm chủ",
      description:
        "Đặc trưng thể hiện thuộc tính bản chất chính trị của chủ nghĩa xã hội.",
      icon: "👥",
      color: "from-fuchsia-500/20 via-sky-400/10 to-orange-400/20",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&h=600&fit=crop",
      sections: [
        {
          subtitle: "Chủ thể quyền lực",
          content:
            "Chủ nghĩa xã hội là chế độ xã hội vì con người và do con người; nhân dân mà nòng cốt là nhân dân lao động là chủ thể của xã hội, thực hiện quyền làm chủ ngày càng rộng rãi.",
        },
        {
          subtitle: "Bản chất nhà nước",
          content:
            "Nhà nước trong chủ nghĩa xã hội là nhà nước kiểu mới (nhà nước chuyên chính vô sản), mang bản chất của giai cấp công nhân, đại biểu cho lợi ích, quyền lực và ý chí của nhân dân lao động.",
        },
        {
          subtitle: "Tính ưu việt của dân chủ",
          content:
            "V.I. Lênin khẳng định chế độ dân chủ vô sản ưu việt hơn gấp triệu lần so với chế độ dân chủ tư sản. Đây là chế độ dân chủ cho tuyệt đại đa số nhân dân (người nghèo), đồng thời trấn áp bọn bóc lột, áp bức.",
        },
        {
          subtitle: "Sự tham gia của người dân",
          content:
            "Nhà nước sẽ lôi cuốn đông đảo nhân dân tham gia vào quản lý nhà nước, quản lý xã hội và đóng vai trò tích cực trong việc tổ chức đời sống xã hội.",
        },
      ],
    },
    {
      title: "Nhà nước kiểu mới mang bản chất giai cấp công nhân",
      description:
        "Nhà nước chuyên chính vô sản, đại biểu cho lợi ích, quyền lực và ý chí của nhân dân lao động.",
      icon: "🏛️",
      color: "from-orange-400/20 via-sky-400/10 to-fuchsia-500/20",
      image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=800&h=600&fit=crop",
      sections: [
        {
          subtitle: "Nhà nước chuyên chính vô sản",
          content:
            "Nhiều sinh viên tưởng 'chuyên chính' là độc tài, nhưng thực chất nghĩa là chính quyền của giai cấp vô sản, dân chủ với đa số – trấn áp thiểu số bóc lột. Nhà nước xã hội chủ nghĩa không giống với nhà nước của các xã hội trước đó.",
        },
        {
          subtitle: "Bản chất giai cấp công nhân",
          content:
            "Không phải chỉ có công nhân mới nắm quyền, mà là nhà nước phục vụ lợi ích của người lao động, dựa trên lý tưởng của giai cấp công nhân. Việc mang bản chất này nghĩa là quyền lực nhà nước thuộc về lực lượng đại diện cho phương thức sản xuất tiên tiến.",
        },
        {
          subtitle: "Quyền lực thuộc về đại đa số",
          content:
            "'Đại đa số' là người lao động, chứ không phải nhóm giàu có. Nhà nước tư sản là công cụ của thiểu số bóc lột, còn nhà nước xã hội chủ nghĩa là công cụ của đại đa số nhân dân – đặc biệt là giai cấp công nhân.",
        },
        {
          subtitle: "Dân chủ vô sản ưu việt hơn triệu lần",
          content:
            'Tư tưởng Mác – Ăngghen và Lênin nhấn mạnh chế độ dân chủ vô sản dân chủ hơn chế độ dân chủ tư sản "gấp triệu lần", bởi nó mở rộng quyền lực chính trị cho người lao động – những người làm ra của cải vật chất cho xã hội. Ý nói mức độ rộng rãi và thực chất của dân chủ, không phải số lượng tuyệt đối.',
        },
      ],
    },
    {
      title: "Nền văn hóa tiên tiến, nhân văn, kế thừa truyền thống",
      description:
        "Giải phóng con người, tạo điều kiện để con người phát triển toàn diện thông qua nền văn hóa tiến bộ.",
      icon: "🎭",
      color: "from-sky-400/20 via-fuchsia-500/10 to-orange-400/20",
      image: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?w=800&h=600&fit=crop",
      sections: [
        {
          subtitle: "Phát triển con người toàn diện",
          content:
            "Nền văn hóa xã hội chủ nghĩa hướng tới phát triển con người một cách toàn diện, giúp con người thoát khỏi sự áp bức, tha hóa của xã hội cũ. Đây là nền văn hóa mang tính tiên tiến và nhân văn, dựa trên những giá trị tiến bộ, tôn trọng phẩm giá con người.",
        },
        {
          subtitle: "Tính kế thừa và phát triển",
          content:
            "Nền văn hóa mới không phủ nhận những giá trị truyền thống tốt đẹp mà biết tiếp thu, chọn lọc và phát triển chúng trong điều kiện mới. Văn hóa xã hội chủ nghĩa phải được xây dựng trên cơ sở tinh hoa văn hóa nhân loại và các giá trị cổ truyền của dân tộc.",
        },
        {
          subtitle: "Hiện đại và giàu bản sắc",
          content:
            "Quan điểm của Mác – Lênin cho thấy văn hóa xã hội chủ nghĩa vừa mang tính hiện đại, vừa giàu bản sắc dân tộc. Nhờ vậy, nền văn hóa này vừa tiên tiến vừa phù hợp với đặc điểm văn hóa của từng dân tộc.",
        },
        {
          subtitle: "Vai trò trung tâm của văn hóa",
          content:
            "Đặc trưng này phản ánh vai trò trung tâm của văn hóa trong việc xây dựng xã hội mới, thúc đẩy sự phát triển của nhân cách và tạo điều kiện để con người phát triển toàn diện về cả vật chất lẫn tinh thần.",
        },
      ],
    },
    {
      title: "Bình đẳng – đoàn kết dân tộc, hợp tác quốc tế",
      description:
        "Giải phóng dân tộc, xây dựng quan hệ bình đẳng và đoàn kết giữa các dân tộc trong nước và quốc tế.",
      icon: "🌍",
      color: "from-fuchsia-500/20 via-orange-400/10 to-sky-400/20",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop",
      sections: [
        {
          subtitle: "Xóa bỏ áp bức dân tộc",
          content:
            "Chủ nghĩa xã hội tạo ra điều kiện để xoá bỏ mọi hình thức áp bức dân tộc – điều vốn bắt nguồn từ áp bức giai cấp. Khi không còn áp bức giai cấp, các dân tộc sẽ được bình đẳng về quyền lợi, địa vị và cơ hội phát triển.",
        },
        {
          subtitle: "Tinh thần đoàn kết dân tộc",
          content:
            "Tinh thần đoàn kết dân tộc thể hiện ở sự hợp tác chặt chẽ giữa các giai cấp và tầng lớp lao động nhằm xây dựng xã hội mới. Đây là sự đoàn kết dựa trên lợi ích chung của nhân dân lao động.",
        },
        {
          subtitle: "Hợp tác quốc tế",
          content:
            'Quan điểm của Lênin về sự đoàn kết giữa giai cấp vô sản và các dân tộc bị áp bức trên toàn thế giới được thể hiện trong khẩu hiệu: "Vô sản tất cả các nước và các dân tộc bị áp bức, đoàn kết lại!"',
        },
        {
          subtitle: "Tính chất quốc tế",
          content:
            "Chủ nghĩa xã hội là một hệ thống xã hội mang tính quốc tế, coi trọng hợp tác, đấu tranh vì hòa bình, độc lập dân tộc và sự tiến bộ chung của nhân loại. Không có dân tộc nào áp bức dân tộc khác.",
        },
      ],
    },
  ];

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  useEffect(() => {
    if (expandedIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [expandedIndex]);

  return (
    <main className="min-h-screen bg-slate-900 pt-24 pb-12">
      <style>{`
        /* Ẩn scrollbar cho toàn bộ trang */
        ::-webkit-scrollbar {
          display: none;
        }
        html {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
      
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="text-xs uppercase tracking-widest text-slate-400 mb-2">
            HỌC THUYẾT MÁC – LÊNIN · Chương 3
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-50 mb-4 drop-shadow-sm">
            Đặc Trưng Của Chủ Nghĩa Xã Hội
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Khám phá 6 đặc trưng cơ bản định nghĩa bản chất của chủ nghĩa xã hội
          </p>
        </motion.div>

        {/* Features Grid - 3 columns */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="cursor-pointer group"
              onClick={() => toggleExpand(index)}
            >
              {/* Card with Image */}
              <div className={`bg-slate-800/60 rounded-2xl border overflow-hidden hover:bg-slate-800/80 transition-all duration-300 h-full ${
                expandedIndex === index ? 'border-orange-400 ring-2 ring-orange-400/50' : 'border-slate-700'
              }`}>
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${feature.color}`}></div>
                  <div className="absolute top-4 right-4 text-5xl drop-shadow-lg">{feature.icon}</div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <h2 className="text-xl md:text-2xl font-bold text-orange-300 mb-3 line-clamp-2">
                    {index + 1}. {feature.title}
                  </h2>
                  <p className="text-slate-300 text-sm md:text-base line-clamp-3 mb-4">
                    {feature.description}
                  </p>
                  
                  {/* Expand Button */}
                  <div className="flex items-center justify-between pt-2 border-t border-slate-700/60">
                    <span className="text-sm font-semibold text-orange-300 group-hover:text-orange-200 transition">
                      {expandedIndex === index ? 'Đang xem' : 'Khám phá'} →
                    </span>
                    <motion.div
                      animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="w-6 h-6 text-slate-400" />
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal Backdrop */}
        <AnimatePresence>
          {expandedIndex !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-slate-900/90 backdrop-blur-sm"
              onClick={() => setExpandedIndex(null)}
            />
          )}
        </AnimatePresence>

        {/* Modal Content */}
        <AnimatePresence>
          {expandedIndex !== null && (
            <motion.div
              ref={expandedRef}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, type: "spring", stiffness: 300, damping: 30 }}
              className="fixed inset-0 z-50 flex items-start justify-center pt-8 px-4 pointer-events-none"
            >
              <div 
                ref={modalContentRef}
                className="bg-slate-800 rounded-2xl border border-slate-700 overflow-hidden w-full max-w-4xl max-h-[calc(100vh-4rem)] flex flex-col pointer-events-auto"
                onClick={(e) => e.stopPropagation()}
                style={{
                  scrollbarWidth: "none",
                  msOverflowStyle: "none",
                }}
              >
                <style>{`
                  [data-modal-content]::-webkit-scrollbar {
                    display: none;
                  }
                `}</style>
                
                {/* Header - Fixed */}
                <div className={`bg-gradient-to-r ${features[expandedIndex].color} p-6 md:p-8 border-b border-slate-700/60 flex-shrink-0`}>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-4 flex-1 min-w-0">
                      <span className="text-5xl drop-shadow-lg flex-shrink-0">{features[expandedIndex].icon}</span>
                      <div className="flex-1 min-w-0">
                        <h2 className="text-2xl md:text-3xl font-bold text-slate-50 mb-2 break-words">
                          {features[expandedIndex].title}
                        </h2>
                        <p className="text-slate-100 text-base">
                          {features[expandedIndex].description}
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => setExpandedIndex(null)}
                      className="text-slate-100 hover:bg-slate-700/40 rounded-full p-2 transition flex-shrink-0 mt-1"
                      aria-label="Đóng"
                    >
                      <X className="w-6 h-6" />
                    </button>
                  </div>
                </div>

                {/* Content - Scrollable */}
                <div 
                  data-modal-content
                  className="overflow-y-auto flex-1 p-6 md:p-8 space-y-6"
                  style={{
                    scrollbarWidth: "none",
                    msOverflowStyle: "none",
                  }}
                >
                  {features[expandedIndex].sections.map((section, sectionIndex) => (
                    <motion.div
                      key={sectionIndex}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.3,
                        delay: sectionIndex * 0.05,
                      }}
                      className="space-y-3 bg-slate-900/40 rounded-xl p-5 border border-slate-700/50"
                    >
                      <h3 className="text-lg md:text-xl font-semibold text-orange-300 flex items-center gap-2">
                        <span className="text-2xl font-bold">{sectionIndex + 1}</span>
                        {section.subtitle}
                      </h3>
                      <p className="text-slate-200 leading-relaxed text-justify">
                        {section.content}
                      </p>
                    </motion.div>
                  ))}
                </div>

                {/* Footer - Fixed */}
                <div className="p-6 border-t border-slate-700/60 bg-slate-900/40 text-center flex-shrink-0">
                  <button
                    onClick={() => setExpandedIndex(null)}
                    className="inline-flex items-center gap-2 px-6 py-2 bg-orange-500/20 hover:bg-orange-500/30 text-orange-300 rounded-full transition font-medium"
                  >
                    <X className="w-4 h-4" />
                    Đóng
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
};

export default DacTrung;
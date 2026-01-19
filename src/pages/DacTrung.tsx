import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, X } from "lucide-react";

const DacTrung = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const expandedRef = useRef(null);
  const modalContentRef = useRef(null);

  const features = [
    {
      title: "Đại đoàn kết là vấn đề có ý nghĩa chiến lược",
      description:
        "Đây không phải là sách lược hay thủ đoạn chính trị nhất thời, mà là vấn đề cơ bản, nhất quán, xuyên suốt tiến trình cách mạng.",
      icon: "🎯",
      color: "from-orange-400/20 via-fuchsia-500/10 to-sky-400/20",
      image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&h=600&fit=crop",
      sections: [
        {
          subtitle: "Vấn đề cơ bản và nhất quán",
          content:
            "Đại đoàn kết không phải là sách lược hay thủ đoạn chính trị nhất thời, mà là vấn đề cơ bản, nhất quán, xuyên suốt tiến trình cách mạng Việt Nam.",
        },
        {
          subtitle: "Vấn đề sống còn",
          content:
            "Chính sách đoàn kết phù hợp là vấn đề sống còn, quyết định thành bại của cách mạng. Không có đại đoàn kết dân tộc thì không thể có thắng lợi.",
        },
        {
          subtitle: "Kim chỉ nam hành động",
          content:
            'Hồ Chí Minh đúc kết chân lý: "Đoàn kết, đoàn kết, đại đoàn kết. Thành công, thành công, đại thành công". Đây là nguyên tắc chỉ đạo xuyên suốt trong mọi hoạt động cách mạng.',
        },
      ],
    },
    {
      title: "Đại đoàn kết là mục tiêu, nhiệm vụ hàng đầu của cách mạng",
      description:
        "Đoàn kết không chỉ là phương tiện mà còn là mục tiêu của Đảng. Cách mạng là sự nghiệp của quần chúng, do quần chúng và vì quần chúng.",
      icon: "🎯",
      color: "from-sky-400/20 via-orange-400/10 to-fuchsia-500/20",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
      sections: [
        {
          subtitle: "Vừa là phương tiện, vừa là mục tiêu",
          content:
            "Đoàn kết không chỉ là phương tiện để đạt được mục tiêu cách mạng mà còn là mục tiêu của Đảng. Đây là đặc điểm quan trọng trong tư tưởng Hồ Chí Minh về đại đoàn kết dân tộc.",
        },
        {
          subtitle: "Sự nghiệp của quần chúng",
          content:
            "Cách mạng là sự nghiệp của quần chúng, do quần chúng và vì quần chúng. Do đó, nhiệm vụ hàng đầu của Đảng là phải thức tỉnh, tập hợp và hướng dẫn quần chúng tạo thành sức mạnh tổng hợp.",
        },
        {
          subtitle: "Quán triệt trong mọi lĩnh vực",
          content:
            "Nhiệm vụ đại đoàn kết được quán triệt trong mọi lĩnh vực, từ đường lối, chủ trương đến hoạt động thực tiễn của Đảng và Nhà nước.",
        },
      ],
    },
    {
      title: "Là động lực chủ yếu và nhân tố quyết định thắng lợi",
      description:
        "Đại đoàn kết dân tộc tạo nên sức mạnh vô địch để chiến thắng mọi thiên tai, địch họa. Trong thời đại mới, phải kết hợp với đoàn kết quốc tế.",
      icon: "💪",
      color: "from-fuchsia-500/20 via-sky-400/10 to-orange-400/20",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&h=600&fit=crop",
      sections: [
        {
          subtitle: "Sức mạnh vô địch",
          content:
            "Đại đoàn kết dân tộc tạo nên sức mạnh vô địch để chiến thắng mọi thiên tai, địch họa. Đây là bài học lịch sử được rút ra từ thực tiễn cách mạng Việt Nam.",
        },
        {
          subtitle: "Kết hợp sức mạnh dân tộc và thời đại",
          content:
            "Trong thời đại mới, đại đoàn kết dân tộc phải kết hợp với đoàn kết quốc tế (kết hợp sức mạnh dân tộc với sức mạnh thời đại) để tạo thành sức mạnh tổng hợp đưa cách mạng đến thắng lợi hoàn toàn.",
        },
        {
          subtitle: "Nhân tố quyết định",
          content:
            "Đại đoàn kết dân tộc là động lực chủ yếu và nhân tố quyết định thắng lợi của cách mạng Việt Nam trong mọi giai đoạn lịch sử.",
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
            TƯ TƯỞNG HỒ CHÍ MINH - CHƯƠNG V
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-50 mb-4 drop-shadow-sm">
            VAI TRÒ – Ý NGHĨA CỦA TƯ TƯỞNG HỒ CHÍ MINH VỀ ĐẠI ĐOÀN KẾT
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Đại đoàn kết dân tộc là vấn đề sống còn, là mục tiêu và động lực chủ yếu của cách mạng Việt Nam
          </p>
        </motion.div>

        {/* Features Grid - 3 columns */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
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
import { motion } from "framer-motion";

const VideoPage = () => {
  const videoId = "U6A7iXO7rIY"; // Extracted from https://www.youtube.com/watch?v=U6A7iXO7rIY

  return (
    <motion.div
      className="min-h-screen bg-slate-900 pt-24 pb-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-orange-300 mb-4 drop-shadow-sm">
            TƯ TƯỞNG HỒ CHÍ MINH VỀ ĐOÀN KẾT
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Video về tư tưởng Hồ Chí Minh về đoàn kết dân tộc - một trong những giá trị cốt lõi của cách mạng Việt Nam
          </p>
        </motion.div>

        {/* Video Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-5xl mx-auto"
        >
          <div className="bg-slate-800/60 rounded-2xl border border-slate-700 overflow-hidden shadow-2xl">
            {/* Video Wrapper */}
            <div className="relative pb-[56.25%] h-0 overflow-hidden">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src={`https://www.youtube.com/embed/${videoId}`}
                title="Tư tưởng Hồ Chí Minh về đoàn kết"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            {/* Video Info */}
            <div className="p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-orange-300 mb-4">
                Tư tưởng Hồ Chí Minh về đoàn kết dân tộc
              </h2>
              <p className="text-slate-200 leading-relaxed text-justify mb-6">
                Đại đoàn kết dân tộc là một trong những tư tưởng quan trọng nhất của Chủ tịch Hồ Chí Minh. 
                Theo Người, đoàn kết không chỉ là phương tiện mà còn là mục tiêu của cách mạng. 
                Tư tưởng này đã trở thành sợi chỉ đỏ xuyên suốt tiến trình cách mạng Việt Nam, 
                là động lực và nhân tố quyết định mọi thắng lợi của dân tộc.
              </p>
              
              <div className="space-y-4">
                <div className="bg-slate-900/40 rounded-xl p-5 border border-slate-700/50">
                  <h3 className="text-lg font-semibold text-orange-300 mb-2 flex items-center gap-2">
                    <span className="text-2xl">🎯</span>
                    Ý nghĩa của đại đoàn kết
                  </h3>
                  <p className="text-slate-200 leading-relaxed text-justify">
                    Đại đoàn kết dân tộc là vấn đề sống còn, quyết định thành bại của cách mạng. 
                    Hồ Chí Minh đã đúc kết: "Đoàn kết, đoàn kết, đại đoàn kết. Thành công, thành công, đại thành công". 
                    Đây không phải là sách lược nhất thời mà là vấn đề cơ bản, nhất quán, xuyên suốt tiến trình cách mạng.
                  </p>
                </div>

                <div className="bg-slate-900/40 rounded-xl p-5 border border-slate-700/50">
                  <h3 className="text-lg font-semibold text-orange-300 mb-2 flex items-center gap-2">
                    <span className="text-2xl">💪</span>
                    Sức mạnh của đoàn kết
                  </h3>
                  <p className="text-slate-200 leading-relaxed text-justify">
                    Đại đoàn kết dân tộc tạo nên sức mạnh vô địch để chiến thắng mọi thiên tai, địch họa. 
                    Trong thời đại mới, đoàn kết dân tộc phải kết hợp với đoàn kết quốc tế, 
                    tạo thành sức mạnh tổng hợp đưa cách mạng đến thắng lợi hoàn toàn.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default VideoPage;

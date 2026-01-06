// src/components/ExampleAccordion.tsx
import React from "react";
import { motion } from "framer-motion";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";

const aiApplications = [
  {
    title: "Sinh bộ Quiz theo đề cương học phần",
    content:
      "AI tạo nhanh 15+ câu trắc nghiệm kèm gợi ý và giải thích, bao phủ các chủ đề: thuyết trình",
  },
  {
    title: "Chatbot hỏi–đáp giáo trình & văn kiện",
    content:
      "Chatbot hỗ trợ tra cứu khái niệm, luận điểm then chốt có thể trả lời dạng văn bản và giọng nói (Text-to-Speech) để tăng tương tác tự học.",
  },
  {
    title: "Tóm tắt & bản đồ khái niệm chương mục",
    content:
      "AI giúp tóm tắt mỗi chương, tạo “mind map/logic map” thể hiện mối liên hệ giữa các luận điểm ",
  },
  

  {
    title: "Hỗ trợ thiết kế sản phẩm",
    content:
      "AI hỗ trợ giảng viên thiết kế các sản phẩm học tập số như hình ảnh, infographics, video ngắn tóm tắt nội dung chính.",
  },
];

const ExampleAccordion: React.FC = () => {
  return (
    <section className="relative z-10 w-full flex flex-col items-center justify-center py-14 px-4 bg-transparent">
      <motion.h2
        className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-300 to-orange-500 mb-2 text-center drop-shadow"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        Ứng dụng AI trong môn Chủ nghĩa xã hội khoa học 
      </motion.h2>
      <motion.p
        className="text-sm md:text-base text-slate-400 mb-7 text-center italic"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        *Nội dung bám sát đề cương và giáo trình môn Chủ nghĩa xã hội khoa học.*
      </motion.p>
      <Accordion.Root
        type="single"
        collapsible
        className="w-full max-w-2xl mx-auto rounded-2xl shadow-2xl bg-slate-900/60 divide-y divide-slate-700"
      >
        {aiApplications.map((item, i) => (
          <Accordion.Item
            key={i}
            value={"item-" + i}
            className="overflow-hidden rounded-2xl mb-3 shadow-lg border border-slate-700"
          >
            <Accordion.Header asChild>
              <Accordion.Trigger asChild>
                <motion.button
                  className="flex w-full items-center justify-between px-7 py-6 text-lg font-semibold text-slate-100 bg-slate-800 group outline-none transition-all duration-200 hover:bg-slate-700 focus:bg-slate-700 rounded-2xl shadow-md"
                  initial={{ backgroundColor: "#1e293b" }}
                  whileHover={{ backgroundColor: "#334155" }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>{item.title}</span>
                  <span className="ml-2 transition-transform group-data-[state=open]:rotate-180">
                    <ChevronDown className="w-6 h-6 text-orange-400" />
                  </span>
                </motion.button>
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content asChild>
              <motion.div
                className="px-7 pb-6 text-base text-slate-300 bg-slate-950/60 rounded-b-2xl border-t border-slate-700"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                {item.content}
              </motion.div>
            </Accordion.Content>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </section>
  );
};

export default ExampleAccordion;

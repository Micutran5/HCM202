// src/components/ExampleAccordion.tsx
import React from "react";
import { motion } from "framer-motion";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";

const aiApplications = [
  {
    title: "ChatGPT",
    content:
      "Được sử dụng để hỗ trợ soạn thảo, tổng hợp và hệ thống hóa nội dung tư tưởng Hồ Chí Minh theo đúng trọng tâm học thuật.",
  },
  {
    title: "Gemini Plus",
    content:
      "Hỗ trợ tạo hình ảnh và ảnh động phục vụ thiết kế website, giúp nội dung trở nên trực quan và sinh động hơn.",
  },
  {
    title: "Cursor",
    content:
      "Được ứng dụng trong quá trình viết, chỉnh sửa và tối ưu mã nguồn khi xây dựng website sản phẩm.",
  },
  {
    title: "Suno AI",
    content:
      "Hỗ trợ sáng tạo video nhạc nhằm truyền tải thông điệp về tinh thần đoàn kết dân tộc theo cách hiện đại và dễ tiếp cận.",
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
        Ứng dụng AI trong dự án 
      </motion.h2>
      <motion.p
        className="text-sm md:text-base text-slate-400 mb-7 text-center italic"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        *Các công cụ AI được sử dụng trong quá trình phát triển website.*
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

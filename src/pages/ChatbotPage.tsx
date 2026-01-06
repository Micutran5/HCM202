import React from "react";
import { motion } from "framer-motion";
import VoiceChatbot from "../components/VoiceChatbot";

const ChatbotPage: React.FC = () => (
  <div className="min-h-screen flex flex-col items-center justify-center bg-slate-900 py-10 px-2">
    <div className="w-full max-w-2xl bg-slate-800/90 rounded-2xl shadow-xl p-6 md:p-10 border border-slate-700">
      <motion.h2
        className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-300 to-orange-500 mb-8 text-center drop-shadow"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Chatbot hỏi đáp Chủ Nghĩa xã hội khoa học
      </motion.h2>
      <VoiceChatbot />
    </div>
  </div>
);

export default ChatbotPage;

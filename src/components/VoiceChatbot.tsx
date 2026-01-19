import { useState, useRef } from "react";
import { GeminiClient } from "../services/GeminiClient";
import { motion, AnimatePresence } from "framer-motion";
import ReactMarkdown from "react-markdown";

// Sử dụng biến môi trường từ file .env
const gemini = new GeminiClient(import.meta.env.VITE_GEMINI_API_KEY);

const VoiceChatbot: React.FC = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<
    { role: "user" | "bot"; text: string }[]
  >([]);
  const [speaking, setSpeaking] = useState(false);
  const [tab, setTab] = useState<"text" | "voice">("text");
  const [loading, setLoading] = useState(false);
  const [modalText, setModalText] = useState<string | null>(null);
  const [copyText, setCopyText] = useState<string>("Copy");

  // Giữ 1 utterance ref để có thể cancel trước khi nói mới
  const utterRef = useRef<SpeechSynthesisUtterance | null>(null);

  const handleTabChange = (newTab: "text" | "voice") => {
    if (loading) return;
    // Dừng nói khi đổi tab
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      window.speechSynthesis.cancel();
      setSpeaking(false);
    }
    setTab(newTab);
    setInput("");
    setMessages([]);
    setLoading(false);
  };

  const speak = (text: string) => {
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      // hủy utter trước đó nếu còn
      window.speechSynthesis.cancel();
      setSpeaking(true);
      const utter = new window.SpeechSynthesisUtterance(text);
      utter.lang = "vi-VN";
      utter.rate = 1;
      utter.onend = () => setSpeaking(false);
      utter.onerror = () => setSpeaking(false);
      utterRef.current = utter;
      window.speechSynthesis.speak(utter);
    }
  };

  const baseGuidelines = `
Bạn là trợ lý học thuật chuyên về môn **Tư tưởng Hồ Chí Minh (HCM202)** theo giáo trình chính thức:
“**Giáo trình Tư tưởng Hồ Chí Minh**” – **NXB Chính trị Quốc gia Sự thật**.

Nhiệm vụ của bạn:
- Trả lời các câu hỏi liên quan đến tư tưởng Hồ Chí Minh một cách **CHÍNH XÁC, NGẮN GỌN, CÓ HỆ THỐNG**.
- Ưu tiên nội dung đúng chương, đúng thuật ngữ học thuật.
- Trình bày mạch lạc, dễ học, phù hợp cho sinh viên đại học (đặc biệt là FPT University).

Phạm vi kiến thức:
- Khái niệm, nội dung, vai trò, ý nghĩa của các tư tưởng Hồ Chí Minh.
- Phân tích theo từng chương (đặc biệt là **Chương V: Tư tưởng Hồ Chí Minh về Đại đoàn kết dân tộc** khi liên quan).
- Liên hệ thực tiễn ở mức học thuật, tránh suy diễn hoặc quan điểm cá nhân cực đoan.

Cách trả lời:
- Mặc định trình bày theo cấu trúc: **Khái niệm → Nội dung → Vai trò/Ý nghĩa → Liên hệ (nếu cần)**.
- Sử dụng gạch đầu dòng, tiêu đề rõ ràng.
- Có thể trích dẫn các câu nói nổi bật của Hồ Chí Minh (đúng tinh thần giáo trình).
- Không lan man, không dùng ngôn ngữ đời thường.

Hạn chế:
- Không bịa thông tin ngoài giáo trình.
- Không đưa quan điểm chính trị cá nhân.
- Không suy đoán sự kiện chưa có kết luận chính thức.

Khi người dùng yêu cầu:
- “Tóm tắt”: trả lời ngắn gọn, dễ học thuộc.
- “Phân tích”: trả lời sâu hơn, có luận điểm rõ ràng.
- “Ôn tập”: tạo câu hỏi trắc nghiệm hoặc tự luận kèm đáp án (không giải thích nếu không yêu cầu).

Luôn giữ văn phong học thuật, trung lập và phù hợp với môn học.
`;

  const textModeInstruction = `
Nếu người học có yêu cầu “Tóm tắt/Phân tích/Ôn tập” thì ưu tiên đúng định dạng đó.
Nếu không có yêu cầu đặc biệt, trình bày theo cấu trúc:
### Khái niệm
- …

### Nội dung
- …

### Vai trò/Ý nghĩa
- …

### Liên hệ (nếu cần)
- …

### Tham chiếu giáo trình
- Chương …, mục … (nếu xác định được)
`;

  const voiceModeInstruction = `
Trả lời **ngắn gọn, mạch lạc, học thuật**; tránh ngôn ngữ đời thường và tránh suy diễn.
Không viết tắt các thuật ngữ quan trọng; nhấn mạnh keyword bằng **in đậm**.
Nếu xác định được, nêu Chương/Mục ở cuối: “(Tham chiếu: Chương …, mục …)”.
`;

  const handleSend = async () => {
    if (!input.trim()) return;
    setMessages((prev) => [...prev, { role: "user", text: input }]);
    setLoading(true);

    try {
      let prompt = baseGuidelines;

      if (tab === "text") {
        prompt += `
${textModeInstruction}

**Câu hỏi của người học**:
${input}
`;
      } else {
        prompt += `
${voiceModeInstruction}
Đối với câu trả lời bằng giọng nói, giới hạn trong khoảng 110 - 160 từ, súc tích nhưng đủ ý theo cấu trúc ưu tiên.
**Câu hỏi của người học**:
${input}
`;
      }

      const response = await gemini.ask(prompt);
      setMessages((prev) => [...prev, { role: "bot", text: response }]);

      if (tab === "voice") {
        speak(response);
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      setMessages((prev) => [
        ...prev,
        { role: "bot", text: "Lỗi khi gọi API: " + err.message },
      ]);
    } finally {
      setLoading(false);
      setInput("");
    }
  };

  return (
    <>
      <motion.div
        className="w-full max-w-2xl min-h-[400px] flex flex-col bg-slate-900/60 rounded-2xl shadow-2xl p-8 border border-slate-700 resize-y overflow-auto transition-all duration-300"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <h2 className="text-2xl font-bold mb-1 text-slate-50 text-center">
          Trợ lý học thuật HCM202 – Tư tưởng Hồ Chí Minh
        </h2>
        <p className="text-center text-slate-400 text-sm mb-4">
          Trả lời theo giáo trình chính thức; ưu tiên đúng chương/mục và thuật ngữ học thuật.
        </p>

        <div className="flex gap-4 mb-6 justify-center">
          <button
            className={`px-6 py-2 rounded-lg border font-semibold text-lg transition-all duration-200 ${
              tab === "text"
                ? "bg-orange-500 text-white shadow border-orange-500"
                : "bg-slate-800 text-slate-300 border-slate-600 hover:bg-slate-700"
            } ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
            onClick={() => handleTabChange("text")}
            disabled={loading}
          >
            Trả lời văn bản
          </button>
          <button
            className={`px-6 py-2 rounded-lg border font-semibold text-lg transition-all duration-200 ${
              tab === "voice"
                ? "bg-orange-500 text-white shadow border-orange-500"
                : "bg-slate-800 text-slate-300 border-slate-600 hover:bg-slate-700"
            } ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
            onClick={() => handleTabChange("voice")}
            disabled={loading}
          >
            Trả lời giọng nói
          </button>
        </div>

        <div className="flex-1 min-h-[180px] max-h-[500px] overflow-y-auto flex flex-col gap-3 mb-6 transition-all duration-300">
          {tab === "text" ? (
            <>
              {messages.length === 0 && (
                <div className="text-slate-400 text-center mt-12 text-base select-none">
                  Hãy hỏi bất kỳ nội dung nào về môn Tư tưởng Hồ Chí Minh (HCM202).
                </div>
              )}
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex items-start gap-3 ${
                    msg.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  {msg.role === "bot" && (
                    <span className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-700">
                      🤖
                    </span>
                  )}
                  <motion.div
                    className={`max-w-[85%] px-5 py-3 rounded-2xl text-base leading-relaxed shadow-sm cursor-pointer ${
                      msg.role === "user"
                        ? "bg-orange-500 text-white self-end rounded-br-none"
                        : "bg-slate-800 text-slate-200 self-start border border-slate-700 rounded-bl-none"
                    }`}
                    initial={{ opacity: 0, x: msg.role === "user" ? 40 : -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                    onClick={() => msg.role === "bot" && setModalText(msg.text)}
                  >
                    {msg.role === "user" ? (
                      msg.text
                    ) : (
                      <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none line-clamp-4">
                        <ReactMarkdown>{msg.text}</ReactMarkdown>
                      </div>
                    )}
                  </motion.div>
                  {msg.role === "user" && (
                    <span className="w-8 h-8 flex items-center justify-center rounded-full bg-orange-500 text-white">
                      👤
                    </span>
                  )}
                </div>
              ))}
            </>
          ) : (
            <div className="flex flex-col items-center justify-center h-full min-h-[180px]">
              {speaking ? (
                <div className="flex flex-col items-center justify-center w-full h-full">
                  <span className="text-6xl mb-2 animate-pulse text-orange-400">
                    🔊
                  </span>
                  <span className="text-lg text-orange-400 font-semibold mb-4">
                    Đang phát giọng nói...
                  </span>
                  <button
                    className="px-6 py-2 rounded-lg bg-red-500 text-white font-semibold shadow hover:bg-red-600 transition"
                    onClick={() => {
                      if (
                        typeof window !== "undefined" &&
                        "speechSynthesis" in window
                      ) {
                        window.speechSynthesis.cancel();
                        setSpeaking(false);
                      }
                    }}
                  >
                    Dừng nói
                  </button>
                </div>
              ) : (
                <span className="text-slate-400 text-base select-none">
                  Nhập câu hỏi để nghe trả lời bằng giọng nói!
                </span>
              )}
            </div>
          )}
        </div>

        <div className="flex items-center gap-3 mt-auto">
          <input
            className="flex-1 px-4 py-2 rounded-lg border border-slate-700 focus:outline-none focus:ring-2 focus:ring-orange-400 bg-slate-950/60 text-slate-100 placeholder-slate-500 text-base"
            placeholder="Nhập câu hỏi..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            disabled={loading}
          />
          <button
            className="p-3 rounded-full bg-orange-500 hover:bg-orange-600 transition text-white shadow disabled:opacity-60 disabled:cursor-not-allowed"
            onClick={handleSend}
            aria-label="Send"
            disabled={loading || !input.trim()}
          >
            {loading ? (
              <span className="w-5 h-5 animate-spin border-2 border-white border-t-transparent rounded-full inline-block"></span>
            ) : (
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M22 2L11 13"
                ></path>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M22 2L15 22l-4-9-9-4 20-7z"
                ></path>
              </svg>
            )}
          </button>
        </div>
      </motion.div>

      <AnimatePresence>
        {modalText && (
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setModalText(null)}
          >
            <motion.div
              className="bg-slate-800 rounded-2xl shadow-2xl max-w-3xl w-full max-h-[80vh] overflow-y-auto p-6 relative border border-slate-700"
              initial={{ scale: 0.8, opacity: 0, y: 30 }}
              animate={{
                scale: 1,
                opacity: 1,
                y: 0,
                transition: { type: "spring", stiffness: 200, damping: 20 },
              }}
              exit={{ scale: 0.8, opacity: 0, y: 30 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="border-b border-slate-700 pb-3 mb-4 flex justify-between items-center">
                <h2 className="text-xl font-semibold text-slate-100">
                  Giải thích chi tiết
                </h2>
                <div className="flex gap-2">
                  <button
                    className="px-3 py-1 text-sm rounded-lg bg-slate-700 hover:bg-slate-600 text-slate-200"
                    onClick={() => {
                      navigator.clipboard.writeText(modalText);
                      setCopyText("Copied!");
                      setTimeout(() => setCopyText("Copy"), 2000);
                    }}
                  >
                    {copyText}
                  </button>
                  <button
                    className="text-slate-400 hover:text-slate-200"
                    onClick={() => setModalText(null)}
                  >
                    ✖
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="prose prose-lg prose-invert max-w-none leading-relaxed text-slate-300">
                <ReactMarkdown>{modalText}</ReactMarkdown>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default VoiceChatbot;

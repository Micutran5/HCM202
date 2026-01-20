import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import QuizPage from "./pages/QuizPage";
import ChatbotPage from "./pages/ChatbotPage";
import CaseStudyPage from "./pages/CaseStudyPage";
import DaiHoi89Page from "./pages/DaiHoi89Page";
import GiaiDoan1Page from "./pages/GiaiDoan1Page";
import Header from "./components/Header";
import Footer from "./components/Footer";
import QAPage from "./pages/QAPage";
import DacTrung from "./pages/DacTrung";
import ViDuPage from "./pages/ViDu";
import VideoPage from "./pages/VideoPage";

function App() {
  return (
    <Router>
      <div className="min-h-screen w-full flex flex-col bg-[#f4f7ff]">
        <Header />
        <main className="flex-1 flex flex-col justify-center px-0 w-full">
          <div className="w-full flex-1 flex flex-col">
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/quiz" element={<QuizPage />} />
              <Route path="/chatbot" element={<ChatbotPage />} />
              <Route path="/ai-usage" element={<CaseStudyPage />} />
              <Route path="/dai-hoi-8-9" element={<DaiHoi89Page />} />
              <Route path="/giai-doan-1" element={<GiaiDoan1Page />} />
              <Route path="/qa" element={<QAPage />} />
              <Route path="/dac-trung" element={<DacTrung />} />
              <Route path="/vi-du" element={<ViDuPage />} />
              <Route path="/video" element={<VideoPage />} />
            </Routes>
          </div>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
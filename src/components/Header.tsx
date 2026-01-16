import React from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

// ...existing code...

const menu = [
  {
    label: "TRANG CHỦ",
    to: "/",
  },
  {
    label: "Điều kiện",
    to: "/dai-hoi-8-9",
  },
  {
    label: "Nội dung",
    to: "/giai-doan-1",
  },
  {
    label: "Vai trò",
    to: "/dac-trung",
  },
 
  {
    label: "Liên hệ",
    to: "/vi-du",
  },
  { label: "Quiz", to: "/quiz" },
  { label: "Chatbot", to: "/chatbot" },
  { label: "AI Usage", to: "/ai-usage" },
  { label: "Q&A", to: "/qa" },
];

// ...existing code...

const Header: React.FC = () => {
  const location = useLocation();
  const [open, setOpen] = React.useState(false);

  return (
    <header 
      className="sticky top-0 left-0 w-full z-50 shadow-lg"
      style={{
        background: 'linear-gradient(to right, #8D2012, #D65310, #E57A3C)',
        minHeight: '64px'
      }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        <Link to="/" className="flex items-center gap-2">
          <img
            src="/logo.webp"
            alt="Logo"
            className="w-18 h-9 rounded-l shadow-md bg-white/70 p-1"
          />
          <span className="text-xl font-extrabold text-white tracking-wide hidden sm:block drop-shadow-lg">
            Tư tưởng Hồ Chí Minh
          </span>

        </Link>
        <nav className="hidden md:flex gap-2 lg:gap-3 items-center">
          {menu.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`px-4 py-2 rounded-full font-semibold transition text-sm ${
                location.pathname === item.to
                  ? "bg-white text-orange-600 shadow-md"
                  : "text-white hover:bg-white/10"
              }`}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        {/* Mobile menu button */}
        <button
          className="md:hidden flex items-center justify-center p-2 rounded-xl text-white hover:bg-white/10 focus:outline-none"
          onClick={() => setOpen((v) => !v)}
          aria-label="Open menu"
        >
          <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
            <path
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
      {/* Mobile menu */}
      {open && (
        <motion.nav
          className="md:hidden flex flex-col gap-1 px-4 pb-4"
          style={{
            background: 'linear-gradient(to right, #8D2012, #D65310)'
          }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
        >
          {menu.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`block px-4 py-3 rounded-full font-semibold transition ${
                location.pathname === item.to
                  ? "bg-white text-orange-600"
                  : "text-white hover:bg-white/10"
              }`}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </motion.nav>
      )}
    </header>
  );
};

export default Header;

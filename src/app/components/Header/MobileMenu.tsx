// src/app/components/Header/MobileMenu.tsx
"use client";

import { motion } from "framer-motion";
import { X } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/app/store/store";
import { setLanguage } from "@/app/store/languageSlice";

interface MobileMenuProps {
  onClose: () => void;
}

const MobileMenu = ({ onClose }: MobileMenuProps) => {
  const currentLanguage = useSelector(
    (state: RootState) => state.language.current
  );
  const dispatch = useDispatch();

  const toggleLanguage = () => {
    dispatch(setLanguage(currentLanguage === "en" ? "kr" : "en"));
  };

  const navItems = [
    { id: "hero", label: currentLanguage === "en" ? "Home" : "홈" },
    { id: "about", label: currentLanguage === "en" ? "About" : "회사소개" },
    { id: "features", label: currentLanguage === "en" ? "Features" : "특징" },
    { id: "story", label: currentLanguage === "en" ? "Story" : "스토리" },
    { id: "contact", label: currentLanguage === "en" ? "Contact" : "연락처" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      className="fixed inset-0 bg-primary z-50 flex flex-col"
    >
      <div className="p-6 flex justify-between items-center border-b border-gray-700">
        <span className="text-white text-xl font-bold">MAXIUS</span>
        <button onClick={onClose}>
          <X className="w-6 h-6 text-white" />
        </button>
      </div>

      <nav className="flex-1 p-6 space-y-6">
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className="block text-white hover:text-accent transition-colors duration-300 text-lg py-2"
            onClick={onClose}
          >
            {item.label}
          </a>
        ))}
      </nav>

      <div className="p-6 border-t border-gray-700">
        <button
          onClick={toggleLanguage}
          className="text-sm bg-accent text-primary px-4 py-2 rounded font-medium hover:bg-opacity-90 transition"
        >
          Switch to {currentLanguage === "en" ? "Korean" : "English"}
        </button>
      </div>

      <div className="p-6 text-sm text-gray-300 border-t border-gray-700">
        <p>
          5F 12-30, Simin-daero 327beon-gil, Dongan-gu, Anyang-si, Gyeonggi-do,
          Korea
        </p>
        <p className="mt-2">Tel: 02.851.2662 / Fax: 02.851.2655</p>
        <p className="mt-2">support@maxius.io</p>
      </div>
    </motion.div>
  );
};

export default MobileMenu;

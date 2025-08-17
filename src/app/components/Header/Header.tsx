// src/app/components/Header/Header.tsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import MobileMenu from "./MobileMenu";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/app/store/store";
import { setLanguage } from "@/app/store/languageSlice";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
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
    <header className="sticky top-0 z-50 bg-primary px-6 py-4 flex items-center justify-between">
      <div className="text-xl font-bold text-white">MAXIUS</div>

      {/* Desktop Nav */}
      <nav className="hidden md:flex space-x-8">
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className="text-white hover:text-accent transition-colors duration-300 px-2 py-1 rounded"
          >
            {item.label}
          </a>
        ))}
      </nav>

      {/* Language Switcher */}
      <div className="items-center space-x-3 hidden md:flex">
        <button
          onClick={toggleLanguage}
          className="text-sm bg-accent text-primary px-3 py-1 rounded font-medium hover:bg-opacity-90 transition"
        >
          {currentLanguage.toUpperCase()}
        </button>
      </div>

      {/* Hamburger Menu */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-white"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Mobile Menu */}
      {isOpen && <MobileMenu onClose={() => setIsOpen(false)} />}
    </header>
  );
};

export default Header;

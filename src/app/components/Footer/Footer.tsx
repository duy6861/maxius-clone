// src/app/components/Footer/Footer.tsx
"use client";

import { useSelector } from "react-redux";
import { RootState } from "@/app/store/store";

const Footer = () => {
  const currentLanguage = useSelector(
    (state: RootState) => state.language.current
  );

  const content = {
    en: {
      company: "MAXIUS",
      description: "Innovating the future of computing.",
      address:
        "5F 12-30, Simin-daero 327beon-gil, Dongan-gu, Anyang-si, Gyeonggi-do, Republic of Korea",
      phone: "Tel 02. 851. 2662 / Fax 02. 851. 2655",
      email: "support@maxius.io",
    },
    kr: {
      company: "MAXIUS",
      description: "컴퓨팅의 미래를 혁신합니다.",
      address: "경기도 안양시 동안구 시민대로 327번길 12-30 5층",
      phone: "전화 02. 851. 2662 / 팩스 02. 851. 2655",
      email: "support@maxius.io",
    },
  };

  const currentContent = content[currentLanguage as "en" | "kr"];

  return (
    <footer className="bg-dark-blue text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold">{currentContent.company}</h3>
            <p className="text-gray-400 mt-2">{currentContent.description}</p>
          </div>
          <div className="text-center md:text-right">
            <p className="text-gray-400">{currentContent.address}</p>
            <p className="text-gray-400">{currentContent.phone}</p>
            <p className="text-gray-400">{currentContent.email}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

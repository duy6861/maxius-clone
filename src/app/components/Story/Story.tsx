// src/app/components/Story/Story.tsx
"use client";

import { motion } from "framer-motion";
import { useInView } from "@/app/hooks/useInView";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store/store";

// Định nghĩa type cho dữ liệu
interface StoryItem {
  year?: string;
  desc: string;
}

interface StorySection {
  title: string;
  items: StoryItem[];
}

const Story = () => {
  const [ref, isInView] = useInView({
    threshold: 0.1,
    // triggerOnce: true,
  });

  const currentLanguage = useSelector(
    (state: RootState) => state.language.current
  );

  const storyData: Record<"en" | "kr", StorySection[]> = {
    en: [
      {
        title: "History",
        items: [
          {
            year: "2021",
            desc: "Rebrand the Company name to Maxius\n1st Pan-Governmental Information Resource Integration HW3",
          },
          {
            year: "2020",
            desc: "2nd construction of AI-based adaptive security system\nSPC Certification : TOP 5 Rank record in the world of storage",
          },
          { year: "2019", desc: "Development of Genome Analysis" },
        ],
      },
      {
        title: "Partners",
        items: [
          {
            desc: "1000 corporate Partners\nCheongwadae, KHNP, Ministry of National Defense,\nGunpo city, Korea Agro-Fisheries&Food Trade Corporation, JeollaNamdo, KMRB, JDC, Korea Housing Finance Corporation, Gyeonggi Provincial Police Agency, NCIS, KPIC, Supreme Court of Korea, IPET, LH, National Gugak Center,Korea Workers Compensation&Welfare Service More than 1000 government agencies.",
          },
        ],
      },
      {
        title: "Patents",
        items: [
          {
            desc: "High-speed data I/O semiconductor Chip\nFPGA/CPLD/ASIC design and manufacturing technology, possess TPU development capability",
          },
          {
            desc: "Intelligent Pattern Analysis Algorithm\nHybrid Cache algorithm that follows data pattern analysis",
          },
          {
            desc: "OS and SSD optimization\nDevice Driver optimization technology differing for each OS, storage resource",
          },
        ],
      },
      {
        title: "Awards",
        items: [
          {
            desc: "Awarded the Sejong Award at the KR Patent Awards\nReceived the highest domestic patent award for outstanding performance and energy-saving technology",
          },
          {
            desc: "Certified by Korea Excellent Product Designation\nCertification of the only excellent procurement registered product in Korea in the server field that has been recognized for its high-performance system quality",
          },
        ],
      },
    ],
    kr: [
      {
        title: "연혁",
        items: [
          {
            year: "2021",
            desc: "회사명을 Maxius로 변경\n정부 정보 자원 통합 HW3 1위",
          },
          {
            year: "2020",
            desc: "AI 기반 적응형 보안 시스템 2차 구축\nSPC 인증: 저장소 분야 세계 TOP 5 기록",
          },
          { year: "2019", desc: "유전체 분석 개발" },
        ],
      },
      {
        title: "파트너",
        items: [
          {
            desc: "1000개 기업 파트너\n청와대, 한국수력원자력, 국방부, 군포시, 한국농수산식품유통공사, 전라남도, KMRB, JDC, 한국주택금융공사, 경기도경찰청, NCIS, KPIC, 대법원, IPET, LH, 국립국악원, 근로복지공단 등 1000개 이상 정부 기관",
          },
        ],
      },
      {
        title: "특허",
        items: [
          {
            desc: "고속 데이터 I/O 반도체 칩\nFPGA/CPLD/ASIC 설계 및 제조 기술, TPU 개발 능력 보유",
          },
          {
            desc: "지능형 패턴 분석 알고리즘\n데이터 패턴 분석을 따르는 하이브리드 캐시 알고리즘",
          },
          {
            desc: "OS 및 SSD 최적화\n각 OS, 저장소 자원에 따른 디바이스 드라이버 최적화 기술",
          },
        ],
      },
      {
        title: "수상",
        items: [
          {
            desc: "KR 특허상 시종상 수상\n우수한 성능과 에너지 절약 기술로 국내 최고 특허상 수상",
          },
          {
            desc: "한국 우수 제품 지정 인증\n고성능 시스템 품질로 인정받은 서버 분야 유일한 우수 조달 등록 제품 인증",
          },
        ],
      },
    ],
  };

  const currentStoryData = storyData[currentLanguage as "en" | "kr"];

  return (
    <section id="story" className="min-h-screen bg-light py-20" ref={ref}>
      <div className="container mx-auto px-10">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-6xl font-bold text-center mb-16"
        >
          STORY
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {currentStoryData.map((section, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="border-r border-gray-300 p-6"
            >
              <h3 className="text-2xl font-bold mb-6">{section.title}</h3>
              {section.items.map((item, i) => (
                <div key={i} className="mb-4">
                  {item.year && (
                    <span className="font-semibold text-gray-800 block">
                      {item.year}
                    </span>
                  )}
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Story;

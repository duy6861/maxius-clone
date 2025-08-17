// src/app/components/Features/Features.tsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "@/app/hooks/useInView";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store/store";

const Features = () => {
  const [activeTab, setActiveTab] = useState<string | null>(null);

  const [ref, isInView] = useInView({
    threshold: 0.1,
    // triggerOnce: true,
  });

  const currentLanguage = useSelector(
    (state: RootState) => state.language.current
  );

  const tabs = {
    en: [
      {
        id: "product",
        title: "Product",
        content: (
          <div className="text-sm text-gray-300 leading-relaxed">
            <p>
              <span className="text-accent">High-Performance Server</span> with
              an extensive selection of serviceable capabilities
            </p>
            <p>
              Building <span className="text-accent">IDC</span>; incorporating
              the latest <span className="text-accent">Storage</span> technology
              applicable to various I/O devices
            </p>
            <p>
              Various <span className="text-accent">Blockchain Solutions</span>,
              including IPFS.
            </p>
            <br />
            <p>
              Maxius will continue to develop as a company in the global market
              by supplying a variety of products and solutions.
            </p>
          </div>
        ),
      },
      {
        id: "technology",
        title: "Technology",
        content: (
          <div className="text-sm text-gray-300 leading-relaxed">
            <p>
              Based on more than 20 years of research know-how and technology,
              we are the only company in Korea that makes HPC servers{" "}
              <span className="text-accent">
                using self-developed system semiconductors
              </span>{" "}
              and{" "}
              <span className="text-accent">
                provides solutions specialized in the intelligent data center
              </span>{" "}
              in the IT industry.
            </p>
            <br />
            <p>
              With our services, Maxius strives to supply differentiated
              products and solutions.
            </p>
          </div>
        ),
      },
      {
        id: "application",
        title: "Application",
        content: (
          <div className="text-sm text-gray-300 leading-relaxed">
            <p>
              Maxius miscellaneous products are used for{" "}
              <span className="text-accent">AI/genetic analysis</span>,{" "}
              <span className="text-accent">edge computing</span>,{" "}
              <span className="text-accent">IDC centers</span>, as well as
              various solutions used for{" "}
              <span className="text-accent">vast data analysis</span>,{" "}
              <span className="text-accent">
                distributed processing functions
              </span>{" "}
              and <span className="text-accent">IPFS IDC</span>, etc.
            </p>
            <br />
            <p>
              Maxius will supply serviceable products and solutions to varying
              fields through R&D and communication.
            </p>
          </div>
        ),
      },
      {
        id: "blockchain",
        title: "Blockchain",
        content: (
          <div className="text-sm text-gray-300 leading-relaxed">
            <p>
              <span className="text-accent">
                storage and service utilized in Metaverse
              </span>
            </p>
            <p>
              <span className="text-accent">
                IPFS Storage and Application Services in Web3.0
              </span>
            </p>
            <br />
            <p>
              Maxius provides both H/W and S/W, which are optimized for
              decentralized storage to match customer needs and create the best
              added value.
            </p>
          </div>
        ),
      },
    ],
    kr: [
      {
        id: "product",
        title: "제품",
        content: (
          <div className="text-sm text-gray-300 leading-relaxed">
            <p>
              <span className="text-accent">고성능 서버</span>와 다양한 서비스
              기능
            </p>
            <p>
              최신 <span className="text-accent">저장소</span> 기술을 적용한{" "}
              <span className="text-accent">IDC</span> 구축
            </p>
            <p>
              IPFS를 포함한 다양한{" "}
              <span className="text-accent">블록체인 솔루션</span>
            </p>
            <br />
            <p>
              맥시우스는 다양한 제품과 솔루션을 공급하며 글로벌 시장에서 성장할
              것입니다.
            </p>
          </div>
        ),
      },
      {
        id: "technology",
        title: "기술",
        content: (
          <div className="text-sm text-gray-300 leading-relaxed">
            <p>
              20년 이상의 연구 노하우를 바탕으로, 우리는 자체 개발 시스템
              반도체를 사용하는 <span className="text-accent">HPC 서버</span>를
              만드는 유일한 한국 회사입니다.
            </p>
            <br />
            <p>
              맥시우스는 차별화된 제품과 솔루션을 제공하기 위해 노력하고
              있습니다.
            </p>
          </div>
        ),
      },
      {
        id: "application",
        title: "응용",
        content: (
          <div className="text-sm text-gray-300 leading-relaxed">
            <p>
              맥시우스 제품은{" "}
              <span className="text-accent">AI/유전체 분석</span>,{" "}
              <span className="text-accent">엣지 컴퓨팅</span>,{" "}
              <span className="text-accent">IDC 센터</span> 등에 사용됩니다.
            </p>
            <br />
            <p>
              맥시우스는 R&D와 커뮤니케이션을 통해 다양한 분야에 제품과 솔루션을
              제공할 것입니다.
            </p>
          </div>
        ),
      },
      {
        id: "blockchain",
        title: "블록체인",
        content: (
          <div className="text-sm text-gray-300 leading-relaxed">
            <p>
              <span className="text-accent">
                메타버스에서 활용되는 저장소 및 서비스
              </span>
            </p>
            <p>
              <span className="text-accent">
                Web3.0의 IPFS 저장소 및 애플리케이션 서비스
              </span>
            </p>
            <br />
            <p>
              맥시우스는 고객 요구에 맞춘 탈중앙화 저장소를 최적화하여 최고의
              부가 가치를 제공합니다.
            </p>
          </div>
        ),
      },
    ],
  };

  const currentTabs = tabs[currentLanguage as "en" | "kr"];

  return (
    <section
      id="features"
      className="min-h-screen w-full bg-primary text-white flex flex-col"
      ref={ref}
    >
      <div className="container mx-auto px-10 flex-1 flex items-center justify-center">
        {/* 4 columns - chiều cao 100% */}
        <div className="w-full h-full grid grid-cols-1 md:grid-cols-4 gap-8">
          {currentTabs.map((tab, index) => (
            <motion.div
              key={tab.id}
              className="relative border-r border-gray-700 p-6 cursor-pointer flex flex-col h-full"
              onMouseEnter={() => setActiveTab(tab.id)}
              onMouseLeave={() => setActiveTab(null)}
              initial={{
                opacity: 0,
                y: index % 2 === 0 ? 200 : -200, // Xen kẽ: chẵn từ dưới lên, lẻ từ trên xuống
              }}
              animate={
                isInView
                  ? {
                      opacity: 1,
                      y: 0,
                      transition: {
                        duration: 0.6,
                        delay: index * 0.1,
                        ease: "easeOut",
                      },
                    }
                  : {}
              }
            >
              {/* Title */}
              <motion.h3
                className={`text-2xl font-semibold mb-6 text-center ${
                  activeTab === tab.id ? "text-accent" : "text-white"
                }`}
                animate={{
                  scale: activeTab === tab.id ? 1.1 : 1,
                }}
                transition={{ duration: 0.3 }}
              >
                {tab.title}
              </motion.h3>

              {/* Content - chỉ hiện khi hover */}
              <motion.div
                className="flex-1 overflow-hidden"
                animate={{
                  opacity: activeTab === tab.id ? 1 : 0,
                  height: activeTab === tab.id ? "auto" : 0,
                }}
                transition={{ duration: 0.3 }}
              >
                {tab.content}
              </motion.div>

              {/* Highlight effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent rounded-lg"
                animate={{
                  scale: activeTab === tab.id ? 1.05 : 1,
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

// src/app/components/About/About.tsx
"use client";

import { motion } from "framer-motion";
import { useInView } from "@/app/hooks/useInView";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store/store";

const About = () => {
  const [ref, isInView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const currentLanguage = useSelector(
    (state: RootState) => state.language.current
  );

  const content = {
    en: (
      <>
        1. <span className="text-accent">Self-produced</span> semiconductors
        <br />
        2. Production and Sales of{" "}
        <span className="text-accent">High-Performance</span>{" "}
        <span className="text-accent">Servers</span>
        <br />
        3. Construction of operative{" "}
        <span className="text-accent">Blockchain IDC</span>
        <br />
        4. Establish solution relating to Blockchain{" "}
        <span className="text-accent">(IPFS)</span>
      </>
    ),
    kr: (
      <>
        1. <span className="text-accent">자체 제작</span> 반도체
        <br />
        2. <span className="text-accent">고성능 서버</span> 생산 및 판매
        <br />
        3. <span className="text-accent">블록체인 IDC</span> 구축
        <br />
        4. 블록체인 관련 솔루션 구축 <span className="text-accent">(IPFS)</span>
      </>
    ),
  };

  return (
    <section
      id="about"
      className="min-h-screen w-full bg-black text-white flex items-center justify-center relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[url('/images/background-tech.jpg')] bg-cover bg-center opacity-30"></div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="w-full max-w-4xl mx-auto text-center">
          <motion.p
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-2xl md:text-3xl leading-relaxed tracking-wide"
          >
            {content[currentLanguage as "en" | "kr"]}
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default About;

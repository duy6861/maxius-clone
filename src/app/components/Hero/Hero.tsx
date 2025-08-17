// src/app/components/Hero/Hero.tsx
"use client";

import { motion } from "framer-motion";
import { useInView } from "@/app/hooks/useInView";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store/store";
import Image from "next/image";

const Hero = () => {
  const [ref, isInView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const currentLanguage = useSelector(
    (state: RootState) => state.language.current
  );

  const content = {
    en: {
      title: "MAX I & US",
      description:
        "Maxius is the only self-developed semiconductor company that focuses on developing High-Performance Servers. We provide specialized solutions tailored towards different sectors of the IT industry and strive to break into the global market as a leader in server technology.",
    },
    kr: {
      title: "MAX I & US",
      description:
        "맥시우스는 고성능 서버 개발에 집중하는 자체 개발 반도체 회사입니다. 우리는 IT 산업의 다양한 부문에 맞춤형 솔루션을 제공하며, 서버 기술 분야의 글로벌 리더로 성장하고자 노력하고 있습니다.",
    },
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center relative overflow-hidden"
    >
      <div className="container mx-auto px-10 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 py-20 h-full">
          {/* Text content - item 1 */}
          <div className="flex-1">
            <motion.div
              ref={ref}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold text-[#1a2a59] mb-6 leading-tight">
                {content[currentLanguage as "en" | "kr"].title}
              </h1>
              <motion.p
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-lg md:text-xl text-[#1a2a59] leading-relaxed"
              >
                {content[currentLanguage as "en" | "kr"].description}
              </motion.p>
            </motion.div>
          </div>

          {/* Image content - item 2 */}
          <div className="flex-1 flex justify-center">
            <div className="relative w-full h-96 md:h-[500px]">
              <Image
                src="/background.png"
                alt="Hero background"
                fill
                className="object-fill"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

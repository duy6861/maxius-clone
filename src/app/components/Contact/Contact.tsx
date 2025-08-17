// src/app/components/Contact/Contact.tsx
"use client";

import { motion } from "framer-motion";
import { useInView } from "@/app/hooks/useInView";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store/store";

const Contact = () => {
  const [ref, isInView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const currentLanguage = useSelector(
    (state: RootState) => state.language.current
  );

  const content = {
    en: {
      title: "Contact Us",
      subtitle: "Have questions? Reach out to us.",
      name: "Name",
      email: "Email",
      message: "Message",
      send: "Send Message",
      company: "MAXIUS",
      description: "Innovating the future of computing.",
      address:
        "5F 12-30, Simin-daero 327beon-gil, Dongan-gu, Anyang-si, Gyeonggi-do, Republic of Korea",
      phone: "Tel 02. 851. 2662 / Fax 02. 851. 2655",
      emailName: "support@maxius.io",
    },
    kr: {
      title: "문의하기",
      subtitle: "질문이 있으신가요? 연락주세요.",
      name: "이름",
      email: "이메일",
      message: "메시지",
      send: "메시지 보내기",
      company: "MAXIUS",
      description: "컴퓨팅의 미래를 혁신합니다.",
      address: "경기도 안양시 동안구 시민대로 327번길 12-30 5층",
      phone: "전화 02. 851. 2662 / 팩스 02. 851. 2655",
      emailName: "support@maxius.io",
    },
  };

  const currentContent = content[currentLanguage as "en" | "kr"];

  return (
    <section
      id="contact"
      className="min-h-screen bg-primary text-white py-20"
      ref={ref}
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">{currentContent.title}</h2>
            <p className="text-xl text-gray-300">{currentContent.subtitle}</p>
          </div>

          <div className="bg-gray-900 bg-opacity-50 rounded-2xl p-8 md:p-12 backdrop-blur-sm border border-gray-700">
            <div className="grid md:grid-cols-2 gap-10">
              {/* Contact Form */}
              <div>
                <form className="space-y-6">
                  <div>
                    <input
                      type="text"
                      placeholder={currentContent.name}
                      className="w-full p-4 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder={currentContent.email}
                      className="w-full p-4 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                    />
                  </div>
                  <div>
                    <textarea
                      placeholder={currentContent.message}
                      rows={5}
                      className="w-full p-4 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-accent transition-all resize-none"
                    ></textarea>
                  </div>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                    }}
                    type="submit"
                    className="bg-accent text-primary px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 w-full"
                  >
                    {currentContent.send}
                  </button>
                </form>
              </div>

              {/* Contact Info */}
              <div className="flex flex-col justify-center">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-accent mb-2">
                      {currentContent.company}
                    </h3>
                    <p className="text-gray-300">
                      {currentContent.description}
                    </p>
                  </div>

                  <div className="space-y-3 text-gray-300">
                    <p className="leading-relaxed">{currentContent.address}</p>
                    <p>{currentContent.phone}</p>
                    <p className="font-medium">{currentContent.emailName}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

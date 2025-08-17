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
    },
    kr: {
      title: "문의하기",
      subtitle: "질문이 있으신가요? 연락주세요.",
      name: "이름",
      email: "이메일",
      message: "메시지",
      send: "메시지 보내기",
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
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold mb-6">{currentContent.title}</h2>
          <p className="text-lg mb-8">{currentContent.subtitle}</p>
          <form className="space-y-4">
            <input
              type="text"
              placeholder={currentContent.name}
              className="w-full p-3 rounded bg-gray-800 text-white"
            />
            <input
              type="email"
              placeholder={currentContent.email}
              className="w-full p-3 rounded bg-gray-800 text-white"
            />
            <textarea
              placeholder={currentContent.message}
              rows={5}
              className="w-full p-3 rounded bg-gray-800 text-white"
            ></textarea>
            <button
              onClick={(e) => {
                e.preventDefault();
              }}
              type="submit"
              className="bg-accent text-primary px-6 py-3 rounded font-medium hover:bg-opacity-90 transition"
            >
              {currentContent.send}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

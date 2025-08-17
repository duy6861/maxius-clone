// app/page.tsx
import Header from "@/app/components/Header/Header";
import Hero from "@/app/components/Hero/Hero";
import About from "@/app/components/About/About";
import Features from "@/app/components/Features/Features";
import Story from "@/app/components/Story/Story";
import Contact from "@/app/components/Contact/Contact";
import Footer from "@/app/components/Footer/Footer";

export default function Home() {
  return (
    <div className="container ">
      <Header />
      <Hero />
      <About />
      <Features />
      <Story />
      <Contact />
      <Footer />
    </div>
  );
}

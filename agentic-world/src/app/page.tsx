"use client";
import dynamic from "next/dynamic";
const Contact = dynamic(() => import("@/components/ContactPage"), { ssr: false });
const HeroSection = dynamic(() => import("@/components/HeroSection"), { ssr: false });
const Technologies = dynamic(() => import("@/components/Technologies"), { ssr: false });
import Chatbot from "@/components/Chatbot";
import PricingPage from "@/components/Pricingpage";
const QuestionsSection = dynamic(() => import("@/components/QuestionsSection"), { ssr: false });
const Insights = dynamic(() => import("@/components/Insights"), { ssr: false });

const Page = () => {
  return (
    <div>
      <HeroSection />
      <Technologies />
      <QuestionsSection/>
    <Insights/>
      <PricingPage />
      <Contact />
      <Chatbot/>
    </div>
  );
};

export default Page;


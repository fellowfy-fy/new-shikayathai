import React from "react";
import {
  Modal,
  HeroSection,
  IntroSection,
  HowItWorksSection,
  WhyFreeSection,
  RecentRequest,
  RecentReactions,
  TopRated,
  StatisticsSection,
  FAQSection,
  OrganizationSection,
} from "@/components/shared";

const HomePage = async () => {
  return (
    <div>
      <HeroSection />
      <IntroSection />
      <HowItWorksSection />
      <WhyFreeSection />
      <RecentRequest />
      <RecentReactions />
      <TopRated />
      <StatisticsSection />
      <FAQSection />
      <OrganizationSection />
      <Modal />
    </div>
  );
};

export default HomePage;

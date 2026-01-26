import FaqQuestion from "@/components/Home/faq";
import HeroSub from "@/components/SharedComponent/HeroSub";
import React from "react";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "FAQ | Web Development Services",
};

const page = () => {
  return (
    <>
      <HeroSub title="Frequently Asked Questions" description="Everything you need to know about my services" />
      <FaqQuestion />
    </>
  );
};

export default page;

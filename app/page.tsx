// import Image from "next/image";
"use client"

import Header from "@/components/section/Header";
import WhyChooseSolar from "@/components/section/WhyChooseSolar";
import Subsidy from "@/components/section/Subsidy";
import Testimonials from "@/components/section/Testimonials";
import Faq from "@/components/section/Faq";
import { Footer7 } from "@/components/section/Footer";


export default function Home() {
  return (
 <>
 <Header />
 <WhyChooseSolar />
 <Subsidy />
 <Testimonials />
 <Faq />
 <Footer7 />
 </>
    
  );
}

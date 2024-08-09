
import React from 'react'
import "../globals.css";
import { About } from "@/components/landingpage/About";
import { Cta } from "@/components/landingpage/Cta";
import { FAQ } from "@/components/landingpage/FAQ";
import { Features } from "@/components/landingpage/Features";
import { Footer } from "@/components/landingpage/Footer";
import { Hero } from "@/components/landingpage/Hero";
import { HowItWorks } from "@/components/landingpage/HowItWorks";
import { Navbar } from "@/components/landingpage/Navbar";
import { Newsletter } from "@/components/landingpage/Newsletter";
import { Pricing } from "@/components/landingpage/Pricing";
import { ScrollToTop } from "@/components/landingpage/ScrollToTop";
import { Services } from "@/components/landingpage/Services";
import { Sponsors } from "@/components/landingpage/Sponsors";
import { Team } from "@/components/landingpage/Team";
import { Testimonials } from "@/components/landingpage/Testimonials";
import Support from "@/components/landingpage/Support";

const SupportPage = () => {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <Navbar />
      <div className="flex-grow  w-full px-3 py-3 mt-8 sm:p-20 ">
        <Support />
      </div>
      <Footer />
    </div>
  )
}

export default SupportPage

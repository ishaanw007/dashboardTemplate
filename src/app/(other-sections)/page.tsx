'use client';
import "./globals.css";
import Login from "@/components/Auth/Login";
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
import React, { useEffect, useState } from "react";
import dynamic from 'next/dynamic';

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay for demonstration purposes
    setTimeout(() => {
      setLoading(false);
    }, 3000); // Adjust the delay as needed

   
  }, []);
  return (
loading?
    <div className="flex justify-center items-center flex-col h-[100vh]">
    <PlayerWithNoSSR
      autoplay
      loop
      src={'/LogoLottie.json'}
      className='w-1/4 h-auto'
    />
    </div>
    :
    
    <Login></Login>
     
    
  );
}

const PlayerWithNoSSR = dynamic(
  () => import('@lottiefiles/react-lottie-player').then(module => module.Player),
  { ssr: false }
);


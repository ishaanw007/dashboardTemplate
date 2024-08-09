"use client";
import { Progress } from "@/components/ui/progress";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; // Correct import for Next.js
import { motion } from "framer-motion";
import logo from "../../../public/minegate_india_logo.png";
import Image from "next/image";
import { useTour } from "@reactour/tour";
import { useTourStepStore } from "@/store/toursteps";
const LoadingPage = ({ title }) => {
  // const { setIsOpen } = useTour();
  // const { setStep } = useTourStepStore();
  const router = useRouter();
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress === 100) {
          clearInterval(interval);
          setTimeout(() => {
            router.push(`/dashboard/home`);
            // setIsOpen(true);
            // setStep(0);
          }, 0);
          return 100;
        }
        return prevProgress + 25;
      });
    }, 1000); // Increase progress every second

    return () => clearInterval(interval);
  }, []);
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
        color: "black",
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <Image src={logo} alt="Logo" className="w-24 h-auto" />
      </motion.div>
      <motion.h1
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className={`text-center text-4xl font-bold  text-gray-900 mb-3  `}
      >
        Welcome to {title}
      </motion.h1>

      <br />
      <Progress className={`w-[300px] `} value={progress} max={100} />
    </div>
  );
};

export default LoadingPage;

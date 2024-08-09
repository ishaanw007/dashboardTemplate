
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/themeprovider";
import Navbar from "@/components/Global/Navbar";
import type { AppProps } from 'next/app'
import 'mapbox-gl/dist/mapbox-gl.css'; // Adjust the path based on your project structure
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';
import '@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css';
import { Toaster } from "@/components/ui/toaster";
// import NextNProgress from 'nextjs-progressbar';

import NextTopLoader from 'nextjs-toploader';
// import { ToursProvider } from "@/providers/tourProvider";



const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: 'TimekeeperX - Best HRM Software',
  description: "Manage your employee's time",
  icons: {
    icon: ["/favicon-32x32.png"],

  },
}

export default function RootLayout({
  children,
}: Readonly<{

  children: React.ReactNode;
}>) {

  return (
    <html lang="en" suppressHydrationWarning className=" overflow-x-hidden">
      <body className={`${inter.className}`} >
        {/* <ToursProvider> */}

        <NextTopLoader height={5} speed={100} showSpinner={false} />

        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar></Navbar>

          {children}


          <Toaster />
        </ThemeProvider>
        <div className="w-full fixed bottom-3 right-10  mt-6 z-50 opacity-50  items-center justify-end text-sm hidden md:flex ">
          © 2024, Minegate India LLP. All Rights Reserved.
        </div>
        {/* </ToursProvider> */}
      </body>
    </html>
  );
}

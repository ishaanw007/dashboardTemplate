"use client";


import { InfoTabs } from "@/components/Global/InfoTabs";
import Login from "@/components/Auth/Login";
import React from "react";
import Breadcrumb from '@/components/Global/Bredcrumb'
import Dashboard from "@/components/Dashboard/Dashboard";
import { useSidebarStore } from "@/store/sidebar";
import { useSidebarPositionStore } from "@/store/sidebarposition";
import { useColorTheme } from "@/providers/ColorThemeProvider";

function Home() {
  const { open } = useSidebarStore()
  const { align } = useSidebarPositionStore()
  // const { currentColor } = useColorTheme() ${currentColor === "zinc" ? "" : " bg-theme/30"}
  return (
    <div className={` ${open && align && " md:ml-[190px]"} ${open && !align && " ml-0 md:mr-[200px]"} ${!open && !align && " ml-0 md:mr-[60px]"}   `}>
      <Breadcrumb title="Home" />
      <div className=" mt-8 min-h-[100vh]" >
        <Dashboard />
      </div>


      {/* <InfoTabs
            heading={"Total Employees"}
            quantity={5}
            description={"Total number of employees "}
          ></InfoTabs>
        </div>
        <div className="flex-shrink-0 w-3/4 sm:w-1/5 sm:flex-shrink-1">
          <InfoTabs
            heading={"Total Present"}
            quantity={5}
            description={"Total employees present"}
          ></InfoTabs>
        </div>
        <div className="flex-shrink-0 w-3/4 sm:w-1/5 sm:flex-shrink-1">
          <InfoTabs
            heading={"Total Absent"}
            quantity={5}
            description={"Total employees absent "}
          ></InfoTabs>
        </div>
        <div className="flex-shrink-0 w-3/4 sm:w-1/5 sm:flex-shrink-1">
          <InfoTabs
            heading={"Geofence"}
            quantity={5}
            description={"Total number of Geofences"}
          ></InfoTabs> */}
      {/* </div> */}
    </div>
  );
}

export default Home;
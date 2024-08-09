"use client"
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { PiSunHorizonBold } from "react-icons/pi";
import { FaBars } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";
import Image from "next/image";
import { useTheme } from "next-themes";
import { Navbaroptions } from "./Navbaroptions";
import Notificationbutton from "./Notificationbutton";
import { usePathname } from "next/navigation";
import { IoIosHome } from "react-icons/io";
import { IoIosMan } from "react-icons/io";
import { IoIosDocument } from "react-icons/io";
import { IoIosMap } from "react-icons/io";
import { IoIosClipboard } from "react-icons/io";
import { IoIosCalendar } from "react-icons/io";
import { IoIosPaperPlane } from "react-icons/io";
import { GiOfficeChair } from "react-icons/gi";
import { ImOffice } from "react-icons/im";
import { FaHandshakeSimple } from "react-icons/fa6";
import { MdWavingHand } from "react-icons/md";
import { TbReportMoney } from "react-icons/tb";
import Sidebar from "@/components/Global/Sidebar";
import { Input } from "../ui/input";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Menu, Moon, Search, Sun, SunMoon } from "lucide-react";
import { ScrollArea } from "../ui/scroll-area";
import { Separator } from "../ui/separator";
import Breadcrumb from "./Bredcrumb";
import { useSidebarPositionStore } from "@/store/sidebarposition";
import { useColorTheme } from "@/providers/ColorThemeProvider";
import { useSidebarStore } from "@/store/sidebar";
// import lightThemeLogo from "../../../public/Timekeeper x Logo/Dark Logo + text-500x500.svg";
// import darkThemeLogo from "../../../public/Timekeeper x Logo/Light=logo+text-500x500.svg";

function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const [active, setActive] = useState(null);
  const { open } = useSidebarStore()
  const [showSearch, setShowSearch] = useState(false)
  const [toggle, setToggle] = useState(true);
  const { setTheme, resolvedTheme, theme } = useTheme();
  // const [selectedCompany, setSelectedCompany] = useState("");

  const { currentColor } = useColorTheme()
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
      setToggle(true);

    }
    else {
      setToggle(false);
    }

  }, []);

  const [inputWidth, setInputWidth] = useState('25rem'); // Initialize inputWidth here

  const pathname = usePathname();
  const handleInputClick = () => {
    setInputWidth(inputWidth === '25rem' ? '35rem' : '25rem'); // Toggle width on click
  };

  const { align } = useSidebarPositionStore()


  return (
    <>

      <nav className={` ${open && align ? "md:ml-16 lg:ml-10" : ""}   w-full ${showSearch && window.innerWidth < 768 ? " h-[120px]" : "h-16"}  
         ${currentColor === "zinc" ? " bg-white dark:bg-black " : "bg-theme dark:bg-theme "} flex flex-col `}>
        <div className="flex justify-between items-center gap-5 h-full py-4 px-4 sm:px-10 md:px-32  w-full">
          <span className="md:hidden place-self-start	 w-full">
            {theme === "dark" ? (
              <Image src={"/Timekeeper x Logo/Light=logo+text-500x500.svg"} className="w-[150px] h-auto " width="0" height={0} alt="Logo" />
            ) : (
              <Image src={"/Timekeeper x Logo/Dark Logo + text-500x500.svg"} className="w-[150px] h-auto " width="0" height={0} alt="Logo" />
            )}
          </span>
          <div className={`hidden md:block w-full   ${align ? "" : " md:mr-24 md:-ml-24"}`}>
            {/* <EmployeeSearchForDesktop /> */}
            <div className="relative flex justify-center ">

              <Input
                placeholder="Search"
                onChange={(e:any) => {
                }}
                
                className={`transition-all duration-300 ease-in-out dark:border-gray-900 w-[300px] focus:w-[500px] bg-gray-100 dark:bg-gray-900`} data-tour="search" />
            </div>
          
          </div>
          <div className=" flex items-center" >

            <div className={`flex items-center  justify-between  ${align ? "" : " lg:mr-24 lg:-ml-24"}`}>
              
                <div className="hidden lg:block">
                  <Select defaultValue="timekeeperX" >
                    <SelectTrigger className="w-[250px] mx-5 bg-gray-100 dark:bg-gray-900 ">
                      <SelectValue placeholder="Select your Company" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                          <SelectItem value="timekeeperX" >TimekeeperX</SelectItem>


                      </SelectGroup>
                    </SelectContent>
                  </Select>

                </div>
              <div className="mr-5 sm:mr-6 self-center flex md:hidden cursor-pointer">
                <Search onClick={() => { setShowSearch(!showSearch), setIsSidebarOpen(false) }} className={`${currentColor === "zinc" ? " dark:text-white text-black" : "text-white "} h-5 w-5`} />
              </div>
              <div className="mr-5 sm:mr-6 self-center cursor-pointer">
                {toggle ? (
                  <SunMoon
                    className={`"text-xl sm:text-2xl ${currentColor === "zinc" ? " dark:text-white text-black" : "text-white "} `}
                    onClick={() => {
                      setToggle(false);
                      setTheme("dark");
                    }}
                  />
                ) : (
                  <Sun
                    className={`text-2xl sm:text-3xl text-white `}
                    onClick={() => {
                      setToggle(true);
                      setTheme("light");
                    }}
                  ></Sun>
                )}
              </div>


              <div className="mr-5  mt-2 -ml-2">
                <Notificationbutton></Notificationbutton>

              </div>
              <div className=" hidden min-[470px]:flex mr-5 md:mr-0">

                <Navbaroptions></Navbaroptions>
              </div>
              <div className="block md:hidden ">
                <Menu className={`text-2xl  cursor-pointer
                   ${currentColor === "zinc" ? " dark:text-white text-black" : "text-white "}`}
                  onClick={() => {
                    setIsSidebarOpen(!isSidebarOpen)
                    setShowSearch(false)
                  }} />

              </div>
              {/* <button
              onClick={toggleSidebar}
              className="  focus:outline-none ml-3 mr-6"
            >
              <FaBars className="text-2xl cursor-pointer" />
            </button> */}
            </div>
          </div>
        </div>
        {
          showSearch && window.innerWidth < 768 &&
          <div className=" pb-16">
            {/* <EmployeeSearchForMobile /> */}
            <div className="relative flex justify-center  w-full  md:hidden ">

                <Input
                    placeholder="Search"
                    onChange={(e:any) => {
                    
                    }}

                    className={`transition-all duration-300 ease-in-out dark:border-gray-900 w-full mx-3.5 sm:mx-0 sm:w-[90%] bg-gray-100 dark:bg-gray-900`} data-tour="search" />

            </div>
          </div>
        }
        {/* <div
          className={`mybg overflow-y-auto no-scrollbar text-gray-400 rounded-r-xl fixed top-0 left-0 h-full w-52 z-10 outline outline-1 transition-transform transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
            }`}
        >
          <ul className="py-4 px-8  mt-16 font-semi-bold">
          <li className="my-6 pb-6">
          <hr className="w-full h-0.5 bg-gray-200 my-6"/>
              <h1 className="text-2xl  text-white font-medium">Timekeeper</h1>
              <hr className="w-full h-0.5 bg-gray-200 my-6"/>
          </li>
            

            <li className="my-8 flex items-center">
              <IoIosHome className={pathname === "/dashboard/home" ? "text-white text-xl mr-2" : "text-gray-400 text-xl mr-2"} />
              <Link href="/dashboard/home" className={pathname === "/dashboard/home" ? "text-white font-medium	" : ""}>Dashboard</Link>
            </li>
            
            <li className="my-8  flex items-center">
              <IoIosMan className={pathname === "/dashboard/employee" ? "text-white text-xl mr-2" : "text-gray-400 text-xl mr-2"} />
              <Link href="/dashboard/employee" className={pathname === "/dashboard/employee" ? "text-white  font-medium" : ""}>Employees</Link>
            </li>
            

            <li className="my-8 flex items-center">
              <IoIosDocument className={pathname === "/dashboard/attendence" ? "text-white text-xl mr-2" : "text-gray-400 text-xl mr-2"} />
              <Link href="/dashboard/attendence" className={pathname === "/dashboard/attendence" ? "text-white  font-medium" : ""}>Attendance</Link>
            </li>
            
            <li className="my-8 flex items-center">
              <IoIosMap className={pathname === "/dashboard/geofence" ? "text-white text-xl mr-2" : "text-gray-400 text-xl mr-2"} />
              <Link href="/dashboard/geofence" className={pathname === "/dashboard/geofence" ? "text-white  font-medium" : ""}>Geofence</Link>
            </li>
            
            <li className="my-8 flex items-center">
              <IoIosClipboard className={pathname === "/dashboard/shifts" ? "text-white text-xl mr-2" : "text-gray-400 text-xl mr-2"} />
              <Link href="/dashboard/shifts" className={pathname === "/dashboard/shifts" ? "text-white  font-medium" : ""}>Shifts</Link>
            </li>
            

            <li className="my-8 flex items-center">
              <IoIosCalendar className={pathname === "/dashboard/leaves" ? "text-white text-xl mr-2" : "text-gray-400 text-xl mr-2"} />
              <Link href="/dashboard/leaves" className={pathname === "/dashboard/leaves" ? "text-white  font-medium" : ""}>Leaves</Link>
            </li>
            

            <li className="my-8 flex items-center">
              <ImOffice className={pathname === "/dashboard/departments" ? "text-white text-xl mr-2" : "text-gray-400 text-xl mr-2"} />
              <Link href="/dashboard/departments" className={pathname === "/dashboard/departments" ? "text-white  font-medium" : ""}>Department</Link>
            </li>  
            

            <li className="my-8 flex items-center">
              <GiOfficeChair className={pathname === "/dashboard/designation" ? "text-white text-xl mr-2" : "text-gray-400 text-xl mr-2"} />
              <Link href="/dashboard/designation" className={pathname === "/dashboard/designation" ? "text-white  font-medium" : ""}>Designations</Link>
            </li>
            

            <li className="my-8 flex items-center">
              <IoIosPaperPlane className={pathname === "/dashboard/travel" ? "text-white text-xl mr-2" : "text-gray-400 text-xl mr-2"} />
              <Link href="/dashboard/travel" className={pathname === "/dashboard/travel" ? "text-white  font-medium" : ""}>Travel</Link>
            </li>
            

            <li className="my-8 flex items-center">
              <TbReportMoney className={pathname === "/dashboard/leaves" ? "text-white text-xl mr-2" : "text-gray-400 text-xl mr-2"} />
              <Link href="/dashboard/leaves" className={pathname === "/dashboard/leaves" ? "text-white  font-medium" : ""}>Pay Slips</Link>
            </li>
            
            <li className="my-8 flex items-center">
              <FaHandshakeSimple className={pathname === "/dashboard/leaves" ? "text-white text-xl mr-2" : "text-gray-400 text-xl mr-2"} />
              <Link href="/dashboard/leaves" className={pathname === "/dashboard/leaves" ? "text-white  font-medium" : ""}>Onboarding</Link>
            </li>
            
            <li className="my-8 flex items-center">
              <MdWavingHand className={pathname === "/dashboard/leaves" ? "text-white text-xl mr-2" : "text-gray-400 text-xl mr-2"} />
              <Link href="/dashboard/leaves" className={pathname === "/dashboard/leaves" ? "text-white  font-medium" : ""}>Seperation</Link>
            </li>
            



          </ul>
        </div> */}
        <Sidebar sidebar={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} ></Sidebar>

      </nav>

    </>
  );
}

export default Navbar;
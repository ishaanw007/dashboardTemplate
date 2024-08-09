
"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState, useRef } from 'react';
import {
    ArchiveRestore,
    Award,
    Building,
    Building2,
    CalendarClock,
    CalendarRange,
    ChevronDown,
    ChevronLeft,
    ChevronRight,
    CircleDashed,
    Clock,
    Clock1,
    Clock4,
    Compass,
    Factory,
    FileText,
    History,
    Home,
    LampDesk,
    Landmark,
    LayoutList,
    LineChart,
    List,
    Locate,
    LocateFixed,
    LucideFolderSearch2,
    MapPin,
    Medal,
    Megaphone,
    Network,
    Package,
    Package2,
    PanelLeft,
    PlaneTakeoff,
    PlusCircle,
    Ribbon,
    Rotate3D,
    Search,
    Settings,
    ShieldCheck,
    ShoppingCart,
    Table2,
    TentTree,
    Timer,
    Upload,
    User2,
    UserCircle,
    UserCog2,
    Users2,
    Warehouse,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Textarea } from "@/components/ui/textarea";
import {
    ToggleGroup,
    ToggleGroupItem,
} from "@/components/ui/toggle-group";
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
    TooltipProvider,
} from "@/components/ui/tooltip";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { useSidebarStore } from "@/store/sidebar";
import { useTour } from "@reactour/tour";
import { useSidebarPositionStore } from "@/store/sidebarposition";
import { useColorTheme } from "@/providers/ColorThemeProvider";

function Sidebar({ sidebar, onClose }: { sidebar: boolean; onClose: () => void }) {
    const { align } = useSidebarPositionStore()
    const { currentColor } = useColorTheme()
    const pathname = usePathname();
    const [expanded, setExpanded] = useState(false);
    const [shiftExpanded, setShiftExpanded] = useState(false);
    const { theme, setTheme, resolvedTheme } = useTheme();
    const { open, setOpen } = useSidebarStore()
    const { isOpen, setIsOpen } = useTour()
    const sidebarRef = useRef<any>(null);

    useEffect(() => {
        console.log(sidebar)
        setOpen(sidebar);
    }, [sidebar])

    function handleOpen() {
        setOpen(!open);
    }

    const handleClose = () => {
        setOpen(false);
        onClose();
    };

    return (
        <div className=" bg-theme">
            <aside ref={sidebarRef} className={` flex justify-start py-2 md:py-0 overflow-x-hidden overflow-y-hidden fixed dark:border inset-y-0 ${align ? "left-0 border-r  rounded-r-xl"
                : "right-0 border-l  rounded-l-xl"}  z-30 flex flex-col  bg-background 
             transition-transform duration-300 ease-in-out ${!open ? 'hidden  md:flex md:w-fit' : '  flex justify-start w-[300px] md:w-fit '}`}>
                <nav className="flex flex-col justify-start  items-center gap-4 py-2  md:py-4 overflow-y-hidden overflow-x-hidden">
                    <div onClick={handleOpen} className="w-full cursor-pointer -ml-8 md:-ml-0 ">
                        {!open ? (
                            <div className={` flex  items-center justify-between   w-full  ${align ? "pl-4" : "pr-4"}`}>
                                {
                                    !align &&
                                    <ChevronLeft className=" h-6 w-4 cursor-pointer " onClick={() => setOpen(true)} />
                                }
                                {theme === "dark" ? (
                                    <Image src="/Timekeeper x Logo/Light-500x500.pn" width="0" height={0} alt="Logo" className="w-[30px] h-auto cursor-pointer" />
                                ) : (
                                    <Image src="/Timekeeper x Logo/Dark-500x500.png" height={0} width="0" alt="Logo" className="w-[30px] h-auto cursor-pointer" />
                                )}
                                {
                                    align &&
                                    <ChevronRight className=" h-6 w-4 cursor-pointer " onClick={() => setOpen(true)} />
                                }
                            </div>
                        ) : (
                            <>
                                <div className="flex justify-between w-full h-fit items-center gap-24 md:gap-2 overflow-y-hidden  md:pr-3 ml-2">
                                    {/* <Link href="/dashboard/home" className="flex w-full justify-center py-3 pointer-cursor"> */}
                                    {
                                        !align &&
                                        <ChevronRight size={20} className="cursor-pointer  " onClick={handleClose} />
                                    }
                                    <span className="mx-auto text-xl font-semibold items-center bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
                                        {theme === "dark" ? (
                                            <Image src={"/Timekeeper x Logo/Light=logo+text-500x500.svg"} className="w-[150px] h-auto" width="0" height={0} alt="Logo" />
                                        ) : (
                                            <Image src={"/Timekeeper x Logo/Dark Logo + text-500x500.svg"} className="w-[150px] h-auto" width="0" height={0} alt="Logo" />
                                        )}
                                    </span>
                                    {/* </Link> */}

                                    {
                                        align &&
                                        <ChevronLeft size={20} className="cursor-pointer  md:-ml-0 " onClick={handleClose} />
                                    }
                                </div>
                            </>
                        )}
                    </div>
                    <ScrollArea className="no-scrollbar flex flex-col justify-start items-center gap-4 px-2  overflow-y-auto h-full w-full ">
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Link onClick={handleClose}
                                        href="/dashboard/home"

                                        className={`flex items-center h-9  py-2 text-muted-foreground gap-2 
                                        ${!open ? `${pathname !== "/dashboard/home" ?
                                                "hover:text-primary-foreground hover:rounded-full hover:bg-theme hover:h-9 hover:w-9 justify-center" :
                                                "text-primary-foreground rounded-full bg-theme h-9 w-9 justify-center"}` :
                                                `${pathname !== "/dashboard/home" ? 'hover:text-theme hover:bg-muted w-full rounded-lg justify-start px-3' :
                                                    'bg-theme w-full rounded-lg text-primary-foreground   justify-start px-3'}`}`}
                                    >
                                        <Home data-tour="dashboard" className={`h-[18px] w-[18px] ${!open ? "transition-all hover:scale-110" : ""}`} />
                                        <span className={`${!open ? 'sr-only' : `mx-1 text-[16px] font-medium ${align ? "flex  justify-start" : "flex  justify-end"}`}`}>Dashboard</span>
                                    </Link>
                                </TooltipTrigger>
                                <TooltipContent side="right" className={`${open ? 'sr-only' : ' bg-theme'}`}>Dashboard</TooltipContent>
                            </Tooltip>
                        </TooltipProvider>

                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Link onClick={handleClose}

                                        href="/dashboard/table"
                                        className={`flex items-center h-9  py-2 text-muted-foreground gap-2 ${!open ? `${pathname !== "/dashboard/table" ? "hover:text-primary-foreground hover:rounded-full hover:bg-theme hover:h-9 hover:w-9 justify-center" : "text-primary-foreground rounded-full bg-theme h-9 w-9  justify-center"}` : `${pathname !== "/dashboard/table" ? 'hover:text-theme hover:bg-muted w-full rounded-lg justify-start px-3' : 'bg-theme w-full rounded-lg text-primary-foreground   justify-start px-3'}`}`}
                                    >
                                        <Table2 data-tour="emp" className={`h-[18px] w-[18px] ${!open ? "transition-all hover:scale-110" : ""}`} />
                                        <span className={`${!open ? 'sr-only' : 'mx-1 text-[16px] font-medium'}`}>Table</span>
                                    </Link>
                                </TooltipTrigger>
                                <TooltipContent side="right" className={`${open ? 'sr-only' : ' bg-theme'}`}>Table</TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    </ScrollArea>
                </nav>

                <nav className=" mb-1 mt-auto flex flex-col items-center gap-4 px-2 ">
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Link onClick={handleClose}

                                    href="/dashboard/settings"
                                    className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-theme md:h-8 md:w-8"
                                >
                                    <div className="flex justify-start items-center gap-2">

                                    <span className={`${!open ? 'hidden' : ' mx-1 text-[16px] font-medium'} mr-auto dark:text-gray-400`}>Settings</span>
                                    <Settings  className="h-[18px] w-[18px]" />
                                    </div>
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent side="right" className=" bg-theme text-white">Settings</TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </nav>
            </aside>
            <div className={`transition-colors duration-300 ease-in-out ${open ? 'bg-gray-600 dark:bg-gray-800' : ''}`}>
                {/* Main content area */}
            </div>
        </div >
    );
}

export default Sidebar
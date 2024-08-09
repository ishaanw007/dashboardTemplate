"use client"
import Link from "next/link"
import { ArrowDown, ChevronDown, ChevronRight, CircleUser, Menu, Package2, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useEffect, useState } from "react"
import { useTour } from "@reactour/tour"
import GeneralSettings from "./GeneralSettings/GeneralSettings"
import { useSidebarStore } from "@/store/sidebar"
import { useSidebarPositionStore } from "@/store/sidebarposition"

export function Settings() {
    const { isOpen, currentStep } = useTour()
    const [active, setActive] = useState("general")
    const [showHolidayDropDown, setShowHolidayDropDown] = useState(false)
    const [showLeavesDropDown, setShowLeavesDropDown] = useState(false)
    const { open } = useSidebarStore()
    console.log(currentStep)
    useEffect(() => {
        if (isOpen) {
            switch (currentStep) {
                case 26:
                    setActive("general")
                    break;
            }
        }
    }, [isOpen, currentStep])
    const { align } = useSidebarPositionStore()
    return (
        <div className={`flex w-full flex-col  `}>
            <main className={`"flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4  p-4 md:gap-8 md:py-10 
                ${open && align && "  md:ml-[215px] md:mr-3"} ${open && !align && " md:ml-6  md:mr-[215px]"}
                 ${!open && align && "   md:ml-20 md:mr-5 "} ${!open && !align && "  md:ml-4  md:mr-20 "}   `}>
                <div className="mx-auto grid w-full max-w-6xl gap-2 ">
                    <h1 className="text-3xl font-semibold text-tertiary">Settings</h1>
                </div>
                <div className="mx-auto mt-4 grid w-full max-w-6xl items-start gap-6 lg:gap-0 mb-8 md:mb-0  lg:grid-cols-[250px_1fr] cursor-pointer">
                    <nav
                        className="grid gap-4 text-sm text-muted-foreground" x-chunk="dashboard-04-chunk-0"
                    >
                        <p className={`${active === "general" ? "font-semibold text-tertiary" : ""}`} onClick={() => (setActive("general"))} data-tour="settings-general" >
                            General
                        </p>
                         
                    </nav>
                    {active === "general" ? <GeneralSettings /> : ""}
                </div>
            </main>
        </div>
    )
}

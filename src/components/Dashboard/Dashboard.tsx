"use client"
import NumberTicker from "../ui/number-ticker"
import { ScrollArea } from "../ui/scroll-area"
import { Button } from "../ui/button"
import React, { useEffect, useState } from "react"
import _ from "lodash"
import BirthDayContentSkeleton from "../LoadingSkeletons/BirthDayContentSkeleton"
import { Skeleton } from "../ui/skeleton"
import WorkAnniverSaryContentSkeleton from "../LoadingSkeletons/WorkAnniverSaryContentSkeleton"
import AnnouncementLoadingSkeletons from "../LoadingSkeletons/AnnouncementLoadingSkeletons"
import UpcomingHolidaysContentSkeleton from "../LoadingSkeletons/UpcomingHolidaysContentSkeleton"
import { useSidebarStore } from "@/store/sidebar"
import { useTour } from "@reactour/tour"
import { useTourStepStore } from "@/store/toursteps"
import { useSidebarPositionStore } from "@/store/sidebarposition"
import { useTheme } from "next-themes"
import { useColorTheme } from "@/providers/ColorThemeProvider"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"
import { Avatar, AvatarImage } from "../ui/avatar"

function Dashboard() {
    const { currentColor } = useColorTheme()
    const { open, setOpen } = useSidebarStore()

    const { setIsOpen } = useTour();
    const { setStep } = useTourStepStore();

  
   
    const { align } = useSidebarPositionStore()
    return (
        <div className={`grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  grid-rows-2 px-3  sm:px-10 ${align && !open && "md:pl-24"} mb-16 `}>
            <Card className={`row-span-2 col-span-1 sm:col-span-2   text-primary-foreground shadow-lg flex flex-col justify-start gap-2 
                ${currentColor === "zinc" ? " bg-primary dark:bg-gray-800" : " bg-theme/20"} `}>
                <CardHeader className="pb-3">
                    <CardTitle className={`${currentColor === "zinc" ? " text-gray-100 " : " text-gray-800 dark:text-theme-foreground"}`}>Card Title</CardTitle>
                    <CardDescription >Card Description</CardDescription>

                </CardHeader>
                <ScrollArea className=" max-h-[350px] w-full overflow-y-auto ">
                        <div className=" flex flex-col gap-2 mx-6 ">
                            <BirthDayContentSkeleton />
                            <BirthDayContentSkeleton />
                            <BirthDayContentSkeleton />
                        </div>
                    
                </ScrollArea>
                {/* <CardFooter className=" mt-auto">
                    {
                        isLoading ?
                            <Skeleton className=" w-full h-[35px] dark:bg-gray-200 bg-gray-800"></Skeleton>
                            : <Button variant={"ghost2"} className=" w-full ">Send Wishes to all</Button>
                    }
                </CardFooter> */}
            </Card>
            <Card className="row-span-1 bg-accent dark:bg-gray-900  text-accent-foreground shadow-lg">

                <CardHeader className="pb-4">
                    <CardTitle className=" text-tertiary">Card Title</CardTitle>
                    <CardDescription>Card Description</CardDescription>
                </CardHeader>
                <CardContent>
                    <Skeleton className=" w-[55px] h-[35px] bg-gray-200 dark:bg-gray-800"></Skeleton>                       
                </CardContent>
            </Card>

            {/* Employee Present today */}
            <Card className="row-span-1 bg-secondary dark:bg-gray-900  text-secondary-foreground shadow-lg">
                <CardHeader className="pb-4">
                    <CardTitle className="text-tertiary">Card Title</CardTitle>
                    <CardDescription>Card Description</CardDescription>
                </CardHeader>
                <CardContent>
                    <Skeleton className=" w-[55px] h-[35px] bg-gray-200 dark:bg-gray-800"></Skeleton>                      
                </CardContent>
            </Card>


            {/* Work Anniversary */}
            <Card className="row-span-2 col-span-1 sm:col-span-2 bg-muted dark:bg-gray-900  text-muted-foreground shadow-lg flex flex-col  gap-2">

                <CardHeader className="pb-4">
                    <CardTitle className=" text-tertiary">Card Title</CardTitle>
                    <CardDescription>Card Description</CardDescription>
                </CardHeader>
                <div className=" flex flex-col gap-2">
                    <WorkAnniverSaryContentSkeleton />
                    <WorkAnniverSaryContentSkeleton />
                    <WorkAnniverSaryContentSkeleton />
                </div>
            </Card>


            {/* Employee Absent today */}
            <Card className="row-span-1 bg-error text-error-foreground shadow-lg">
                <CardHeader className="pb-4">
                    <CardTitle className="text-tertiary">Card Title</CardTitle>
                    <CardDescription>Card Description</CardDescription>
                </CardHeader>
                <CardContent>
                    <Skeleton className=" w-[55px] h-[35px] bg-gray-200 dark:bg-gray-800"></Skeleton>                    
                </CardContent>
            </Card>

            {/* Announcement */}
            <Card className="row-span-2 bg-background shadow-lg">
                <CardHeader className=" pb-3">
                    <CardTitle className="text-tertiary">Card Title</CardTitle>
                    <CardDescription>Card Description</CardDescription>
                </CardHeader>
                <CardContent>
                    <ScrollArea className=" h-[370px] overflow-y-auto">
                        <div className="mt-4">
                            <AnnouncementLoadingSkeletons />
                            <br />
                            <AnnouncementLoadingSkeletons />
                            <br />
                            <AnnouncementLoadingSkeletons />
                        </div>
                    </ScrollArea>
                </CardContent>
            </Card>

            {/* New Hires */}
            <Card className="row-span-1 bg-warning text-warning-foreground shadow-lg">
                <CardHeader className="pb-4">
                    <CardTitle className="text-tertiary">Card Title</CardTitle>
                    <CardDescription>Card Description</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="text-4xl">
                        {/* <Skeleton className=" w-[55px] h-[35px] bg-gray-200 dark:bg-gray-800"></Skeleton>   */}
                        <UpcomingHolidaysContentSkeleton />
                        <UpcomingHolidaysContentSkeleton />
                        <UpcomingHolidaysContentSkeleton />     
                    </div>
                </CardContent>
            </Card>

            {/* Upcoming Holidays */}
            <Card className="row-span-1 col-span-1 sm:col-span-2 lg:col-span-1 xl:col-span-2 bg-info text-info-foreground shadow-lg pb-6">
                <CardHeader className="pb-3">
                    <CardTitle className="text-tertiary">Card Title</CardTitle>
                    <CardDescription>Card Description</CardDescription>
                </CardHeader>
                <ScrollArea className=" overflow-y-auto">
                    <CardContent className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-2">
                        <>
                            <UpcomingHolidaysContentSkeleton />
                            <UpcomingHolidaysContentSkeleton />
                            <UpcomingHolidaysContentSkeleton />
                            <UpcomingHolidaysContentSkeleton />
                            <UpcomingHolidaysContentSkeleton />
                            <UpcomingHolidaysContentSkeleton />
                        </>
                    </CardContent>
                </ScrollArea>
            </Card>
            {/* Pending Request */}
            <Card className="    col-span-1 sm:col-span-2 lg:col-span-1 xl:col-span-2 bg-success text-success-foreground shadow-lg">
                {/* <DashBoardPendingRequest /> */}
                <CardHeader className="pb-3">
                    <CardTitle className="text-tertiary">Card Title</CardTitle>
                    <CardDescription>Card Description</CardDescription>
                </CardHeader>
                <ScrollArea className=" overflow-y-auto">
                    <CardContent className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-2">
                        <>
                            <UpcomingHolidaysContentSkeleton />
                            <UpcomingHolidaysContentSkeleton />
                            <UpcomingHolidaysContentSkeleton />
                            <UpcomingHolidaysContentSkeleton />
                            <UpcomingHolidaysContentSkeleton />
                            <UpcomingHolidaysContentSkeleton />
                        </>
                    </CardContent>
                </ScrollArea>
            </Card>

            <Card className=" pb-8 row-span-1 col-span-1 sm:col-span-2  bg-info text-info-foreground shadow-lg  ">
                {/* <AttendenceChart /> */}
                <CardHeader className="pb-3">
                    <CardTitle className="text-tertiary">Card Title</CardTitle>
                    <CardDescription>Card Description</CardDescription>
                </CardHeader>
                <ScrollArea className=" overflow-y-auto">
                    <CardContent className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-2">
                        <>
                            <UpcomingHolidaysContentSkeleton />
                            <UpcomingHolidaysContentSkeleton />
                            <UpcomingHolidaysContentSkeleton />
                            <UpcomingHolidaysContentSkeleton />
                            <UpcomingHolidaysContentSkeleton />
                            <UpcomingHolidaysContentSkeleton />
                        </>
                    </CardContent>
                </ScrollArea>
            </Card>
        </div>
    )
}

export default Dashboard

function BellIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
            <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
        </svg>
    )
}


function CalendarIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M8 2v4" />
            <path d="M16 2v4" />
            <rect width="18" height="18" x="3" y="4" rx="2" />
            <path d="M3 10h18" />
        </svg>
    )
}


function GiftIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <rect x="3" y="8" width="18" height="4" rx="1" />
            <path d="M12 8v13" />
            <path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7" />
            <path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5" />
        </svg>
    )
}
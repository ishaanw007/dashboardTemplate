"use client"
import { Card, CardDescription, CardTitle } from '@/components/ui/card';
import { useSidebarPositionStore } from '@/store/sidebarposition';
import { ArrowLeftFromLine, ArrowRightFromLine, ChevronDownIcon, ChevronUpIcon, MousePointerClick, PanelRight } from 'lucide-react';
import React, { useState } from 'react'

const AlignSidebar = () => {
    const [showOptions, setShowOptions] = useState(false);
    const { align, setAlign } = useSidebarPositionStore()
    return (
        <div className="grid grid-cols-1 gap-4">
            <Card className="p-[28px] dark:bg-gray-900 hover:shadow-lg transition-shadow cursor-pointer">
                <div className="flex items-center justify-between w-full transition-all duration-500 ease-in-out">
                    <div className='flex  flex-col min-[500px]:flex-row items-start gap-2'>
                        <span onClick={() => setShowOptions(!showOptions)}
                            className="text-2xl   mr-3 flex justify-center items-center p-3 bg-tertiary text-tertiary-foreground bg-theme
                             text-theme-foreground  text-gray-50   rounded-full">
                            <PanelRight className='h-6 w-6 ' />
                        </span>
                        <div className='flex flex-col items-start'>
                            <CardTitle onClick={() => setShowOptions(!showOptions)} className="font-medium text-base list-none">Sidebar Position</CardTitle>
                            <CardDescription onClick={() => setShowOptions(!showOptions)} className="list-none">Choose your preferred sidebar position to customize the layout of the HRMS interface. </CardDescription>
                        </div>
                    </div>
                    <span>
                        {
                            showOptions ? <ChevronUpIcon onClick={() => setShowOptions(!showOptions)} className='h-4 w-4' /> :
                                <ChevronDownIcon onClick={() => setShowOptions(!showOptions)} className='h-4 w-4' />
                        }
                    </span>
                </div>

                {showOptions &&
                    <div className="flex flex-wrap gap-5 shadow-sm rounded-full mt-8">

                        <Card
                            className={` text-sm font-medium flex gap-2 items-center py-1.5 px-3 rounded-full dark:bg-gray-950 cursor-pointer
                                 ${align && "border dark:border-gray-200 border-gray-900"}`}
                            onClick={() => setAlign(true)}
                        >
                            <span className={`w-6 h-6  rounded-full `} ><ArrowLeftFromLine className=' h-5 w-5' /></span>
                            Align Left
                        </Card>
                        <Card
                            className={` text-sm font-medium flex gap-2 items-center py-1.5 px-3 rounded-full dark:bg-gray-950 cursor-pointer ${!align && "border dark:border-gray-200 border-gray-900"}`}
                            onClick={() => setAlign(false)}
                        >
                            <span className={`w-6 h-6  rounded-full `} ><ArrowRightFromLine className=' h-5 w-5' /></span>
                            Align Right
                        </Card>
                    </div>
                }
            </Card>
        </div>
    )
}
// ${currentColor === "zinc" || currentColor === "white" ? 'border border-gray-900 dark:border-gray-100' : ''} 
export default AlignSidebar
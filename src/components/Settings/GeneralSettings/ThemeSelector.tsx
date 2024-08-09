"use client"
import React, { useState } from 'react'
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { ChevronDownIcon, ChevronUpIcon, MousePointerClick } from 'lucide-react';
import { colors, useColorTheme } from '@/providers/ColorThemeProvider';
import { useTheme } from 'next-themes';

const ThemeSelector = () => {
    const [showTheme, setShowTheme] = useState(false);
    const { currentColor, setColor } = useColorTheme();
    const { theme } = useTheme()
    return (
        <div className="grid grid-cols-1 gap-4">
            <Card className="p-[28px] dark:bg-gray-900 hover:shadow-lg transition-shadow cursor-pointer">
                <div className="flex items-center justify-between w-full transition-all duration-500 ease-in-out">
                    <div className='flex flex-col min-[500px]:flex-row gap-2 items-start'>
                        <span onClick={() => setShowTheme(!showTheme)} className="text-2xl w-fit mr-3 flex justify-center items-center p-3 bg-tertiary text-tertiary-foreground bg-theme text-theme-foreground text-gray-50   rounded-full">
                            <MousePointerClick className='h-6 w-6 ' />
                        </span>
                        <div className='flex flex-col items-start'>
                            <CardTitle onClick={() => setShowTheme(!showTheme)} className="font-medium text-base list-none">Choose Theme</CardTitle>
                            <CardDescription onClick={() => setShowTheme(!showTheme)} className="list-none">Select your preferred theme to customize the appearance of the website. </CardDescription>
                        </div>
                    </div>
                    <span>
                        {
                            showTheme ? <ChevronUpIcon onClick={() => setShowTheme(!showTheme)} className='h-4 w-4' /> :
                                <ChevronDownIcon onClick={() => setShowTheme(!showTheme)} className='h-4 w-4' />
                        }
                    </span>
                </div>

                {showTheme &&
                    <div className="flex flex-wrap gap-3 shadow-sm rounded-full mt-8">
                        {colors.map((color: any, index: number) => (
                            <Card
                                className={` text-sm font-medium flex gap-2 items-center py-1.5 px-3 rounded-full dark:bg-gray-950 cursor-pointer ${currentColor === color.value ? 'border border-gray-900 dark:border-gray-100' : ''}`}
                                key={index}
                                onClick={() => setColor(color.value)}
                            >
                                <span
                                    className={`w-6 h-6 border rounded-full ${color.value === "zinc" && "bg-zinc-900"}`}
                                    style={{
                                        backgroundColor: color.value
                                    }}
                                ></span>
                                {color.name}
                            </Card>
                        ))}
                        {/* <Card
                            className={`font-medium flex gap-2 items-center py-1.5 px-3 rounded-full dark:bg-gray-950 cursor-pointer
                                 ${currentColor === "zinc" || currentColor === "white" ? 'border border-gray-900 dark:border-gray-100' : ''} 
                                 `}
                            onClick={() => theme === "dark" ? setColor("white") : setColor("zinc")}

                        >
                            <span
                                className={`w-6 h-6 border rounded-full `}
                                style={{
                                    backgroundColor: theme === "dark" ? "white" : "black"
                                }}
                            ></span>
                            Default
                        </Card> */}
                    </div>
                }
            </Card>
        </div>
    )
}

export default ThemeSelector;
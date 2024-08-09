"use client"
import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import Image from 'next/image';
import ThemeSelector from './ThemeSelector';
import AlignSidebar from './AlignSidebar';


function GeneralSettings() {
    return (
        <div className=" flex flex-col gap-8 ">
            {/* Header section */}
            <div className="flex items-center justify-between mb-6 p-3 rounded-lg shadow">
                <div className="flex items-start gap-4">
                    <Image src="/Timekeeper x Logo/Dark-1000x1000.png" alt="Company Banner" width={100} height={100} className="w-24 rounded-lg h-24 object-fill" />
                    <div className=' flex flex-col gap-2'>
                        <h1 className="text-2xl font-bold text-tertiary">TimekeeperX : An AI Driven HRM&apos;s</h1>
                        <p className="text-sm font-medium text-gray-500">Company Code : 4dvtw6622jh</p>
                        <p className="text-sm font-medium text-gray-500">Location : Ambience  Mall, Gurgaon</p>
                    </div>
                </div>

            </div>



            {/* Settings section */}
            <div>
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-2xl font-bold text-tertiary ">General Settings</h2>
                    {/* <a href="#" className="text-blue-500 hover:underline">View all</a> */}
                </div>
                <p className="mb-6 text-gray-600">
                    Configure services and frame your organization&apos;s policies, enabling seamless administration and effective employee management
                </p>

                <div className=' flex flex-col gap-5 '>
                    {/* Theme Selector */}
                    <ThemeSelector />
                    {/*Align Sidebar */}
                    <div className=' hidden md:block '>
                        <AlignSidebar />
                    </div>
                </div>


            </div>
        </div>
    );
}
export default GeneralSettings
{/*
 const settingsOptions = [
     { icon: "👥", title: "Manage Accounts" },
     { icon: "🏆", title: "Performance" },
     { icon: "🕒", title: "Shifts" },
     { icon: "⏱️", title: "Time Tracker" },
     { icon: "🏖️", title: "Leave Tracker" },
 ];
 const filteredOptions = settingsOptions.filter(option =>
     option.title.toLowerCase().includes(searchTerm.toLowerCase())
 );
 const [searchTerm, setSearchTerm] = useState("");
Search input 
            <div className="mb-6">
                <Input
                    type="search"
                    placeholder="Search Settings"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full"
                />
            </div>  <div className="grid grid-cols-1  gap-4">
                    {filteredOptions.map((option, index) => (
                        <Card key={index} className="p-4 hover:shadow-lg transition-shadow cursor-pointer">
                            <div className="flex items-center">
                                <span className="text-2xl mr-3">{option.icon}</span>
                                <span className="font-medium">{option.title}</span>
                            </div>
                        </Card>
                    ))}
                </div>
                
                
             <div className="flex items-center">
                    <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold mr-2">
                        A
                    </div>
                    <div>
                        <p className="font-semibold">1- Ashmin Sharma</p>
                        <p className="text-sm text-gray-500">CEO</p>
                        <p className="text-sm text-gray-500">Role : Super Administrator</p>
                    </div>
                </div> */}
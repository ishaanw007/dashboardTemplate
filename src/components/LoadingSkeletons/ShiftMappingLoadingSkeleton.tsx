import React from 'react'
import { Skeleton } from '../ui/skeleton'
import { useSidebarStore } from '@/store/sidebar'

const ShiftMappingLoadingSkeleton = () => {
    const { open } = useSidebarStore()
    return (
        <div className={`px-4 flex flex-col py-6 `}>
            <div className='flex flex-col lg:flex-row w-full border-2 rounded-md'>
                <aside className="w-full lg:w-[350px] h-full  p-4 shadow-sm lg:dark:bg-gray-50 lg:bg-gray-950 rounded-b-md lg:rounded-l-md">
                    <Skeleton className="h-10 w-[70%] mb-4  bg-gray-800 dark:bg-gray-200 hidden lg:flex" />
                    <Skeleton className="px-2 py-2 w-full h-10 lg:py-1 bg-gray-200 dark:bg-gray-800 lg:bg-gray-800 lg:dark:bg-gray-200 rounded " />
                    <ul className='hidden lg:flex flex-col gap-4 mt-4 h-[72.5vh] overflow-y-auto overflow-x-hidden no-scrollbar'>
                        {Array.from({ length: 8 }).map((_, index) => (
                            <div key={index} className="flex gap-1 items-center justify-start  h-8 w-[95%]  rounded-md bg-gray-800 dark:bg-gray-200">
                            </div>
                        ))}
                    </ul>

                </aside>

                <main className="p-4 flex-1 min-h-[70vh] lg:min-h-auto lg:mt-0 ">
                    <div className="calendar-container">
                        <div className=' flex justify-between items-center mb-4 gap-2'>
                            <div className=' w-24 sm:w-32 h-10  rounded-md dark:bg-gray-800 bg-gray-200'></div>
                            <div className=' w-24 sm:w-32 h-10  rounded-md dark:bg-gray-800 bg-gray-200'></div>
                            <div className=' w-24 sm:w-32 h-10  rounded-md dark:bg-gray-800 bg-gray-200'></div>
                        </div>
                        <Skeleton className="h-[80vh] w-full dark:bg-gray-800 bg-gray-200 rounded-md" />
                    </div>
                </main>
            </div>
        </div>
    )
}

export default ShiftMappingLoadingSkeleton
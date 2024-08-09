import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'

const AnnouncementLoadingSkeletons = () => {
    return (
        <div className=' flex gap-3 '>
            <Skeleton className=" w-[38px] h-[38px] rounded-full bg-gray-200 dark:bg-gray-800"></Skeleton>

            <div className=" flex flex-col justify-start items-start mr-auto space-y-2">
                <Skeleton className=" w-[220px] h-[22px] rounded-lg bg-gray-200 dark:bg-gray-800"></Skeleton>
                <div className=' flex w-full flex-col gap-1'>

                    <Skeleton className=" w-[89%] h-[12px] rounded-md bg-gray-200 dark:bg-gray-800"></Skeleton>
                    <Skeleton className=" w-[96%] h-[12px] rounded-md bg-gray-200 dark:bg-gray-800"></Skeleton>
                    <Skeleton className=" w-[98%] h-[12px] rounded-md bg-gray-200 dark:bg-gray-800"></Skeleton>
                    <Skeleton className=" w-[87%] h-[12px] rounded-md bg-gray-200 dark:bg-gray-800"></Skeleton>
                    <Skeleton className=" w-[97%] h-[12px] rounded-md bg-gray-200 dark:bg-gray-800"></Skeleton>
                    <Skeleton className=" w-[65%] h-[12px] rounded-md bg-gray-200 dark:bg-gray-800"></Skeleton>
                </div>


            </div>
        </div>
    )
}

export default AnnouncementLoadingSkeletons
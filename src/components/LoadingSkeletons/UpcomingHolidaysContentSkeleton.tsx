import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'

const UpcomingHolidaysContentSkeleton = () => {
    return (
        <div className="flex items-center gap-4 mt-4">
            <Skeleton className=" w-[38px] h-[38px] rounded-full bg-gray-200 dark:bg-gray-800"></Skeleton>

            <div className=" flex flex-col justify-start items-start mr-auto space-y-2">
                <Skeleton className=" w-[220px] h-[20px] rounded-md bg-gray-200 dark:bg-gray-800"></Skeleton>
                <Skeleton className=" w-[140px] h-[15px] rounded-md bg-gray-200 dark:bg-gray-800"></Skeleton>
            </div>
        </div>
    )
}

export default UpcomingHolidaysContentSkeleton
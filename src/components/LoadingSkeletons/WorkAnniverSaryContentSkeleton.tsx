import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'

const WorkAnniverSaryContentSkeleton = () => {
    return (
        <div className="flex  items-center justify-betwen text-center  w-full  gap-2  p-2 px-6">
            <div className=" flex justify-center items-center gap-3">
                <Skeleton className=" w-[38px] h-[38px] rounded-full bg-gray-200 dark:bg-gray-800"></Skeleton>
                <div className=" flex flex-col justify-start items-start mr-auto space-y-2">
                    <Skeleton className=" w-[200px] h-[20px] rounded-md bg-gray-200 dark:bg-gray-800"></Skeleton>
                    <Skeleton className=" w-[140px] h-[15px] rounded-md bg-gray-200 dark:bg-gray-800"></Skeleton>


                </div>
            </div>
            <Skeleton className=" ml-auto w-[110px] h-[35px] rounded-md bg-gray-200 dark:bg-gray-800"></Skeleton>


        </div>
    )
}

export default WorkAnniverSaryContentSkeleton
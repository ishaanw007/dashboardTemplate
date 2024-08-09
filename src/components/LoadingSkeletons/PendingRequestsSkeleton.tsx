import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'

const PendingRequestsSkeleton = () => {
  return (
    <div className="flex  items-center text-center  w-full  gap-3 mt-4  ">
      <Skeleton className=" w-[40px] h-[40px] rounded-full bg-gray-200 dark:bg-gray-800"></Skeleton>
      <div className=" flex  w-full flex-col justify-start items-start mr-auto space-y-1">
        <Skeleton className=" w-[97%] h-[12px] rounded-md bg-gray-200 dark:bg-gray-800"></Skeleton>
        <Skeleton className=" w-[56%] h-[12px] rounded-md bg-gray-200 dark:bg-gray-800"></Skeleton>
      </div>
      <div className=' flex gap-3 items-center justify-center'>
        <Skeleton className=" w-[27px] h-[27px] rounded-full bg-gray-200 dark:bg-gray-800"></Skeleton>
        <Skeleton className=" w-[27px] h-[27px] rounded-full bg-gray-200 dark:bg-gray-800"></Skeleton>
      </div>
    </div>
  )
}

export default PendingRequestsSkeleton
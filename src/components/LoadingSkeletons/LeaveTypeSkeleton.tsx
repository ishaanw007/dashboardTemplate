import React from 'react';
import { Card, CardDescription, CardTitle } from '../ui/card';
import { Skeleton } from '../ui/skeleton';

const LeaveTypesSkeleton = () => {
    return (
        <div className=' w-full'>
            <div className=' flex w-full justify-between items-center mb-8'>
                <div className='flex flex-col gap-2'>
                    <CardTitle className=' text-tertiary'>Leave Type</CardTitle>
                    <CardDescription>View complete detail about all leave types</CardDescription>
                </div>
                <div className=' flex gap-2'>
                    <Skeleton className=" hidden sm:flex w-28 h-10" />
                    <Skeleton className="w-28 h-10" />
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-2 xl:grid-cols-3 gap-8 w-full">
                {Array.from({ length: 6 }).map((_, index) => (
                    <Card key={index} className="col-span-1  w-full p-5 flex flex-col gap-4 shadow-xs rounded-xl dark:bg-gray-900">
                        <div className="flex items-center justify-center w-full">
                            <Skeleton className="w-10 h-10 rounded-full" />
                        </div>

                        <div className="space-y-1.5 flex flex-col justify-center items-center">
                            <div className="flex items-center gap-4 mb-2">
                                <Skeleton className="w-6 h-6" />
                                <Skeleton className="w-6 h-6" />
                                <Skeleton className="w-6 h-6" />
                            </div>
                            <Skeleton className="w-36 h-8" />
                        </div>
                        <div className="grid gap-2 text-sm">
                            <div className="flex items-center justify-between gap-4">
                                <Skeleton className="w-16 h-5" />
                                <Skeleton className="w-24 h-5" />
                            </div>
                            <div className="flex items-center justify-between gap-4">
                                <Skeleton className="w-20 h-5" />
                                <Skeleton className="w-16 h-5" />
                            </div>
                            <div className="flex items-center justify-between gap-4">
                                <Skeleton className="w-20 h-5" />
                                <Skeleton className="w-24 h-5" />
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default LeaveTypesSkeleton;
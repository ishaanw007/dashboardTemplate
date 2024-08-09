import { useState } from 'react';

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import useShiftStore from '@/store/shift';
import { useToast } from '../ui/use-toast';

export function Delete({ shift }: any) {
    const { deleteShift } = useShiftStore(); // Destructure the deleteZustandDesignation action
    const { toast } = useToast()
    async function deleteShifts(): Promise<void> {
        try {

            const response = await deleteShift(shift?.shift?._id);
            if (response?.status) {
                toast({
                    title: "Success",
                    description: "Shift deleted successfully.",
                });
            } else {
                toast({
                    variant: "destructive",
                    title: "Something went wrong"
                });
            }

            console.log(response)

        } catch (error) {
            console.log(error)
            toast({
                variant: "destructive",
                title: "Something went wrong"
            });
            // Handle error
        }
    }
    return (
        <AlertDialog>
            <AlertDialogTrigger>
                <p className="text-[14px] px-2">
                    Delete Shift
                </p>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Are you sure you want to delete this Shift?</AlertDialogTitle>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={deleteShifts}>Continue</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}

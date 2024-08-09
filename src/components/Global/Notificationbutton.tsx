import React from 'react'
import { Button } from "@/components/ui/button"
import { IoIosNotifications } from "react-icons/io";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { useColorTheme } from '@/providers/ColorThemeProvider';

function Notificationbutton() {
  const { currentColor } = useColorTheme()
  return (
    // <Button variant="destructive" size="icon" >
    // <Button variant="destructive" size="icon" className='border-gray-100 ' >
    // </Button>
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <button className={` ${currentColor === "zinc" ? "   " : "text-theme-foreground "}`}>
            <IoIosNotifications data-tour="notification" className="h-6 w-6" />
          </button>
        </TooltipTrigger>
        <TooltipContent className={`bg-tertiary  text-theme-foreground mt-3 ${currentColor === "zinc" ? " bg-white  text-black" : "text-tertiary-foreground bg-theme "}`}>
          <p>Notifications</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>

  )
}

export default Notificationbutton
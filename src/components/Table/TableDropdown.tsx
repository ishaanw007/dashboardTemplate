'use client'
import React, { useState } from 'react'
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  CaretSortIcon,
  ChevronDownIcon,
  DotsHorizontalIcon,
} from "@radix-ui/react-icons";
import { Button } from '../ui/button';
import { Delete } from './Delete';
import { EditShift } from './Edit';

function TableDropdown(shift: any) {
  const [open, setOpen] = useState(false);


  return (

    <div>
      <DropdownMenu>
        <DropdownMenuTrigger >
          <Button variant="ghost" className="h-8 w-8 p-0" data-tour="edit-shift">
            <span className="sr-only">Open menu</span>
            <DotsHorizontalIcon className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Actions</DropdownMenuLabel>
          <div>
            <Delete shift={shift}></Delete>
          </div>



        </DropdownMenuContent>
      </DropdownMenu>

      {/* {open?<EditEmployee employeeId={employee._id} existingEmployeeData={employee} open={open}></EditEmployee>:null} */}

    </div>
  )
}

export default TableDropdown


'use client'
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { logout } from '../../themeapi/auth';
// import { redirect } from "next/navigation";
import { useRouter } from 'next/navigation';
import Link from "next/link";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { UserRound } from "lucide-react";
import { useColorTheme } from "@/providers/ColorThemeProvider";


export function Navbaroptions() {

  const router = useRouter();

  async function handlelogout(event: Event) {
    console.log("Function not implemented")

    const response = await logout();
    if (response) {
      router.push('/')
    }
    // console.log(cookies)
    //  removeCookie(cookies);
    // removeCookie('connect.sid',{path:'/'});
    // const cookieStore = cookies();
    // const authToken = cookieStore.get('connect.sid')?.value;

    // if (authToken) {
    // Delete the authentication cookie
    // cookieStore.delete('connect.sid');
    // router.push("/");

    // Redirect the user to the homepage or any other desired page
    // }
  }

  const { currentColor } = useColorTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild data-tour="profile" >
        {/* <Button variant="destructive" > */}
        {/* <Button variant="destructive"  className=" " >
          Profile
        </Button> */}

        <button className={`flex gap-1.5 items-center rounded-md  font-medium  p-1 shadow-sm shadow-theme/70 px-3 py-1.5  pr-4
                ${currentColor === "zinc" ? " dark:bg-white bg-black text-white  dark:text-black  " : "bg-white text-theme "}`}>
          <UserRound className=" h-5 w-5" />  Profile
        </button>

      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 mt-4 dark:border-gray-700">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Link href="/dashboard/profile">Profile</Link>
            {/* <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut> */}
          </DropdownMenuItem>
          <Link href="/dashboard/settings">
            <DropdownMenuItem>
              Settings
              {/* <DropdownMenuShortcut>⌘S</DropdownMenuShortcut> */}
            </DropdownMenuItem>
          </Link>
          <Link href="/dashboard/useraccesscontrol
">
            <DropdownMenuItem>
              User Access Control


              {/* <DropdownMenuShortcut>⌘S</DropdownMenuShortcut> */}
            </DropdownMenuItem>
          </Link>


          {/* <DropdownMenuItem>
            Billing
            <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
          </DropdownMenuItem>
       
          <DropdownMenuItem>
            Keyboard shortcuts
            <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
          </DropdownMenuItem> */}
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          {/* <DropdownMenuItem>Team</DropdownMenuItem> */}
          {/* <DropdownMenuSub>
            <DropdownMenuSubTrigger>Invite users</DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem>Email</DropdownMenuItem>
                <DropdownMenuItem>Message</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>More...</DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub> */}
          {/* <DropdownMenuItem> */}
          {/* New Team */}
          {/* <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut> */}
          {/* </DropdownMenuItem> */}
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        {/* <DropdownMenuItem>GitHub</DropdownMenuItem> */}
        <Link href="/dashboard/support">
          <DropdownMenuItem>Support</DropdownMenuItem>
        </Link>
        {/* <DropdownMenuItem disabled>API</DropdownMenuItem> */}
        <DropdownMenuSeparator />
        <DropdownMenuItem onSelect={handlelogout}>
          Log out
          {/* <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut> */}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

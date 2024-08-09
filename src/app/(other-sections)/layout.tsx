import { Toaster } from "@/components/ui/toaster"
import "./globals.css"
// import { ThemeProvider } from "@/components/landingpage/theme-provider";
import NextTopLoader from 'nextjs-toploader';

export const metadata = {
  title: 'TimekeeperX - Best HRM Software',
  description: "Manage your employee's time",
  icons: {
    icon: ["/favicon-32x32.png"],

  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      <body className=" overflow-x-hidden ">
        {/* <ThemeProvider> */}

        <NextTopLoader height={5} speed={100} showSpinner={false} />

        {children}
        {/* </ThemeProvider> */}
      </body>
      <Toaster />
    </html>
  )
}

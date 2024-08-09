"use client"
import * as React from "react"
import type { ReactElement } from 'react'

// import { Label } from "@/components/ui/label"
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Forgot() {
  const handleForgot = () => {
    // Handle click logic here
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <Card className="mx-auto my-auto max-w-sm">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold">Forgot Password</CardTitle>
          <CardDescription>Enter your email to reset your password</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="space-y-2">
              <Input id="email" placeholder="Email" required type="email" />
            </div>
     
        
            <Button  className="w-full" type="submit"  onClick={handleForgot}>
              Submit
            </Button> 
          </div> 
          <CardDescription className="mt-2">
                Not have a account 
                  <Link href="/register" className="underline mx-2"> Register Here</Link>
            </CardDescription>
        </CardContent>
      </Card>
    </div>
  )
}

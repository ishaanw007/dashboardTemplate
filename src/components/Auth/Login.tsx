"use client";
import dynamic from 'next/dynamic';
import Image from "next/image"
import React, { useState, useEffect } from "react";
import type { ReactElement } from "react";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import LoadingPage from "@/components/Global/Loading";
// import { Label } from "@/components/ui/label"
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import Link from "next/link";
import { useToast } from "@/components/ui/use-toast";
import { login } from "../../themeapi/auth";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Fullscreen, LucideEye, LucideEyeOff } from 'lucide-react';
import { useTour } from '@reactour/tour';
import { useTourStepStore } from '@/store/toursteps';

const formSchema = z.object({
  email: z.string().min(2, {
    message: "Please enter a valid email.",
  }),
  password: z.string().min(2, {
    message: "Password must be of atleast 2 characters",
  }),
})
export default function Login() {

  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [loading, setLoading] = useState(false)
  const [tenant, setTenant] = useState("")
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: ""
    },
  })
  async function onSubmit(values: z.infer<typeof formSchema>) {

    try {
      const response = await login(values.email, values.password);
      if (response) {
        toast({
          description: "Login successful",
        });
        setFormData({
          email: "",
          password: "",
        });

        console.log("response", response)
        if (!response.user.onboardingStatus) {
          router.push('/dashboard/onboarding')
        }
        else {
          setLoading(true)

        }
        //
        setTenant(response.user.tenant)
        console.log("response", response)
      }
    } catch (error: any) {
      toast({
        description: error.message,
      });
      console.error(error);
    }
  }

  // useEffect(() => {
  //   if (loading) {
  //     console.log("loading");

  //   }
  // }, [loading]);
  const router = useRouter();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { toast } = useToast();

  // return (
  //   loading ? <LoadingPage title={tenant} /> :
  //     (<div className="flex justify-center items-center h-screen" suppressHydrationWarning={suppressHydrationWarning}>
  //       <Card className="mx-auto my-auto max-w-sm">
  //         <CardHeader className="space-y-1">
  //           <CardTitle className="text-2xl font-bold">Login</CardTitle>
  //           <CardDescription>
  //             Enter your email and password to login to your account
  //           </CardDescription>
  //         </CardHeader>
  //         <CardContent>
  //           <div className="space-y-4">
  //             <Form {...form}>
  //               <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
  //                 <FormField
  //                   control={form.control}
  //                   name="email"
  //                   render={({ field }) => (
  //                     <FormItem>
  //                       <FormLabel>Email</FormLabel>
  //                       <FormControl>
  //                         <Input placeholder="Email" {...field} />
  //                       </FormControl>
  //                       <FormMessage />
  //                     </FormItem>
  //                   )}
  //                 />
  //                 <FormField
  //                   control={form.control}
  //                   name="password"
  //                   render={({ field }) => (
  //                     <FormItem>
  //                       <FormLabel>Password</FormLabel>
  //                       <FormControl>
  //                         <Input placeholder="Password" {...field} type="password" />
  //                       </FormControl>
  //                       <FormMessage />
  //                     </FormItem>
  //                   )}
  //                 />
  //                 <Button type="submit">Submit</Button>
  //               </form>
  //             </Form>



  //           </div>
  //           <CardDescription className="mt-2">
  //             Not have a account
  //             <Link href="/register" className="underline mx-2">
  //               {" "}
  //               Register Here
  //             </Link>
  //           </CardDescription>
  //         </CardContent>
  //       </Card>
  //     </div>

  //     ) 
  //   )
  // }




  return (
    <div className=''>

      {

        loading ? (<LoadingPage title={tenant} />) : (


          <div className="flex items-center justify-center h-[calc(100vh)] overflow-hidden  ">

            <div className="w-full h-auto   lg:grid lg:grid-cols-2 gap-3">
              <div className="flex flex-col  justify-center items-center h-screen gap-5 p-4 lg:p-0">
                <Image src={"/Timekeeper x Logo/Dark-100x100.svg"} alt="Logo" height={70} width={70} className='mb-3' />
                <div className="mx-auto grid gap-6">
                  <h1 className="  text-[32px]  min-[453px]:text-4xl font-semibold text-center">Welcome  to   <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-cyan-500 ">
                    TimekeeperX  </span></h1>
                  <div className=' mx-auto grid gap-6 mt-4 w-full  sm:w-[400px]'>


                    <div className="grid gap-2   text-center">

                      <h1 className="text-2xl text-center font-bold">Login</h1>
                      <p className="text-balance text-center text-muted-foreground">
                        Enter your email below to login to your account.
                      </p>
                    </div>
                    <Form {...form}>
                      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email</FormLabel>
                              <FormControl>
                                <Input placeholder="m@example.com"
                                  {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="password"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Password</FormLabel>
                              <FormControl>
                                <div className="relative">
                                  <Input placeholder="Password" {...field} type={showPassword ? "text" : "password"} />
                                  <span className=" cursor-pointer absolute inset-y-0 right-1 top-0 grid place-content-center px-2">
                                    {showPassword ? (
                                      <span
                                        className=" text-gray-400 dark:text-gray-500"
                                        onClick={() => setShowPassword(false)}
                                      >
                                        <LucideEyeOff size={20} />
                                      </span>
                                    ) : (
                                      <span
                                        className=" text-gray-400 dark:text-gray-500"
                                        onClick={() => setShowPassword(true)}
                                      >
                                        <LucideEye size={20} />
                                      </span>
                                    )}
                                  </span>
                                </div>
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}


                        />
                        <Link
                          href="/forgot"
                          className="ml-auto inline-block text-sm underline"
                        >
                          Forgot your password?
                        </Link>
                        <Button type="submit" className='w-full bg-black/90 hover:bg-black text-white'>Login</Button>
                      </form>
                    </Form>

                  </div>



                  {/* <div className="grid gap-4">
                        <div className="grid gap-2">
                          <Label htmlFor="email">Email</Label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="m@example.com"
                            required
                          />
                        </div>
                        <div className="grid gap-2">
                          <div className="flex items-center">
                            <Label htmlFor="password">Password</Label>
                            <Link
                              href="/forgot-password"
                              className="ml-auto inline-block text-sm underline"
                            >
                              Forgot your password?
                            </Link>
                          </div>
                          <Input id="password" type="password" required />
                        </div>
                        <Button type="submit" className="w-full">
                          Login
                        </Button>
                        <Button variant="outline" className="w-full">
                          Login with Google
                        </Button> 
                      </div> */}
                  <div className=" text-center text-sm">
                    Don&apos;t have an account?{" "}
                    <Link href="/register" className="underline">
                      Sign up
                    </Link>
                  </div>
                </div>
              </div>
              <div className="hidden bg-slate-950 h-full	 lg:block rounded-r-xl ">
                <div className="h-full w-full object-cover flex justify-center items-center ">

                  <div className='relative'>
                    <video className='w-full h-[100vh] object-cover ' height="100%" loop autoPlay muted><source src='gen3.webm' type="video/webm" /></video>
                    <div className='absolute inset-0 bg-black opacity-60'></div>
                    <div className="absolute inset-0 flex flex-col items-center text-start   justify-center  text-white text center">
                      {/* <p className="text-6xl">TimekeeperX</p> */}

                      <p className=" text-[40px] min-[1200px]:text-5xl 2xl:text-6xl  font-thin mb-1 xl:mb-1	">Empowering your Workforce</p>
                      <p className=" text-[40px] min-[1200px]:text-5xl 2xl:text-6xl font-thin	 mb-4">Every Second Counts</p>
                      <p className="text-md text-center font-thin">Enhance Your HR Operations with Streamlined Efficiency <br></br>
                        Ridiculously easy to use. Anywhere, Anytime.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
    </div>
  )
}

const PlayerWithNoSSR = dynamic(
  () => import('@lottiefiles/react-lottie-player').then(module => module.Player),
  { ssr: false }
);

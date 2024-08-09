
"use client"
import Image from "next/image"
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { registerAdmin } from "../../themeapi/auth";
import { useToast } from "@/components/ui/use-toast"
import { useRouter } from 'next/navigation'
import dynamic from 'next/dynamic';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { LucideEye, LucideEyeOff, LucideScanEye } from "lucide-react";
import { motion } from "framer-motion"
// import logo from "../../public/Timekeeper x Logo/Dark-100x100.svg"
const formSchema = z.object({
  firstName: z.string().min(1, "First Name is required"),
  lastName: z.string().min(1, "Last Name is required"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  companyName: z.string().min(1, "Company Name is required")
});




export default function Register() {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const router = useRouter()
  const [showThankYou, setShowThankYou] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      companyName: ""
    },
  })

  const { toast } = useToast()

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("hello")

    try {
      console.log(values)
      const response = await registerAdmin(values);
      if (response) {
        toast({
          description: "Registered successfully",
        })

        form.reset()
        setShowThankYou(true);

        setTimeout(() => {
          router.push('/');
        }, 2000);

      } else {
        toast({
          variant: "destructive",
          description: "Something went wrong",
        })
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      {
        showThankYou ?
          <div className="h-[100vh] w-full flex items-center justify-center mt-auto overflow-hidden  flex-col gap-3">
            <PlayerWithNoSSR
              autoplay
              loop
              src={'/success.json'}
              className=' w-[200px] h-[200px]'
            />
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5, ease: "easeOut" }}
              className="text-[3.5rem] font-bold text-center"
            >
              Thank you for <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-cyan-500">Registration!</span>
            </motion.p>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.6, ease: "easeOut" }}
              className="text-center text-[1.2rem] font-semibold text-gray-500"
            >
              We are committed to offering you the best service and support for all your HR management needs.<br /> Please fill your details for log in to
              <span className="font-bold text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-cyan-500"> TimekeeperX </span>
            </motion.p>
          </div>
          :
          <div className="flex items-center justify-center w-full  h-screen  shadow-xl">

            <div className="w-full h-full flex items-center justify-center  lg:grid lg:grid-cols-2  gap-3	">
              <div className="hidden bg-slate-950 w-full h-full	 lg:block rounded-l-xl ">
                <div className="hidden bg-slate-950 h-full	 lg:block rounded-r-xl ">
                  <div className="h-full w-full object-cover flex justify-center items-center ">

                    <div className='relative'>
                      <video className='w-full h-[100vh] object-cover ' height="100%" loop autoPlay muted><source src='gen3.webm' type="video/webm" /></video>
                      <div className='absolute inset-0 bg-black opacity-60'></div>
                      <div className="absolute inset-0 flex flex-col items-center  justify-center  text-white text center">
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
              <div className="flex flex-col  justify-center items-center  gap-3 p-4 lg:p-0 ">
                <Image src={"/Timekeeper x Logo/Dark-100x100.svg"} alt="Logo" height={70} width={70} className='mb-3' />
                <div className=" flex gap-3 flex-col   min-[500px]:px-10 md:px-14  lg:px-24">
                  <h1 className=" text-[32px]  min-[453px]:text-4xl font-semibold text-center ">Join   <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-cyan-500">
                    TimekeeperX  </span> today!</h1>
                  <p className=" text-balance text-center text-muted-foreground">Enter your email and password to register your account</p>
                </div>

                <div className="   flex flex-col  justify-center sm:justify-start w-[350px] ">
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">                <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>First Name</FormLabel>
                          <FormControl>
                            <Input placeholder="First Name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                      <FormField
                        control={form.control}
                        name="lastName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Last Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Last Name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input placeholder="m@example.com" {...field} />
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
                      <FormField
                        control={form.control}
                        name="companyName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Company Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Company Name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}

                      />

                      <Button type="submit" className='w-full bg-black/90 hover:bg-black text-white'>Register</Button>
                    </form>
                  </Form>
                  <p className=" text-center text-sm mt-3">
                    Have an account already?{' '}
                    <Link href="/" className="underline mx-2">
                      Login Here
                    </Link>
                  </p>
                </div>
              </div>

            </div>
          </div>

      }
    </>
  )
}

const PlayerWithNoSSR = dynamic(
  () => import('@lottiefiles/react-lottie-player').then(module => module.Player),
  { ssr: false }
);

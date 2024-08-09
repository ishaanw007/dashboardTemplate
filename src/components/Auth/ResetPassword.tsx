"use client";
import React, { useState } from "react";
import type { ReactElement } from "react";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
// import { Label } from "@/components/ui/label"
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
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

interface LoginProps {
  suppressHydrationWarning?: boolean;
}
const formSchema = z.object({
  email: z.string().min(2, {
    message: "Please enter a valid email.",
  }),
  password: z.string().min(2, {
    message: "Password must be of atleast 2 characters",
  }),
})

export default function ResetPassword({ suppressHydrationWarning }: LoginProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password:""
    },
  })
 
  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    try {
      const response = await login(values.email, values.password);
      if (response) {
        toast({
          description: "Login successful",
        });
        // localStorage.setItem('username', formData.email);
        setFormData({
          email: "",
          password: "",
        });

        router.push("/dashboard/home");
      }
    } catch (error:any) {
      toast({
        description: error.message,
      });
      console.error(error);
    }
  }


  const router = useRouter();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;

    setFormData({ ...formData, [id]: value });
  };
  const handleLogin = async () => {
    try {
      const response = await login(formData.email, formData.password);
      if (response) {
        toast({
          description: "Login successful",
        });
        // localStorage.setItem('username', formData.email);
        setFormData({
          email: "",
          password: "",
        });

        router.push("/dashboard/home");
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="flex justify-center items-center h-screen" suppressHydrationWarning={suppressHydrationWarning}>
      <Card className="mx-auto my-auto max-w-sm">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold">Login</CardTitle>
          <CardDescription>
            Enter your email and password to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
          <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Email" {...field} />
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
                <Input placeholder="Password" {...field} type="password"/>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>


            {/* <div className="space-y-2">
              <Input
                id="email"
                placeholder="Email"
                required
                type="email"
                onChange={handleChange}
              />
            </div>
            <div className="space-y-2">
              <Input
                id="password"
                required
                type="password"
                placeholder="Password"
                onChange={handleChange}
              />
            </div> 
            <CardDescription className="mt-2 mx-1">
              Forgot Password
              <Link href="/forgot" className="underline mx-2">
                {" "}
                Click Here
              </Link>
            </CardDescription>
            <Button className="w-full" type="submit" onClick={handleLogin}>
              Login
            </Button>
            */}
          </div>
          <CardDescription className="mt-2">
            Not have a account
            <Link href="/register" className="underline mx-2">
              {" "}
              Register Here
            </Link>
          </CardDescription>
        </CardContent>
      </Card>
    </div>
  );
}

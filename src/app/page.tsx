"use client";
import FrontFooter from "@/components/FrontFooter";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Loader from "@/components/ui/loader";
import { useToast } from "@/components/ui/use-toast";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";

const Page = () => {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const router = useRouter();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = async (data: any) => {
    setLoading(true);
    const payload = {
      username: data.username,
      email: data.email,
      password: data.password,
    };

    const res = await fetch(
      "https://flashbot-staging-bb3v6.ondigitalocean.app/v1/user/create_user",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }
    );
    const user = await res.json();
    console.log(user);
    if (res.ok) {
      router.push("/auth/login");
      setLoading(false);
    }
    if (!res.ok) {
      toast({
        title: "",
        variant: "destructive",
        description: user?.detail,
      });
      setLoading(false);
    }
  };
  return (
    <div className="relative">
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-75 z-50">
          <Loader />
        </div>
      )}
      <div className="flex flex-wrap justify-evenly items-center h-fit p-1">
        <Card
          className="w-full sm:w-1/2 lg:w-1/2 m-2 backgr bg-[url('/imgs/back-img.png')] bg-contain bg-no-repeat bg-center relative font-inter"
          style={{ width: "550px", minHeight: "630px" }}
        >
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <Image
              className="mx-auto"
              src="/imgs/logo.png"
              width="120"
              height="120"
              alt="Flash Bot Logo"
            />
            <h1 className="text-3xl font-bold font-inter">FlashBot</h1>
          </div>
        </Card>

        <div>
          <div className="flex items-center justify-center text-center text-xl font-bold mb-5">
            <div className="mr-1">
              <Image
                className="mx-auto"
                src="/imgs/logo.png"
                width="45"
                height="40"
                alt="Flash Bot Logo"
              />
            </div>
            <div className="font-inter">FlashBot</div>
          </div>

          <Card className="mx-auto p-4 mb-10" style={{ width: "500px" }}>
            <CardHeader>
              <CardTitle className="font-inter font-[600] text-[36px]">
                Sign up
              </CardTitle>
              <CardDescription className="font-inter text-[16px]">
                Start your 30-day free trial.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form
                className="grid w-full items-center gap-4"
                onSubmit={handleSubmit(onSubmit)}
              >
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="username" className="font-inter">
                    Username*
                  </Label>
                  <Input
                    id="username"
                    placeholder="Enter your username"
                    {...register("username", {
                      required: {
                        value: true,
                        message: "Username is Required",
                      },
                    })}
                  />
                  <label className="label">
                    {errors.username?.type === "required" && (
                      <span className="label-text-alt text-red-500">
                        {String(errors.username.message)}
                      </span>
                    )}
                  </label>
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="email" className="font-inter">
                    Email*
                  </Label>
                  <Input
                    id="email"
                    placeholder="Enter your email"
                    {...register("email", {
                      required: {
                        value: true,
                        message: "Email is Required",
                      },
                      pattern: {
                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                        message: "Provide a valid Email",
                      },
                    })}
                  />
                  <label className="label">
                    {errors.email?.type === "required" && (
                      <span className="label-text-alt text-red-500">
                        {String(errors.email.message)}
                      </span>
                    )}
                    {errors.email?.type === "pattern" && (
                      <span className="label-text-alt text-red-500">
                        {String(errors.email.message)}
                      </span>
                    )}
                  </label>
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="password" className="font-inter">
                    Password*
                  </Label>
                  <Input
                    id="password"
                    placeholder="Enter your password"
                    type="password"
                    {...register("password", {
                      required: {
                        value: true,
                        message: "Password is Required",
                      },
                    })}
                  />
                  <label className="label">
                    {errors.password?.type === "required" && (
                      <span className="label-text-alt text-red-500">
                        {String(errors.password.message)}
                      </span>
                    )}
                  </label>
                </div>
                <Button type="submit" className="w-full block mb-3 font-inter">
                  Sign Up
                </Button>
              </form>
            </CardContent>
            <CardFooter className="flex flex-col space-y-2">
              <Button className="w-full mb-8" variant="outline">
                <FcGoogle
                  className="inline mr-2 font-inter"
                  style={{ width: "25px", height: "50px" }}
                />
                Sign up with Google
              </Button>

              <span className="text-sm font-inter">
                Already have an account?{" "}
                <Link
                  href={"/auth/login"}
                  style={{ color: "#2DD2CE" }}
                  className="font-inter"
                >
                  Login
                </Link>
              </span>
            </CardFooter>
          </Card>
          <div>
            <FrontFooter />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;

"use client";
import { useState } from "react";
// import { useRouter } from "next/router";
import { signIn } from "next-auth/react";

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
import { Plus_Jakarta_Sans } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

import { FcGoogle } from "react-icons/fc";
import { useRouter } from "next/navigation";

const jakarta = Plus_Jakarta_Sans({
  weight: "500",
  subsets: ["vietnamese"],
});

const page = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await signIn("credentials", {
      redirect: false,
      username: email,
      password,
    });

    if (result.error) {
      setError(result.error);
      console.log(result.error);
    } else {
      // Redirect to the homepage or another page after successful login
      // router.push("/");
      console.log(result);
    }
  };
  return (
    <div className="flex flex-wrap justify-center items-center h-screen p-1">
      <Card
        className="h-screen w-full sm:w-1/2 lg:w-1/2 m-2 backgr bg-[url('/imgs/back-img.png')] bg-contain bg-no-repeat bg-center relative"
        style={{ width: "550px", minHeight: "660px" }}
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
      <div className="w-full sm:w-1/2 lg:w-1/2 h-screen">
        <div className="flex items-center justify-center text-center text-3xl font-bold mb-14">
          <div className="mr-1">
            <Image
              className="mx-auto"
              src="/imgs/logo.png"
              width="80"
              height="80"
              alt="Flash Bot Logo"
            />
          </div>
          <div className="font-inter">FlashBot</div>
        </div>
        <Card className="mx-auto p-4" style={{ width: "500px" }}>
          <CardHeader>
            <CardTitle className="font-inter text-[36px]">Login</CardTitle>
            <CardDescription className="font-inter text-[16px]">
              Welcome! to Flashbot
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email" className="font-inter">
                  Email*
                </Label>
                <Input id="email" placeholder="Enter your email" value={email}
              onChange={(e) => setEmail(e.target.value)}/>
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password" className="font-inter">
                  Password*
                </Label>
                <Input
                  id="password"
                  placeholder="Enter your password"
                  type="password"
                  value={password}
              onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex flex-col space-y-2">
            <Button onClick={handleSubmit} className="w-full block mb-3 font-inter">Login</Button>
            <Button className="w-full mb-8" variant="outline">
              <FcGoogle
                className="inline mr-2 font-inter"
                style={{ width: "25px", height: "50px" }}
              />
              Login with Google
            </Button>

            <span className="text-sm font-inter">
              Don&apos;t have an account?{" "}
              <Link
                href={"/"}
                style={{ color: "#2DD2CE" }}
                className="font-inter"
              >
                Sign UP
              </Link>
            </span>
          </CardFooter>
        </Card>

        <div className="w-full flex flex-col mt-12">
          <div className="flex justify-between  w-full">
            <p className={`text-sm lg:mx-8 ${jakarta.className}`}>
              © 2024 Zorpvideo
            </p>
            <div className="flex items-end justify-end text-sm space-x-1 text-blue-800">
              <Link href={"/"} className={jakarta.className}>
                Term & Condition
              </Link>
              <span className="text-bold text-white">|</span>
              <Link href={"/"} className={jakarta.className}>
                Privacy & Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;

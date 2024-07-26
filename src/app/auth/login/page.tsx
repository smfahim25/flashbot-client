"use client";
import { useState } from "react";
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
import FrontFooter from "@/components/FrontFooter";

const jakarta = Plus_Jakarta_Sans({
  weight: "500",
  subsets: ["vietnamese"],
});

const Page = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("username", username);
    formData.append("password", password);
    const res = await fetch(
      "https://flashbot-staging-bb3v6.ondigitalocean.app/v1/auth/token",
      {
        method: "POST",
        body: formData,
      }
    );
    const user = await res.json();
    if (user) {
      localStorage.setItem("token", user?.access_token);
      router.push("/dashboard");
    }
  };

  return (
    <div className="flex flex-wrap justify-evenly items-center h-fit p-1">
      <Card
        className=" w-full sm:w-1/2 lg:w-1/2 m-2 backgr bg-[url('/imgs/back-img.png')] bg-contain bg-no-repeat bg-center relative"
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
        <div className="flex flex-col justify-evenly">
          <div>
            <Card className="mx-auto p-4 mb-10" style={{ width: "500px" }}>
              <CardHeader>
                <CardTitle className="font-inter text-[36px]">Login</CardTitle>
                <CardDescription className="font-inter text-[16px]">
                  Welcome! to Flashbot
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form
                  className="grid w-full items-center gap-4"
                  onSubmit={handleSubmit}
                >
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="email" className="font-inter">
                      Username*
                    </Label>
                    <Input
                      id="username"
                      placeholder="Enter your username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
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
                  <Link
                    href={"/auth/forgot-password"}
                    style={{ color: "#2DD2CE" }}
                    className="font-inter"
                  >
                    forgot password?
                  </Link>
                  <Button
                    type="submit"
                    className="w-full block mb-3 font-inter"
                  >
                    Login
                  </Button>
                </form>
              </CardContent>
              <CardFooter className="flex flex-col space-y-2">
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
          </div>
          <div>
            <FrontFooter />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;

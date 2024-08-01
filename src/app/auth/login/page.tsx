"use client";
import { useState, useContext } from "react";
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
import Image from "next/image";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { useRouter } from "next/navigation";
import { useAuth } from "../../../AuthContext/AuthContext";
import FrontFooter from "@/components/FrontFooter";
import Loader from "@/components/ui/loader";
import { useToast } from "@/components/ui/use-toast";
import { useForm } from "react-hook-form";

const Page = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { login } = useAuth();
  const { toast } = useToast();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = async (data: any) => {
    setLoading(true);
    const formData = new FormData();
    formData.append("username", data.username);
    formData.append("password", data.password);

    const res = await fetch(
      "https://flashbot-staging-bb3v6.ondigitalocean.app/v1/auth/token",
      {
        method: "POST",
        body: formData,
      }
    );
    const user = await res.json();
    if (res.ok && user?.access_token) {
      login(user.access_token);
      router.push("/dashboard");
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
    <div className="relstive">
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-75 z-50">
          <Loader />
        </div>
      )}
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
                  <CardTitle className="font-inter text-[36px]">
                    Login
                  </CardTitle>
                  <CardDescription className="font-inter text-[16px]">
                    Welcome! to Flashbot
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
    </div>
  );
};

export default Page;

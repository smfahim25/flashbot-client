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

const jakarta = Plus_Jakarta_Sans({
  weight: "500",
  subsets: ["vietnamese"],
});
const page = () => {
  return (
    <div className="flex flex-wrap justify-center items-center h-screen p-1">
      <Card
        className="w-full sm:w-1/2 lg:w-1/2 m-2 backgr bg-[url('/imgs/back-img.png')] bg-contain bg-no-repeat bg-center relative font-inter"
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
        <div className="flex items-center justify-center text-center text-3xl font-bold mb-5">
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
            <CardTitle className="font-inter font-[600] text-[36px]">
              Sign up
            </CardTitle>
            <CardDescription className="font-inter text-[16px]">
              Start your 30-day free trial.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name" className="font-inter">
                  Name*
                </Label>
                <Input id="name" placeholder="Enter your name" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email" className="font-inter">
                  Email*
                </Label>
                <Input id="email" placeholder="Enter your email" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password" className="font-inter">
                  Password*
                </Label>
                <Input
                  id="password"
                  placeholder="Enter your password"
                  type="password"
                />
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex flex-col space-y-2">
            <Button className="w-full block mb-3 font-inter">
              Get started
            </Button>
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

        <div className="w-full flex flex-col mt-2">
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

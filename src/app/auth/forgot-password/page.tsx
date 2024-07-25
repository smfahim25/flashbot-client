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
import { IoKeyOutline } from "react-icons/io5";
import { MdOutlineKeyboardBackspace } from "react-icons/md";

const page = () => {
  return (
    <div className="flex flex-wrap justify-evenly items-center h-screen p-1">
      <Card
        className="w-full sm:w-1/2 lg:w-1/2 m-2 backgr bg-[url('/imgs/back-img.png')] bg-contain bg-no-repeat bg-center relative"
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
        <div className="flex items-center justify-center text-center text-xl font-bold mb-20">
          <div className="mr-1">
            <Image
              className="mx-auto"
              src="/imgs/logo.png"
              width="40"
              height="40"
              alt="Flash Bot Logo"
            />
          </div>
          <div className="font-inter">FlashBot</div>
        </div>
        <Card className="mx-auto p-4 mb-10" style={{ width: "500px" }}>
          <CardHeader className=" text-center">
            <div className="border rounded-lg mx-auto p-4 mb-2">
              <IoKeyOutline />
            </div>

            <CardTitle className="font-inter text-[30px]">
              Forgot password?
            </CardTitle>
            <CardDescription>
              No worries, we’ll send you reset instructions.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">Email*</Label>
                <Input id="email" placeholder="Enter your email" />
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex flex-col space-y-2">
            <Button className="w-full block mb-3">Login</Button>
            <span className="text-sm">
              <Link href={"/auth/login"} className="felx">
                <MdOutlineKeyboardBackspace
                  className="inline mr-2"
                  style={{ width: "25px", height: "45px" }}
                />
                Back to login
              </Link>
            </span>
          </CardFooter>
        </Card>
        <div className="">
          <div className="flex justify-between">
            <p className="text-sm lg:mx-8">© 2024 Zorpvideo</p>
            <div className="flex items-end justify-end text-sm space-x-1 text-[#FE0FE2] dark:text-[#54A6FF]">
              <Link href={"/"}>Term & Condition</Link>
              <span className="text-bold text-white">|</span>
              <Link href={"/"}>Privacy & Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;

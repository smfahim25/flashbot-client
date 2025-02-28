import FrontFooter from "@/components/FrontFooter";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { SiTicktick } from "react-icons/si";

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
              <SiTicktick />
            </div>

            <CardTitle className="font-inter text-[30px]">
              Password reset
            </CardTitle>
            <CardDescription>
              Your password has been successfully reset. Click below to log in
              magically.
            </CardDescription>
          </CardHeader>

          <CardFooter className="flex flex-col space-y-2">
            <Button className="w-full block mb-3">Continue</Button>
            <span className="text-sm">
              <Link href={"/auth/login"} className="felx">
                <MdOutlineKeyboardBackspace
                  className="inline mr-2"
                  style={{ width: "25px", height: "45px" }}
                />
                Back to log in
              </Link>
            </span>
          </CardFooter>
        </Card>
        <div>
          <FrontFooter />
        </div>
      </div>
    </div>
  );
};

export default page;

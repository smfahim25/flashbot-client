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
import { MdOutlineEmail, MdOutlineKeyboardBackspace } from "react-icons/md";

const page = () => {
  return (
    <div className="flex flex-wrap justify-center items-center h-screen p-1">
      <Card
        className="w-full sm:w-1/2 lg:w-1/2 m-2 backgr bg-[url('/imgs/back-img.png')] bg-contain bg-no-repeat bg-center relative"
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
          <h1 className="text-3xl font-bold">FlashBot</h1>
        </div>
      </Card>
      <div className="w-full sm:w-1/2 lg:w-1/2 h-screen">
        <div className="flex items-center justify-center text-center text-3xl font-bold mb-20">
          <div className="mr-1">
            <Image
              className="mx-auto"
              src="/imgs/logo.png"
              width="80"
              height="80"
              alt="Flash Bot Logo"
            />
          </div>
          <div>FlashBot</div>
        </div>
        <Card className="mx-auto p-4" style={{ width: "500px" }}>
          <CardHeader className=" text-center">
            <div className="border rounded-lg mx-auto p-4 mb-2">
              <MdOutlineEmail />
            </div>

            <CardTitle>Check your email</CardTitle>
            <CardDescription>
              We sent a password reset link to olivia@gmail.com
            </CardDescription>
          </CardHeader>

          <CardFooter className="flex flex-col space-y-2">
            <Button className="w-full block mb-3">Continue</Button>
            <span className="text-sm">
              Don&apos;t receive the email?{" "}
              <Link href={"/"} style={{ color: "#2DD2CE" }}>
                Click to resend
              </Link>
            </span>
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
        <div className="w-full flex flex-col mt-36">
          <div className="flex justify-between  w-full">
            <p className="text-sm lg:mx-8">© 2024 Zorpvideo</p>
            <div className="flex items-end justify-end text-sm space-x-1 text-blue-800">
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

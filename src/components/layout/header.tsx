"use clinet";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { GoBell } from "react-icons/go";
import { MobileSidebar } from "./mobile-sidebar";
import { UserNav } from "./user-nav";
import NavNotification from "./navNotification";
export default function Header() {
  return (
    <div className="supports-backdrop-blur:bg-background/60 fixed left-0 right-0 top-0 z-20 border-b bg-background/95 backdrop-blur">
      <nav className="flex h-14 items-center justify-between px-4">
        <div className="hidden lg:block">
          <Link href={"/"}></Link>
          <div className="flex items-center justify-center text-center text-xl font-bold">
            <div>
              <Image
                src="/imgs/logo.png"
                width="60"
                height="60"
                alt="Flash Bot Logo"
              />
            </div>
            <div>FlashBot</div>
          </div>
        </div>
        <div className={cn("block lg:!hidden")}>
          <MobileSidebar />
        </div>

        <div className="flex items-center gap-2">
          <NavNotification />
          <UserNav />
        </div>
      </nav>
    </div>
  );
}

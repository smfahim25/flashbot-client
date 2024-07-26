import { Plus_Jakarta_Sans } from "next/font/google";
import Link from "next/link";

const jakarta = Plus_Jakarta_Sans({
  weight: "500",
  subsets: ["vietnamese"],
});
export default function FrontFooter() {
  return (
    <div>
      <div className="flex justify-between  w-full">
        <p className={`text-sm lg:mx-8 ${jakarta.className}`}>
          © 2024 Zorpvideo
        </p>
        <div className="flex items-end justify-end text-sm space-x-1 text-[#FE0FE2] dark:text-[#54A6FF]">
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
  );
}

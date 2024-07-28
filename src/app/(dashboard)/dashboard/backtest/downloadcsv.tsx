import { Executor } from "@/constants/data";
import { Download } from "lucide-react";
import React from "react";
interface CellActionProps {
  data: Executor;
}

export default function Downloadcsv({ data }: CellActionProps) {
  console.log(data);
  return (
    <div className="flex justify-center items-center ">
      <Download name="Download CSV" className="cursor-pointer" />
    </div>
  );
}

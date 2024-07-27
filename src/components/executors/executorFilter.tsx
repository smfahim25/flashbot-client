import React from "react";
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const FilterOption = () => {
  return (
    <div>
      <div className="mb-5">
        <Select>
          <label className="text-[12px]">Strategy</label>
          <SelectTrigger>
            <SelectValue placeholder="Select" />
          </SelectTrigger>
          <SelectContent></SelectContent>
        </Select>
      </div>
      <div className="mb-5">
        <Select>
          <label className="text-[12px]">Time Frame</label>
          <SelectTrigger>
            <SelectValue placeholder="Select" />
          </SelectTrigger>
          <SelectContent></SelectContent>
        </Select>
      </div>
      <div className="mb-5">
        <Select>
          <label className="text-[12px]">Close Mode</label>
          <SelectTrigger>
            <SelectValue placeholder="Select" />
          </SelectTrigger>
          <SelectContent></SelectContent>
        </Select>
      </div>
      <div className="mb-5">
        <Select>
          <label className="text-[12px]">Quantity Mode</label>
          <SelectTrigger>
            <SelectValue placeholder="Select" />
          </SelectTrigger>
          <SelectContent></SelectContent>
        </Select>
      </div>
      <div className="mb-5">
        <Select>
          <label className="text-[12px]">Start Mode</label>
          <SelectTrigger>
            <SelectValue placeholder="Select" />
          </SelectTrigger>
          <SelectContent></SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default FilterOption;

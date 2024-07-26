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
          <label>Strategy</label>
          <SelectTrigger>
            <SelectValue placeholder="Select" />
          </SelectTrigger>
          <SelectContent></SelectContent>
        </Select>
      </div>
      <div className="mb-5">
        <Select>
          <label>Time Frame</label>
          <SelectTrigger>
            <SelectValue placeholder="Select" />
          </SelectTrigger>
          <SelectContent></SelectContent>
        </Select>
      </div>
      <div className="mb-5">
        <Select>
          <label>Close Mode</label>
          <SelectTrigger>
            <SelectValue placeholder="Select" />
          </SelectTrigger>
          <SelectContent></SelectContent>
        </Select>
      </div>
      <div className="mb-5">
        <Select>
          <label>Quantity Mode</label>
          <SelectTrigger>
            <SelectValue placeholder="Select" />
          </SelectTrigger>
          <SelectContent></SelectContent>
        </Select>
      </div>
      <div className="mb-5">
        <Select>
          <label>Start Mode</label>
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

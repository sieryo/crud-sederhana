"use client";

import { SearchIcon } from "lucide-react";
import { Input } from "../ui/input";

export const Search = () => {
  return (
    <div className=" relative flex items-center ">
      <Input
        placeholder="What are you looking for?"
        className="text-[16px] ring-0 ring-offset-0 focus-visible:ring-0 py-1 bg-gray-100 focus-visible::outline-none border-none placeholder:text-sm "
      />
      <SearchIcon className=" absolute text-gray-800 right-[15px] w-5" />
    </div>
  );
};

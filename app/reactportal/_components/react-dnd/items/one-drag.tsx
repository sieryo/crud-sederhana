"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";

export const OneDrag = () => {
  const [count, setCount] = useState(0);
  return (
    <div className=" bg-slate-200 w-[200px] h-[200px]">
      <Button onClick={() => setCount(count + 1)}>+ 1</Button>
      {count}
    </div>
  );
};

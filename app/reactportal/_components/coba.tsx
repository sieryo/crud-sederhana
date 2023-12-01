"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";

export const Coba = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      {count}
      <Button onClick={() => setCount(count + 1)}>+1</Button>
    </div>
  );
};

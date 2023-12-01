"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import * as portals from "react-reverse-portal";

export const FormAddPortal = () => {
  const [name, setName] = useState("");
  return (
    <div>
      <Label>Input nama bang</Label>
      <Input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
};

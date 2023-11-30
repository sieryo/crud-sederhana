"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import * as portals from "react-reverse-portal";

export const TestFile = () => {
  const portalNode = portals.createHtmlPortalNode();

  const [useOuterDiv, setDivToUse] = useState(false);
  const [count, setCount] = useState(0);

  const Counter = () => {
    return (
      <div>
        Count is {count}
        <Button onClick={() => setCount(count + 1)}>+1</Button>
      </div>
    );
  };

  return (
    <div>
      <portals.InPortal node={portalNode}>
        <Counter />
      </portals.InPortal>
      <Button onClick={() => setDivToUse(!useOuterDiv)}>
        Click to move the OutPortal
      </Button>

      <hr />

      <p>Outer OutPortal : </p>
      {useOuterDiv === true && <portals.OutPortal node={portalNode} />}
      <div className=" border p-1">
        <div className=" border p-1">
          <div className="border p-1">
            <p>Inner OutPortal :</p>
            {useOuterDiv === false && <portals.OutPortal node={portalNode} />}
          </div>
        </div>
      </div>
    </div>
  );
};

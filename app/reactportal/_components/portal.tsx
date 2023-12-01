"use client";

import { useMemo, useState } from "react";
import * as portals from "react-reverse-portal";

import { Kesini } from "./kesini";
import { Button } from "@/components/ui/button";

export const Portal = () => {
  const portalNode = useMemo(() => portals.createHtmlPortalNode(), []);
  const portalNode2 = useMemo(() => portals.createHtmlPortalNode(), []);

  const allPortal = useMemo(() => portals.createHtmlPortalNode(), []);

  const [currentSection, setCurrentSection] = useState("profile");
  const [selectAll, setSelectAll] = useState(false);

  console.log(portalNode);

  return (
    <>
      <portals.InPortal node={portalNode}>
        <Coba />
      </portals.InPortal>

      <portals.InPortal node={portalNode}>
        <FormAddPortal />
      </portals.InPortal>

      <div>
        <Button
          onClick={() => {
            setCurrentSection("profile");
            setSelectAll(false);
          }}
        >
          Edit Profile
        </Button>
        <Button
          onClick={() => {
            setCurrentSection("description");
            setSelectAll(false);
          }}
        >
          Edit Description
        </Button>
        <Button
          onClick={() => {
            setCurrentSection("");
            setSelectAll(true);
          }}
        >
          selectAll
        </Button>
      </div>

      {currentSection === "profile" && <Kesini node={portalNode} />}

      {currentSection === "description" && <Kesini node={portalNode} />}

      {selectAll && <Kesini node={allPortal} />}
    </>
  );
};

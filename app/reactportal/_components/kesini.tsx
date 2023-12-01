"use client";

import * as portals from "react-reverse-portal";

export const Kesini = (props: any) => {
  return (
    <div className=" flex">
      <portals.OutPortal node={props.node} />;
    </div>
  );
};

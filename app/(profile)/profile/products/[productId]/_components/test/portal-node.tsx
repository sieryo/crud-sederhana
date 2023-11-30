"use client";

import React, { useState } from "react";
import * as portals from "react-reverse-portal";
import { EditProductName } from "../edit-product.name";

const MyComponent = () => {
  const portalNode = React.useMemo(() => portals.createHtmlPortalNode(), []);

  return (
    <div>
      <portals.InPortal node={portalNode}>
        <EditProductName />
      </portals.InPortal>
    </div>
  );
};

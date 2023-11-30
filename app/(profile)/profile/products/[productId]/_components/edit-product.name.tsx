"use client";

import { ReactNode, useState } from "react";
import { createPortal } from "react-dom";

export const EditProductName = ({}: {}) => {
  const [showFieldName, setShowFieldName] = useState(false);

  return (
    <>
      <button onClick={() => setShowFieldName((prev) => !prev)}>add</button>
    </>
  );
};

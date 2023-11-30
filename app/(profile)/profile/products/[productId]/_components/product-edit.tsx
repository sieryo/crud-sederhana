"use client";

import { useEffect, useRef, useState } from "react";
import { EditProductName } from "./edit-product.name";
import { ProductEditMenu } from "./product-edit-menu";

export const ProductEdit = () => {
  const containerRef = useRef(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="w-full p-2 border mx-4 min-h-[500px]">
      <div ref={containerRef} className="w-full h-full">
        <ProductEditMenu containerRef={containerRef.current} />
      </div>
    </div>
  );
};

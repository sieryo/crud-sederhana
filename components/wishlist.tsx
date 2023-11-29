"use client";

import { cn } from "@/lib/utils";
import { Heart } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

export const Wishlist = ({
  id,
  wishlisted,
}: {
  id: number;
  wishlisted: boolean;
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const endpointAPI = wishlisted
    ? `/api/gudang/wishlist/${id}/remove`
    : `/api/gudang/wishlist/${id}`;

  const handleWishlist = async () => {
    try {
      setIsLoading(true);
      const res = await fetch(endpointAPI, {
        method: "PATCH",
      });
      console.log(res);
      if (res.status === 401) {
        toast.error("Silahkan Sign in terlebih dahulu");
      }
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className=" text-base max-lg:text-sm flex gap-2 pt-2">
      <button onClick={handleWishlist} disabled={isLoading}>
        <Heart
          className={cn(
            " hover:fill-red-500 hover:text-transparent",
            wishlisted && "fill-red-500 text-transparent",
            isLoading && "opacity-50"
          )}
        />
      </button>
      <span>Add to wishlist</span>
    </div>
  );
};

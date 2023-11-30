"use client";

import { cn } from "@/lib/utils";
import { Heart } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export const Wishlist = ({
  productId,
  wishlisted,
  userId,
}: {
  productId: number;
  wishlisted: boolean;
  userId: string | undefined;
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [wishlist, setWishlist] = useState(wishlisted);

  const endpointAPI = wishlist
    ? `/api/gudang/wishlist/${productId}/remove`
    : `/api/gudang/wishlist/${productId}`;

  const successMessage = wishlist
    ? "Product berhasil dihapus dari wishlist"
    : "Product Berhasil di wishlist";
  const errorMessage = userId
    ? "Maaf ada error dari server, mohon coba lagi"
    : "Silahkan Sign in terlebih dahulu";

  const message = wishlist ? "Added to wishlist" : "Add to wishlist";
  const handleWishlist = async () => {
    try {
      setIsLoading(true);
      updateWishlist();
    } catch (err) {
      toast.error("Ada masalah dari sini, silahkan coba lagi");
    } finally {
    }
  };

  const updateWishlist = () => {
    const res = fetch(endpointAPI, {
      method: "PATCH",
    });
    toast.promise(res, {
      loading: "Loading...",
      success: () => {
        setIsLoading(false);
        wishlist ? setWishlist(false) : setWishlist(true);
        return `${successMessage}`;
      },
      error: () => {
        setIsLoading(false);
        return `${errorMessage}`;
      },
      duration: 1000,
    });
  };

  return (
    <div className=" text-base max-lg:text-sm flex gap-2 pt-2">
      <button onClick={handleWishlist} disabled={isLoading}>
        <Heart
          className={cn(
            " hover:fill-red-500 hover:text-transparent",
            isLoading && "opacity-50 fill-red-500 text-transparent",
            wishlist && "fill-red-500 text-transparent"
          )}
        />
      </button>
      <span>{message}</span>
    </div>
  );
};

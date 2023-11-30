import { auth } from "@/lib/auth-lib";
import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function PATCH(
  req: Request,
  { params }: { params: { productId: string } }
) {
  try {
    const user = await auth();

    if (!user) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const productNotWishlisted = await db.wishlist.findFirst({
      where: {
        productId: Number(params.productId),
        userId: user?.id,
      },
    });

    if (!productNotWishlisted) {
      return new NextResponse("Product not wishlisted", { status: 422 });
    }
    const removeWishlist = await db.wishlist.delete({
      where: {
        userId_productId: {
          productId: Number(params.productId),
          userId: user?.id,
        },
      },
      select: {
        productId: true,
      },
    });

    return NextResponse.json(removeWishlist);
  } catch (err) {}
}

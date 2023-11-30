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

    const productAlreadyWishlishtedFromUser = await db.wishlist.findFirst({
      where: {
        productId: Number(params.productId),
        userId: user?.id,
      },
    });

    if (productAlreadyWishlishtedFromUser) {
      return new NextResponse("Product already wishlishted", { status: 422 });
    }

    const wishlist = await db.wishlist.create({
      data: {
        userId: user?.id,
        productId: Number(params.productId),
      },
      select: {
        productId: true,
      },
    });

    return NextResponse.json(wishlist);
  } catch (err) {
    console.log("WISHLIST_ERROR : ", err);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}

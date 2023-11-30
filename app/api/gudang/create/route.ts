import { auth } from "@/lib/auth-lib";
import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const user = await auth();

    if (!user) {
      return new NextResponse("Unauthorized", { status: 401 });
    }
    const { name, description, price } = await req.json();

    if (!name || !description || !price) {
      return new NextResponse("Missing fields", { status: 422 });
    }

    const addItem = await db.product.create({
      data: {
        userId: user.id,
        name,
        description,
        price,
      },
      select: {
        name: true,
        description: true,
        price: true,
      },
    });

    return NextResponse.json(addItem);
  } catch (err) {
    console.log("error : ", err);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}

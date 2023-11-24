import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { title, content } = await req.json();

    if (!title || !content) {
      return new NextResponse("No content", { status: 400 });
    }

    const addItem = await db.post.create({
      data: {
        title,
        content,
      },
    });

    return NextResponse.json(addItem);
  } catch (err) {
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}

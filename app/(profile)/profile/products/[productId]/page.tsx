import { auth } from "@/lib/auth-lib";
import { HeaderPage } from "../../_components/header/header-page";
import { db } from "@/lib/db";
import { redirect } from "next/navigation";
import { Heart } from "lucide-react";

const ProfileProductIdPage = async ({
  params,
}: {
  params: { productId: string };
}) => {
  const user = await auth();

  const product = await db.product.findFirst({
    where: {
      userId: user?.id,
      id: Number(params?.productId),
    },
  });

  if (!product) {
    redirect("/");
  }

  return (
    <div className=" w-full  p-2 border mx-4 min-h-[500px]">
      <div className=" w-full h-full bg-slate-100">
        <div className=" grid grid-cols-2 p-2">
          <div className="">
            <div>
              <h2 className=" text-xl font-bold">{product.name}</h2>
            </div>
            <div className=" max-w-[250px] min-h-[250px] bg-slate-300"></div>
            <div className=" flex gap-2">
              <Heart className=" fill-red-500 text-transparent" />
              <span>{product.wishlist} wishlist</span>
            </div>
          </div>
          <div className="">dasdsaad</div>
        </div>
      </div>
    </div>
  );
};

export default ProfileProductIdPage;

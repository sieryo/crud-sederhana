import { auth } from "@/lib/auth-lib";
import { HeaderPage } from "../../_components/header/header-page";
import { db } from "@/lib/db";
import { redirect } from "next/navigation";
import { Heart } from "lucide-react";
import { ProductEdit } from "./_components/product-edit";
import { TestFile } from "./_components/test/test-file";

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

  return <TestFile />;
};

export default ProfileProductIdPage;

import { formatRupiah } from "@/lib/format";
import { Product as TypeProduct } from "@prisma/client";
import { Wishlist } from "../wishlist";
import { auth } from "@/lib/auth-lib";

export const Product = async ({
  item,
  wishlisted,
  userId,
}: {
  item: TypeProduct;
  wishlisted: boolean;
  userId: string | undefined;
}) => {
  const formattedPrice = formatRupiah(item.price);

  return (
    <div className="border p-1 rounded-md">
      <div className=" lg:min-w-[220px] lg:min-h-[220px] bg-slate-100  "></div>
      <div className=" pt-3">
        <h3 className="  text-base">{item.name}</h3>
        <span className=" mt-1 block text-green-600">{formattedPrice}</span>
        <Wishlist userId={userId} wishlisted={wishlisted} productId={item.id} />
      </div>
    </div>
  );
};

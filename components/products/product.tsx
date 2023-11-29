import { formatRupiah } from "@/lib/format";
import { Product as TypeProduct } from "@prisma/client";
import { Wishlist } from "../wishlist";
import { auth } from "@/lib/auth-lib";

export const Product = async ({
  item,
  wishlisted,
}: {
  item: TypeProduct;
  wishlisted: boolean;
}) => {
  const formattedPrice = formatRupiah(item.price);

  return (
    <div className="border p-1 rounded-md">
      <div className=" lg:min-w-[220px] lg:min-h-[220px] bg-slate-100  "></div>
      <div className=" pt-3">
        <h3 className="  text-base">{item.name}</h3>
        <span className=" mt-1 block text-green-600">{formattedPrice}</span>
        <Wishlist wishlisted={wishlisted} id={item.id} />
      </div>
    </div>
  );
};

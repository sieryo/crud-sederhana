import { formatRupiah } from "@/lib/format";
import { Product as TypeProduct } from "@prisma/client";
import { TooltipProvider } from "@/components/ui/tooltip";

import { StatusPublish } from "./status-publish";
import Link from "next/link";

export const ProductUser = ({ item }: { item: TypeProduct }) => {
  const formattedPrice = formatRupiah(item.price);

  return (
    <TooltipProvider delayDuration={0}>
      <Link href={`/profile/products/${item.id}`}>
        <div className="border p-1 rounded-md w-[230px] h-[230px]">
          <div className=" lg:min-w-[220px] lg:min-h-[220px] bg-slate-100  "></div>
          <div className="px-2">
            <div className=" flex justify-between  items-center ">
              <div className=" pt-3">
                <h3 className=" lg:max-w-[220px] text-base ">{item.name}</h3>
              </div>
              <StatusPublish isPublished={item.isPublished} />
            </div>
            <div>
              <span className=" mt-1 block text-green-600">
                {formattedPrice}
              </span>
            </div>
          </div>
        </div>
      </Link>
    </TooltipProvider>
  );
};

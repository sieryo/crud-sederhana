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
        <div className=" border p-1 rounded-md hover:border-black transition-all">
          <div className=" lg:min-w-[220px] lg:min-h-[250px] bg-slate-200 "></div>
          <div className=" pt-3 px-2 flex justify-between items-center">
            <div>
              <h3 className="  text-lg">{item.name}</h3>
              <span className="  block font-bold">{formattedPrice}</span>
            </div>
            <StatusPublish isPublished={item.isPublished} />
          </div>
        </div>
      </Link>
    </TooltipProvider>
  );
};

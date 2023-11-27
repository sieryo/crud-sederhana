import { formatRupiah } from "@/lib/format";
import { Product as TypeProduct } from "@prisma/client";
import { TooltipProvider } from "@/components/ui/tooltip";

import { StatusPublish } from "./status-publish";

export const ProductUser = ({ item }: { item: TypeProduct }) => {
  const formattedPrice = formatRupiah(item.price);

  return (
    <TooltipProvider delayDuration={0}>
      <div>
        <div className=" lg:min-w-[220px] lg:min-h-[300px] bg-slate-200 "></div>
        <div className=" pt-3">
          <h3 className=" font-bold text-lg">{item.name}</h3>
          <span className=" mt-1 block text-green-600">{formattedPrice}</span>
          <StatusPublish isPublished={item.isPublished} />
        </div>
      </div>
    </TooltipProvider>
  );
};

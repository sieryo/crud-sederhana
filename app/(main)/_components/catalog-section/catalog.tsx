import { Post } from "@prisma/client";
import { CatalogItems } from "./catalog-items";
import { CatalogTime } from "./catalog-time";

export const Catalog = () => {
  const times = [
    {
      titleTime: "Days",
      time: "03",
    },
    {
      titleTime: "Hours",
      time: "20",
    },
    {
      titleTime: "Minutes",
      time: "25",
    },
    {
      titleTime: "Seconds",
      time: "55",
    },
  ];

  return (
    <section className=" pt-10  min-h-[600px]">
      <div className=" flex gap-5 ">
        <div className=" min-w-[15px] min-h-max bg-blue-500" />
        <h2 className=" text-blue-500">Hari ini</h2>
      </div>
      <div className=" text-2xl pt-2 items-end flex gap-12">
        <h1 className=" font-bold">Barang Populer</h1>
        <CatalogTime initialTime={times} />
      </div>
      <CatalogItems />
    </section>
  );
};

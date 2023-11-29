import { CatalogItems } from "./catalog-items";
import { db } from "@/lib/db";

export const Catalog = async () => {
  return (
    <section className=" pt-10  min-h-[600px]">
      <div className=" flex gap-5 ">
        <div className=" min-w-[15px] min-h-max bg-blue-500" />
        <h2 className=" text-blue-500">Hari ini</h2>
      </div>
      <div className=" text-2xl pt-2 items-end flex gap-12">
        <h1 className=" font-bold">Barang Populer</h1>
      </div>
      <CatalogItems />
    </section>
  );
};

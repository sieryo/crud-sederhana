import { Post } from "@prisma/client";
import { CatalogItems } from "./catalog-items";

export const Catalog = ({ data }: { data: Post[] }) => {
  return (
    <section className=" pt-10  min-h-[600px]">
      <div className=" flex gap-5 ">
        <div className=" min-w-[15px] min-h-max bg-blue-500" />
        <h2 className=" text-blue-500">Hari ini</h2>
      </div>
      <CatalogItems data={data} />
    </section>
  );
};

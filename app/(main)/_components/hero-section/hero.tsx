import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ListCategories } from "./list-categories";
import Image from "next/image";

export const Hero = () => {
  const categories = ["Makanan", "Barang", "Lampu", "Kategori bebas"];
  return (
    <section className=" flex min-h-[400px] ">
      <ListCategories categories={categories} />
      <div className=" w-[800px]  pt-9 pl-5">
        <AspectRatio ratio={20 / 9}>
          <Image
            src="/img.jpg"
            alt="Image"
            className="rounded-md object-cover"
            fill
          />
        </AspectRatio>
      </div>
    </section>
  );
};

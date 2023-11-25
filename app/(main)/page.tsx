import { FormModalAdd } from "@/components/modals/form-modal-add";
import { Button } from "@/components/ui/button";
import { Hero } from "./_components/hero-section/hero";
import { db } from "@/lib/db";
import { Catalog } from "./_components/catalog-section/catalog";
import { getServerSession } from "next-auth";

export default async function Home() {
  const catalogItems = await db.post.findMany();

  return (
    <div className=" max-w-screen-2xl m-auto lg:px-20 px-5">
      <Hero />
      <Catalog data={catalogItems} />
    </div>
  );
}

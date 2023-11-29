import { Hero } from "./_components/hero-section/hero";
import { Catalog } from "./_components/catalog-section/catalog";

export default async function Home() {
  return (
    <div className=" max-w-screen-2xl m-auto lg:px-20 px-5">
      <Hero />
      <Catalog />
    </div>
  );
}

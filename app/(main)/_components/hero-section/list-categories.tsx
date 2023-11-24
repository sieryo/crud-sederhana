import Link from "next/link";

export const ListCategories = ({ categories }: { categories: string[] }) => {
  return (
    <div className=" min-w-[250px] border-r-[1px] pt-9 border-zinc-400">
      <div className=" flex flex-col gap-3 capitalize">
        {categories.map((category, index) => (
          <Link key={category} href={"/category"}>
            {category}
          </Link>
        ))}
      </div>
    </div>
  );
};

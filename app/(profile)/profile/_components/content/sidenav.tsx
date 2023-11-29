"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Sidenav = ({
  menus,
}: {
  menus: { title: string; url: string }[];
}) => {
  const path = usePathname();

  return (
    <div className=" lg:min-w-[250px] lg:min-h-[300px] border flex flex-col">
      {menus.map((menu, index) => (
        <Link
          className={cn(
            " w-full p-5 flex ",
            path.startsWith(menu.url) && "border border-black border-b-2"
          )}
          href={menu.url}
          key={menu.title}
        >
          {menu.title}
        </Link>
      ))}
    </div>
  );
};

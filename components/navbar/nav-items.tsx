"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const NavItems = ({
  items,
}: {
  items: { path: string; title: string }[];
}) => {
  const path = usePathname();

  return (
    <div className=" pl-15">
      <ul className=" flex gap-14 ">
        {items.map((item) => (
          <li key={item.title}>
            <Link
              className={cn(
                "underline-offset-8 hover:underline",
                item.path === path && "underline"
              )}
              href={item.path}
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

"use client";

import { LucideProps } from "lucide-react";
import Link from "next/link";
import { Separator } from "../ui/separator";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export const SidebarMenu = ({
  items,
}: {
  items: { title: string; url: string; icon: LucideProps }[];
}) => {
  const path = usePathname();
  return (
    <div className=" w-full pt-7   z-50">
      <div className=" flex flex-col w-full gap-2">
        {items.map((item, index) => (
          <Link
            className={cn(
              " flex w-full gap-3 items-center hover:bg-slate-300 p-2",
              item.url === path && " bg-slate-300"
            )}
            href={item.url}
            key={item.title}
          >
            <div>{item.icon as any}</div>
            <div>{item.title}</div>
          </Link>
        ))}
        <Separator />
      </div>
    </div>
  );
};

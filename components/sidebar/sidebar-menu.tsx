import { LucideProps } from "lucide-react";
import Link from "next/link";
import { ActionMenu } from "./action-menu";
import { Separator } from "../ui/separator";

export const SidebarMenu = ({
  items,
}: {
  items: { title: string; url: string; icon: LucideProps }[];
}) => {
  return (
    <div className=" w-full pt-7 h-full  z-50">
      <div className=" flex flex-col w-full gap-2">
        {items.map((item, index) => (
          <Link
            className=" flex w-full gap-3 items-center hover:bg-slate-300 p-2"
            href={item.url}
            key={item.title}
          >
            <div>{item.icon as any}</div>
            <div>{item.title}</div>
          </Link>
        ))}
        <Separator />
        <div className=" w-full  mt-2">
          <ActionMenu />
        </div>
      </div>
    </div>
  );
};

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { SidebarMenu } from "./sidebar-menu";
import { BoxIcon } from "lucide-react";
import { ActionMenu } from "./action-menu";

const sidebarItems = [
  {
    title: "Products",
    url: "/products",
    icon: <BoxIcon />,
  },
];

export const Sidebar = async ({ session }: { session: any }) => {
  return (
    <Sheet>
      <SheetTrigger>Sidebar</SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Gudang.</SheetTitle>
        </SheetHeader>
        <SidebarMenu items={sidebarItems} />
        <div className=" w-full  mt-2">
          <ActionMenu user={session} />
        </div>
      </SheetContent>
    </Sheet>
  );
};

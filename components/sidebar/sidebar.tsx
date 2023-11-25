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

const sidebarItems = [
  {
    title: "Products",
    url: "/products",
    icon: <BoxIcon />,
  },
];

export const Sidebar = () => {
  return (
    <Sheet>
      <SheetTrigger>Sidebar</SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Gudang.</SheetTitle>
        </SheetHeader>
        <SidebarMenu items={sidebarItems} />
      </SheetContent>
    </Sheet>
  );
};

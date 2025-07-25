import { Sidebar } from "../sidebar/sidebar";
import { NavItems } from "./nav-items";
import { Search } from "./search";
import { auth } from "@/lib/auth-lib";

export const Navbar = async () => {
  const items = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Contact",
      path: "/contact",
    },
    {
      title: "About",
      path: "/about",
    },
  ];
  const user = await auth();

  return (
    <nav className=" w-full h-[100px] border-b-[1px] z-50 border-zinc-400   flex ">
      <div className=" flex gap-8 justify-between  items-center pt-8 w-full h-full">
        <div className="  font-bold text-2xl px-[100px]  max-w-xs">
          <h1>Gudang.</h1>
        </div>
        <NavItems items={items} />
        <div className="">
          <Search />
        </div>
        <div className=" pr-10">
          <Sidebar session={user} />
        </div>
      </div>
    </nav>
  );
};

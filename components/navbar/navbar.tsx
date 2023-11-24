import { NavItems } from "./nav-items";
import { Search } from "./search";

export const Navbar = () => {
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
    {
      title: "Sign Up",
      path: "/signup",
    },
  ];
  return (
    <nav className=" w-full h-[100px] border-b-[1px] z-50 border-zinc-400   flex ">
      <div className=" flex gap-8 justify-between  items-center pt-8 w-full h-full">
        <div className="  font-bold text-2xl px-[100px]  max-w-xs">
          <h1>Gudang.</h1>
        </div>
        <NavItems items={items} />
        <div className="pr-20">
          <Search />
        </div>
      </div>
    </nav>
  );
};

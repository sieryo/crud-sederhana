import { NavMenu } from "./nav-menu";

export const Navbar = () => {
  const menus = [
    {
      title: "Home",
      url: "/",
    },
  ];
  return (
    <nav className=" w-full h-20 items-center px-16 flex bg-slate-600 border-b-2 border-slate-700">
      <NavMenu menus={menus} />
    </nav>
  );
};

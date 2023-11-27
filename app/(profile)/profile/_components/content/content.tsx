import { Sidenav } from "./sidenav";

export const Content = () => {
  const menuContents = [
    {
      title: "Profile",
      url: "/profile",
    },
    {
      title: "Your Products",
      url: "/profile/products",
    },
    {
      title: "Orders",
      url: "/profile/orders",
    },
    {
      title: "Wishlist",
      url: "/profile/wishlist",
    },
  ];
  return (
    <div className=" w-fit">
      <Sidenav menus={menuContents} />
    </div>
  );
};

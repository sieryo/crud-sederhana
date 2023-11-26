import Link from "next/link";

export const NavMenu = ({
  menus,
}: {
  menus: { title: string; url: string }[];
}) => {
  return (
    <div className=" w-full flex gap-20 items-center text-white">
      <ul className=" flex gap-3 uppercase text-xl">
        {menus.map((menu, index) => (
          <li key={menu.title}>
            <Link href={menu.url}>{menu.title}</Link>
          </li>
        ))}
      </ul>
      <h1 className=" text-2xl tracking-wide">Gudang.</h1>
    </div>
  );
};

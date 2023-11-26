export const Header = ({ user }: { user: any }) => {
  return (
    <div className=" w-full lg:min-h-[300px] flex px-10 text-white items-center min-h-[200px] bg-slate-600">
      <div>
        <h1 className=" text-5xl">{user.name}</h1>
      </div>
    </div>
  );
};

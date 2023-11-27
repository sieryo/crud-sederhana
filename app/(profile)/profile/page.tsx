import { auth } from "@/lib/auth-lib";
import { HeaderPage } from "./_components/header/header-page";
import { db } from "@/lib/db";
import { Separator } from "@/components/ui/separator";

const ProfilePage = async () => {
  const session = await auth();

  const userData = await db.user.findUnique({
    where: {
      id: session?.id,
    },
  });

  return (
    <div className=" w-full lg:pl-10">
      <HeaderPage>Profile</HeaderPage>
      <div className="flex p-3">
        <div className=" min-w-[300px] min-h-[300px] bg-slate-500"></div>
        <div className=" pl-9 w-full">
          <div>
            <p className=" text-2xl">{userData?.name}</p>
            <p className=" text-lg text-blue-600">{userData?.role}</p>
          </div>
          <Separator />
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;

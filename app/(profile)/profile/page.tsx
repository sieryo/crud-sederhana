import { Header } from "./_components/header/header";

import { Content } from "./_components/content/content";
import { auth } from "@/lib/auth-lib";
import { PrismaAdapter } from "@next-auth/prisma-adapter";

const ProfilePage = async () => {
  const session = await auth();

  console.log(session);
  return (
    <div className=" w-full lg:pl-10">
      <h1 className=" text-3xl">Profile</h1>
    </div>
  );
};

export default ProfilePage;

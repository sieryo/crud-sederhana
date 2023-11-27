import { Navbar } from "./_components/navbar/navbar";
import { redirect } from "next/navigation";
import { auth } from "@/lib/auth-lib";
import { HeaderLayout } from "./_components/header/header-layout";
import { Content } from "./_components/content/content";

const ProfileLayout = async ({ children }: { children: React.ReactNode }) => {
  const user = await auth();

  if (!user) {
    redirect("/");
  }
  return (
    <div>
      <Navbar />
      <HeaderLayout user={user} />
      <div className=" flex  p-10">
        <Content />
        {children}
      </div>
    </div>
  );
};

export default ProfileLayout;

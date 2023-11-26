import { NavMenu } from "./_components/navbar/nav-menu";
import { Navbar } from "./_components/navbar/navbar";
import { redirect } from "next/navigation";
import { auth } from "@/lib/auth-lib";
import { Header } from "./_components/header/header";
import { Content } from "./_components/content/content";

const ProfileLayout = async ({ children }: { children: React.ReactNode }) => {
  const user = await auth();

  if (!user) {
    redirect("/");
  }
  return (
    <div>
      <Navbar />
      <Header user={user} />
      <div className=" flex  p-10">
        <Content />
        {children}
      </div>
    </div>
  );
};

export default ProfileLayout;

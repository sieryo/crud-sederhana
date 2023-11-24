import { Navbar } from "@/components/navbar/navbar";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <Navbar />
      <div className="">{children}</div>
    </main>
  );
};

export default MainLayout;

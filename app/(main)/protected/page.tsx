import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";

const ProtectedPage = async () => {
  const session = await getServerSession();

  if (!session) {
    return redirect("/");
  }
  return <div>Ini adalah protected page</div>;
};

export default ProtectedPage;

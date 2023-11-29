import { HeaderPage } from "../_components/header/header-page";
import { Button } from "@/components/ui/button";
import { ModalProductAdd } from "@/components/modals/modal-product-add";
import { ProductUserList } from "../_components/products/productsUserList";
import { db } from "@/lib/db";
import { auth } from "@/lib/auth-lib";
import { PlusCircle } from "lucide-react";

const ProfileProductsPage = async () => {
  const user = await auth();

  const products = await db.product.findMany({
    where: {
      userId: user?.id,
    },
  });

  return (
    <div className=" w-full lg:pl-10">
      <HeaderPage>Your Products</HeaderPage>
      <ModalProductAdd>
        <Button className=" mt-2">
          <PlusCircle className=" mr-2 w-6" />
          Ajukan produk
        </Button>
      </ModalProductAdd>
      <ProductUserList products={products} />
    </div>
  );
};

export default ProfileProductsPage;

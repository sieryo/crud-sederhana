import { Product as TypeProduct } from "@prisma/client";
import { ProductUser } from "./product-user";

export const ProductUserList = ({ products }: { products: TypeProduct[] }) => {
  return (
    <div className=" flex pt-5 flex-wrap gap-4">
      {products.map((item, index) => (
        <ProductUser key={item.id} item={item} />
      ))}
    </div>
  );
};

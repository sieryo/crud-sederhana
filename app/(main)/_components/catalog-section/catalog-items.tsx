import { Product } from "@/components/products/product";
import { auth } from "@/lib/auth-lib";
import { db } from "@/lib/db";

export const CatalogItems = async () => {
  const user = await auth();

  if (user) {
    const products = await db.product.findMany({
      include: {
        _count: {
          select: { Wishlist: true },
        },
        Wishlist: {
          where: {
            userId: user?.id,
          },
        },
      },
    });
    return (
      <div className=" flex gap-3 overflow-x-auto p-3 mt-2">
        {products.map((product, index) => {
          const wishlisted = product.Wishlist[0]?.productId === product.id;
          return (
            <Product
              userId={user.id}
              wishlisted={wishlisted}
              item={product}
              key={product.id}
            />
          );
        })}
      </div>
    );
  } else {
    const products = await db.product.findMany();
    return (
      <div className=" flex gap-3 overflow-x-auto p-3 mt-2">
        {products.map((product, index) => {
          const wishlisted = false;
          const userId = undefined;
          return (
            <Product
              userId={userId}
              wishlisted={wishlisted}
              item={product}
              key={product.id}
            />
          );
        })}
      </div>
    );
  }
};

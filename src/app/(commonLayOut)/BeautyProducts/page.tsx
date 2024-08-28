import ProductCard from "@/app/componants/Shared/ProductCard";
import { product } from "@/type";

const Beautypage = async () => {
  const res = await fetch(`${process.env.BACKEND_URL}/medicines`);
  const products: product[] = await res.json();
  // console.log(products);

  // Filter products to only include those with the category "Beauty"
  const beautyProducts = products.filter((product) =>
    product.categories?.includes("Beauty")
  );
  // console.log(beautyProducts);

  return (
    <div className="my-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {beautyProducts.slice(6, 50).map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Beautypage;

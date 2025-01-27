import ProductCard from "@/app/componants/Shared/ProductCard";
import { product } from "@/type";
import React from "react";

const Wellnesspage = async () => {
  const res = await fetch(`https://asian-server.vercel.app/medicines`);
  const products: product[] = await res.json();
  //   console.log(products);

  const wellnessProducts = products.filter((product) =>
    product.categories?.includes("Wellness")
  );

  return (
    <div className="my-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {wellnessProducts.slice(0, 10).map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Wellnesspage;

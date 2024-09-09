import ProductCard from "@/app/componants/Shared/ProductCard";
import { product } from "@/type";

// This function runs on the server
export default async function CategoryPage({
  params,
}: {
  params: { catagorieName: string };
}) {
  const res = await fetch(`${process.env.BACKEND_URL}/medicines`);
  const products: product[] = await res.json();

  // Filter products based on the categoryName from the dynamic route
  const filteredProducts = products.filter((product) =>
    product.categories?.includes(params.catagorieName)
  );

  if (!filteredProducts) {
    return <div>No products found</div>;
  }

  return (
    <div className="p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredProducts.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
}

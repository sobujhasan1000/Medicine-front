import ProductCard from "@/app/componants/Shared/ProductCard";
import { product } from "@/type";

const AllMedicinepage = async () => {
  const res = await fetch(`${process.env.BACKEND_URL}/medicines`);
  const products: product[] = await res.json();
  console.log(products);
  return (
    <div className="my-6">
      <div>
        <h1 className="text-center text-2xl font-bold">OUR ALL Medicine</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default AllMedicinepage;

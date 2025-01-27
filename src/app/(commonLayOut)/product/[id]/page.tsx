import { product } from "@/type";
import ProductDetailsClient from "./ProductDetailsClient"; // Import the client component

// This function runs on the server
export default async function ProductDetails({
  params,
}: {
  params: { id: string };
}) {
  const res = await fetch(`https://asian-server.vercel.app/medicines`);
  const products: product[] = await res.json();
  const product = products.find((p) => p._id === params.id);

  if (!product) {
    return <div>Product not found.</div>;
  }

  // Pass the fetched product data to the client component
  return <ProductDetailsClient product={product} />;
}

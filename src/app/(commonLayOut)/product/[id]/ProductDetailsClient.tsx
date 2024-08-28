"use client";

import Image from "next/image";
import { product } from "@/type";
import { toast } from "react-toastify";
import { useCart } from "@/app/componants/Context/CartContext";
import Button from "@/app/componants/Shared/Button";
import { StarIcon } from "@heroicons/react/16/solid";

interface ProductDetailsClientProps {
  product: product;
}

export default function ProductDetailsClient({
  product,
}: ProductDetailsClientProps) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
    toast.success(`${product.name} added to cart`);
  };

  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Image Section */}
        <div className="flex justify-center items-center p-4 bg-gray-50">
          <Image
            src={product.img}
            alt={product.name}
            width={400}
            height={400}
            className="rounded-lg shadow-md object-cover"
          />
        </div>

        {/* Details Section */}
        <div className="flex flex-col justify-center p-6 space-y-4">
          <h1 className="text-4xl font-bold text-gray-900">{product.name}</h1>

          <div className="flex items-center space-x-2">
            <p className="text-2xl text-gray-800 font-semibold">
              ${product.price}
            </p>
            <span className="text-sm text-green-600 font-medium">
              {product.get_offer}
            </span>
          </div>

          <div className="flex items-center space-x-1">
            {[...Array(5)].map((_, i) => (
              <StarIcon
                key={i}
                className={`h-5 w-5 ${
                  i < product.rating ? "text-yellow-500" : "text-gray-300"
                }`}
              />
            ))}
            <p className="text-sm text-gray-600">({product.rating} stars)</p>
          </div>

          {/* Smaller Add to Cart Button */}
          <Button
            onClick={handleAddToCart}
            className="mt-4 px-4 py-2 text-sm font-medium"
          >
            Add to Cart
          </Button>
        </div>
      </div>

      {/* How to Use and Details Section */}
      <div className="bg-white shadow-lg rounded-lg overflow-hidden mt-6 p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          How to Use
        </h2>
        <p className="text-md text-gray-700 mb-6">{product.how_to_use}</p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Details</h2>
        <p className="text-md text-gray-600">{product.details}</p>
      </div>
    </div>
  );
}

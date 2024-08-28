"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { product } from "@/type";
import Button from "./Button";
import { useCart } from "../Context/CartContext";
import { toast } from "react-toastify";

const ProductCard = ({ product }: { product: product | undefined }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    if (product) {
      addToCart(product);
      toast.success(`${product.name} added to cart`);
    }
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="card bg-base-100 shadow-xl">
      {/* Use Link for navigation */}
      <Link href={`/product/${product._id}`}>
        <figure className="px-10 pt-10 cursor-pointer">
          <Image
            width={120}
            height={120}
            src={product.img}
            alt={product.name}
            className="rounded-xl"
          />
        </figure>
      </Link>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{product.name}</h2>
        <p>${product.price}</p>
        <p className="text-green-500">${product.get_offer}</p>
        <div className="card-actions ">
          <Button onClick={handleAddToCart}>Add TO CART</Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

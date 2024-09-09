"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation"; // For Next.js 13+

import { product } from "@/type";

const categories = [
  {
    name: "Beauty",
    img: "https://www.netmeds.com/images/category/prod/thumb/face_wash_cleansers.png",
  },
  {
    name: "dressing",
    img: "https://www.netmeds.com/images/category/prod/thumb/dressing.png",
  },
  {
    name: "personal",
    img: "https://www.netmeds.com/images/category/prod/thumb/condoms.png",
  },
  {
    name: "pain",
    img: "https://www.netmeds.com/images/category/v1/650/thumb/pain_relief_application_2.png",
  },
  {
    name: "Feminine",
    img: "https://www.netmeds.com/images/category/v1/3087/thumb/feminine_hygiene_2.png",
  },
];

const Categories = ({ products }: { products: product[] }) => {
  const router = useRouter();

  const handleCategoryClick = (catagorieName: string) => {
    // Navigate to the dynamic category page
    router.push(`/catagories/${catagorieName}`);
  };

  return (
    <div className="mx-4">
      <h1 className="m-4 text-2xl font-bold">Shop By Category</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {categories.map((category, index) => (
          <div
            key={index}
            className="rounded-lg overflow-hidden my-4 cursor-pointer"
            onClick={() => handleCategoryClick(category.name)}
          >
            <Image
              src={category.img}
              alt={category.name}
              width={300}
              height={200}
              className="object-cover"
            />
            <p className="text-center font-medium mt-2">{category.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;

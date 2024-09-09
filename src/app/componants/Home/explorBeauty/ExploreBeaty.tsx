"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const categories = [
  {
    name: "Beauty",
    img: "https://www.netmeds.com/images/category/prod/thumb/facial_kits.png",
  },
  {
    name: "Lip",
    img: "https://www.netmeds.com/images/category/prod/thumb/lip_care.png",
  },
  {
    name: "Body",
    img: "https://www.netmeds.com/images/category/v1/525/thumb/body_care_4.png",
  },
  {
    name: "Hair",
    img: "https://www.netmeds.com/images/category/prod/thumb/hair_care.png",
  },
  {
    name: "Skin",
    img: "https://www.netmeds.com/images/category/prod/thumb/skin_care.png",
  },
];

const ExploreBeauty = () => {
  const router = useRouter();

  const handleCategoryClick = (catagorieName: string) => {
    // Navigate to the dynamic category page
    router.push(`/catagories/${catagorieName}`);
  };

  return (
    <div
      className="mx-4 mt-4 rounded-md"
      style={{
        background:
          "linear-gradient(to bottom,hsl(0, 100%, 70%) 50%, white 50%)",
      }}
    >
      <h1 className="p-6 text-2xl font-bold">Explore Beauty</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {categories.map((category, index) => (
          <div
            key={index}
            className="relative rounded-lg overflow-hidden my-4 cursor-pointer"
            onClick={() => handleCategoryClick(category.name)}
          >
            <div className="p-4">
              <Image
                src={category.img}
                alt={category.name}
                width={300} // Set the width you need
                height={200} // Set the height you need
                className="object-cover"
              />
              <h3 className="text-lg font-semibold text-center mt-2">
                {category.name}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreBeauty;

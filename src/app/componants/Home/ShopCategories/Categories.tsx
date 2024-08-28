import React from "react";
import Image from "next/image";

const categories = [
  {
    name: "Body Care",
    img: "https://www.netmeds.com/images/category/prod/thumb/face_wash_cleansers.png",
  },
  {
    name: "Skin Care",
    img: "https://www.netmeds.com/images/category/prod/thumb/dressing.png",
  },
  {
    name: "Hair Care",
    img: "https://www.netmeds.com/images/category/prod/thumb/condoms.png",
  },
  {
    name: "Fragrance",
    img: "https://www.netmeds.com/images/category/v1/650/thumb/pain_relief_application_2.png",
  },
  {
    name: "Makeup",
    img: "https://www.netmeds.com/images/category/v1/3087/thumb/feminine_hygiene_2.png",
  },
];

const Categories = () => {
  return (
    <div className="mx-4">
      <h1 className="m-4 text-2xl font-bold">shop By Category</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {categories.map((category, index) => (
          <div key={index} className=" rounded-lg overflow-hidden my-4">
            <Image
              src={category.img}
              alt={category.name}
              width={300} // Set the width you need
              height={200} // Set the height you need
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;

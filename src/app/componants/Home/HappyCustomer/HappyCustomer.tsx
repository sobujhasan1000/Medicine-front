import React from "react";
import Image from "next/image";

const categories = [
  {
    name: "Offline Stores",
    Number: "1000+",
    img: "https://www.netmeds.com/assets/icons/store.png",
  },
  {
    name: "Pincodes Served",
    Number: "2000+",
    img: "https://www.netmeds.com/assets/icons/location.png",
  },
  {
    name: "Happy Customers",
    Number: "2m+",
    img: "https://www.netmeds.com/assets/icons/user.png",
  },
];

const HappyCustomer = () => {
  return (
    <div className="border-y border-solid border-red-200 my-6">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
        {categories.map((category, index) => (
          <div key={index} className="flex gap-4 mx-auto">
            <div key={index} className=" rounded-lg overflow-hidden my-4">
              <Image
                src={category.img}
                alt={category.name}
                width={100} // Set the width you need
                height={30} // Set the height you need
                className="object-cover"
              />
            </div>
            <div className="my-auto">
              <h1 className="font-bold text-2xl">{category.Number}</h1>
              <h1 className="font-bold">{category.name}</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HappyCustomer;

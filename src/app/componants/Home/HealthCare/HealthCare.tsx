"use client";
import React from "react";
import Image from "next/image";

const categories = [
  {
    name: "Skip the queue! Speak with a doctor right now More than 25+ specialities to choose from, starting at just ₹149",
    Number: "Easy Online Doctor Consultations",
    img: "https://www.netmeds.com/assets/glorymsite/images/icons/new_icons/online_consultation.svg",
  },
  {
    name: "Subscribe and schedule next deliveries Subscribe for 12 months and get the last month free. *T&C Apply",
    Number: "Get medicine refill every month",
    img: "https://www.netmeds.com/assets/gloryweb/images/icons/new-icons/subscribe_and_schedule.svg",
  },
];

const HealthCare = () => {
  return (
    <div className="border-y border-red-400 border-spacing-2 border-solid p-6 my-6 mx-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
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
              <h1 className=" text-2xl">{category.Number}</h1>
              <h1 className="">{category.name}</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HealthCare;

"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const Carousel = ({
  data,
  autoScroll = true,
  interval = 3000,
}: {
  data: {
    image: string;
  }[];
  autoScroll?: boolean;
  interval?: number;
}) => {
  const [currentImg, setCurrentImg] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!autoScroll) return;

    const scrollInterval = setInterval(() => {
      setCurrentImg((prev) => (prev === data.length - 1 ? 0 : prev + 1));
    }, interval);

    return () => clearInterval(scrollInterval);
  }, [currentImg, data.length, interval, autoScroll]);

  return (
    <div className="relative w-full">
      {/* Carousel container */}
      <div className="relative h-60 w-full overflow-hidden rounded-md md:h-80 lg:h-96">
        {/* Image container */}
        <div
          ref={carouselRef}
          style={{
            transform: `translateX(-${currentImg * 100}%)`,
          }}
          className="flex h-full w-full transition-transform duration-500 ease-in-out"
        >
          {/* Map through data to render images */}
          {data.map((v, i) => (
            <div key={i} className="relative h-full w-full  shrink-0">
              <Image
                className="pointer-events-none "
                alt={`carousel-image-${i}`}
                fill
                src={v.image || "https://random.imagecdn.app/500/500"}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation buttons */}
      <div className="absolute inset-0 flex items-center justify-between px-4">
        <button
          onClick={() =>
            setCurrentImg((prev) => (prev === 0 ? data.length - 1 : prev - 1))
          }
          className="bg-gray-700/50 text-white p-2 rounded-full hover:bg-gray-900 transition"
        >
          {"<"}
        </button>
        <button
          onClick={() =>
            setCurrentImg((prev) => (prev === data.length - 1 ? 0 : prev + 1))
          }
          className="bg-gray-700/50 text-white p-2 rounded-full hover:bg-gray-900 transition"
        >
          {">"}
        </button>
      </div>

      {/* Indicators */}
      <div className="mt-4 flex justify-center space-x-2">
        {data.map((_, i) => (
          <div
            key={i}
            onClick={() => setCurrentImg(i)}
            className={`h-3 w-3 rounded-full cursor-pointer transition-all ${
              currentImg === i ? "bg-gray-800" : "bg-gray-400"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;

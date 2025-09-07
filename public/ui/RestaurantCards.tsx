"use client";

import Image from "next/image";

const dishes = [
  {
    name: "Pasta",
    description:
      "Discover a symphony of tastes with our handpicked favorites that promise to delight your senses.",
    price: "IDR 200.000",
    rating: 5,
    image: "/images/food1.jpg", // ✅ from public folder
  },

  {
    name: "Pasta",
    description:
      "Discover a symphony of tastes with our handpicked favorites that promise to delight your senses.",
    price: "IDR 200.000",
    rating: 5,
    image: "/images/food1.jpg", // ✅ from public folder
  },

  {
    name: "Pasta",
    description:
      "Discover a symphony of tastes with our handpicked favorites that promise to delight your senses.",
    price: "IDR 200.000",
    rating: 5,
    image: "/images/food1.jpg", // ✅ from public folder
  },
];

export default function ExquisiteFavorites() {
  return (
    <section className="bg-[#111] text-white py-16 px-6 lg:px-20 rounded-b-2xl">
      {/* Heading */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold leading-tight">
          Indulge in our <br /> Exquisite Favorites
        </h2>
        <p className="text-gray-400 mt-4">
          Discover a symphony of tastes with our handpicked favorites that
          promise to delight your senses
        </p>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {dishes.map((dish, i) => (
          <div
            key={i}
            className="bg-[#1a1a1a] rounded-lg overflow-hidden shadow-lg"
          >
            <div className="relative h-56 w-full">
              <Image
                src={dish.image}
                alt={dish.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-5">
              <h3 className="text-xl font-bold">{dish.name}</h3>
              <p className="text-gray-400 text-sm mt-2">{dish.description}</p>

              {/* Rating */}
              <div className="flex items-center mt-4 text-yellow-400">
                {Array.from({ length: dish.rating }).map((_, idx) => (
                  <span key={idx}>★</span>
                ))}
                {Array.from({ length: 5 - dish.rating }).map((_, idx) => (
                  <span key={idx} className="text-gray-500">
                    ★
                  </span>
                ))}
              </div>

              {/* Price */}
              <p className="mt-3 font-bold">{dish.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

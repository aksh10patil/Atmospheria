"use client";
import Image from "next/image";

export default function AboutSection() {
  return (
<div className="bg-gradient-to-b from-white to-green-100 overflow-hidden">


      <section className="text-black py-16 px-8">
        {/* Images Row */}
        <div className="flex justify-center space-x-6 mb-10">
          <Image
            src="/images/food1.jpg"
            alt="Customer enjoying food"
            width={250}
            height={160}
            className="rounded-xl shadow-lg"
          />
          <Image
            src="/images/restaurant.jpg"
            alt="Restaurant Interior"
            width={250}
            height={160}
            className="rounded-xl shadow-lg"
          />
          <Image
            src="/images/food1.jpg"
            alt="Serving Food"
            width={250}
            height={160}
            className="rounded-xl shadow-lg"
          />
        </div>

        {/* Text Content */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold">
            Welcome to <span className="text-green-900">Atmospheria</span>, your
            destination for authentic cuisine.
          </h2>
          <p className="mt-4 text-lg text-gray-800">
            Enjoy a culinary journey with dishes like savory{" "}
            <span className="font-semibold text-black">pasta</span> and
            delightful <span className="font-semibold text-black">noodles</span>.
            Join us for a memorable dining experience where tradition meets taste.
          </p>
        </div>

        {/* Stats Row */}
        <div className="border-t border-green-700 mt-10 pt-8 flex justify-center space-x-16 text-lg font-medium text-gray-900">
          <div>
            <span className="font-bold text-black">10,000+</span> Satisfied
            Customers
          </div>
          <div>
            <span className="font-bold text-black">200+</span> Menu
          </div>
          <div>
            <span className="font-bold text-black">95%</span> Users Report Healthier
          </div>
        </div>
      </section>
    </div>
  );
}

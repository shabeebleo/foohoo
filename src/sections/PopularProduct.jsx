import React from "react";
import { products } from "../constants";
import PopularProductCard from "../components/PopularProductCard";


function PopularProduct() {

  return (
    <section id="products" className="max-container max-sm:mt-12">
      <div className="flex flex-col justify-start gap-5">
        <h2 className="font-sans font-bold text-4xl">
          Our <span className="text-custom-color">popular</span> products
        </h2>
        <p className="lg:max-w-lg mt-2 font-normal text-slate-500">
          Experience topo-notch quality and style with our sought-after
          selections.Discover a world of comfort,design and value
        </p>
      </div>
      <div className="mt-16 grid lg:grid-cols-4 md:grid-col-3 sm:grid-col-2 grid-col-1 sm:gap-4 gap-16">
        {
        products.map((product) => (         
          <PopularProductCard key={product.name} {...product} />
        ))}
      </div>
    </section>
  );
}

export default PopularProduct;

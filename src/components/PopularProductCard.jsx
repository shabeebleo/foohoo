import React from "react";
import { star } from "../assets/icons";

function PopularProductCard({ imgURL, name, price }) {
  return (

  <div className="flex flex-1 flex-col w-full max-sm:w-full">
      <img src={imgURL} alt={name} className="w-[280px] h-[280px]" />
      <div className="mt-8 flex justify-start gap-2.5">
        <img className="mt-2" src={star} alt="rating" width={24} height={24} />
        <p className="mt-2 text-2xl leading-normal font-semibold" >(4.5)</p>
      </div>
      <h3 className="mt-2 font-semibold leading-normal ">{name}</h3>
      <p className="mt-2 text-custom-color text-xl font-semibold">{price}</p>
    </div>
  );
}

export default PopularProductCard;

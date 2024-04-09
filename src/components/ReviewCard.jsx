import React from "react";
import { star } from "../assets/icons";
//

function ReviewCard({ imgURL, customerName, rating, feedback }) {
  return (
    <div className="flex flex-col justify-center items-center ">
      <img
        className="rounded-full object-cover w-[120px] h-[120px] src={imgURL}"
        src={imgURL}
        alt="customer"
      />
      <p className="mt-6 max-w-sm info-text text-center" text-center>
        {feedback}
      </p>
      <div className="flex justify-center items-center gap-3">
        <img
          src={star}
          width={24}
          height={24}
          className="object-contain m-0"
          alt=""
        />
        <p className="text-xl info-text text-gray-400">({rating})</p>
      </div>
      <h3 className=" font-bold text-black">{customerName}</h3>
    </div>
  );
}

export default ReviewCard;

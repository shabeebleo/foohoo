import React from "react";
import { thumbnailBackground } from "../assets/images";

function ShoeCard({ imgURL, bigShoeImage, changeBigShoeImage }) {
  const handleClick = () => {
    console.log(
      "handleCllick",
      "......",
      bigShoeImage,
      "......",
      imgURL.bigShoe
    );
    if (bigShoeImage !== imgURL.bigShoe) {
      changeBigShoeImage(imgURL.bigShoe);
    }
  };
  return (
    <div
      onClick={handleClick}
      className={`border-2   rounded-xl ${
        bigShoeImage === imgURL.bigShoe
          ? "border-custom-color"
          : "border-transparent"
      } cursor-pointer max-sm:flex-1`}
    >
      <div
        className="flex justify-center items-center bg-cover bg-center sm:h-40 sm:w-40 rounded-xl max-sm:p-4"
        style={{ backgroundImage: `url(${thumbnailBackground})` }}
      >
        <img
          src={imgURL.thumbnail}
          alt="shoe collection"
          width={127}
          height={103}
          className="object-contain"
        />
      </div>
    </div>
  );
}

export default ShoeCard;

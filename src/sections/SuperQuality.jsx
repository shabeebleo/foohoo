import React from "react";
import Button from "../components/Button";
import { arrowRight } from "../assets/icons";
import { shoe8 } from "../assets/images";

function SuperQuality() {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div>
        <h2 className="mt-10 capitalize font-bold text-4xl max-sm:text-[72px] max-sm:leading-[82px]">
          We Provide You
          <span className="text-custom-color">Super</span>
          <br />
          {/* <span className="xl:bg-white xl:whitespace-nowrap relative z-10">The New Arrival</span> */}
          <span className="text-custom-color leading-5">Quality </span>
          Shoes
        </h2>
        <p className="text-slate-700 info-text lg:max-w-lg text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
          Discover the latest stylish Nike arrivals, featuring cutting-edge
          designs and innovative technologies that redefine performance and
          style. From iconic sneakers to sleek activewear, explore a diverse
          range of products that cater to every athlete and fashion enthusiast.
          Stay ahead of the game with Nike's newest offerings.
        </p>
        <div className="mt-11">
          <Button label="view details" />
        </div>
      
      </div>
      <div className="flex-1 flex justify-center items-center">
          <img className="object-contain" src={shoe8} width={570} alt="shoe8" />
        </div>
    </section>
  );
}

export default SuperQuality;

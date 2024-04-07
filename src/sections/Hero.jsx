import React from "react";
import Button from "../components/Button";
import { arrowRight } from "../assets/icons";
import { shoes, statistics } from "../constants.js";
import { bigShoe1,thumbnailBackground } from "../assets/images/index.js";
import ShoeCard from "./ShoeCard.jsx";
import { useState } from "react";

function Hero() {

  const[bigShoeImg,setBigShoeImg]=useState(bigShoe1)
  return (
    <section className="w-full flex flex-col xl:flex-row justify-center min-h-screen gap-10 max-container">
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28 ">
        <p className="text-xl font-sans text-custom-color">Our summer collection</p>
        <h1 className="mt-10 font-semibold text-8xl max-sm:text-[72px] max-sm:leading-[82px]">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10">The New Arrival</span>
          <br />
          <span className="text-custom-color inline-block mt-3 mr-3">Nike</span>
          Shoes
        </h1>
        <p className="text-slate-700 text-lg leading-8 mt-6 mb-14 sm:max-w-sm">Discover stylish Nike Arrivals bla blh blahh.</p>
        <Button label="shop now" iconUrl={arrowRight} />
        <div className="flex justify-start items-start gap-16 w-full mt-20">
          {statistics.map((stat) => {
            return (
              <div key={stat.label}>
                <p className="text-4xl font-bond">{stat.value}</p>
                <p>{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="relative flex flex-1 justify-center items-center xl:min-h-screen max-xl:py-40 bg-cover bg-center"  style={{backgroundImage: `url(${thumbnailBackground})`}}>
        <img  src={bigShoeImg} alt="shoe collection" width={610} height={500}  className="object-contain z-10 relative"/>
        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6"  >
          {shoes.map((shoe)=>(

           <div className="mt-2" key={shoe}>
            <ShoeCard imgURL={shoe} bigShoeImage={bigShoeImg} changeBigShoeImage={(imgURL)=>(setBigShoeImg(imgURL))}/>
           </div> 
          )
          )}
        </div>
      </div>
      
    </section>
  );
}

export default Hero;

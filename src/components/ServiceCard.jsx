import React from "react";

function ServiceCard({ imgURL, label, subtext }) {
  return (
    <div className="flex-1 sm:[350px] w-full border rounded-[20px] shadow-2xl px-10 py-16 flex-col flex-wrap   flex items-start">
      <div className="w-11 h-11 flex justify-center bg-custom-color rounded-full">
        <img width={24} height={24} src={imgURL} alt={label} />
      </div>
      <h2 className="font-bold text-xl leading-9 mt-2">{label}</h2>
      <p className="text-slate-700 info-text lg:max-w-lg text-lg leading-8 mt-2 mb-14 sm:max-w-sm">
        {subtext}
      </p>
    </div>
  );
}

export default ServiceCard;

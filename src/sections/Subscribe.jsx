import React from "react";
import Button from "../components/Button";
function Subscribe() {
  return (
    <section
      className="max-container  flex justify-between items-center max-lg:flex-col gap-10"
      id="contact-us"
    >
      <h3 className="text-3xl  leading-[68px] lg:max-w-md font-sans font-bold ">
        Sign up from
        <span className="text-custom-color"> updates</span> & Newsletter
      </h3>
      <div className=" lg:max-w-[40%] w-full  flex  items-center sm:border max-sm:flex-col gap-5 p-2.5 sm:border-slate-400 rounded-full">
        <input type="text" placeholder="subsribe@nike.com" className="input" />
        <div className="flex max-sm:justify-end items-center max-sm:w-full">
          <Button fullwidth label="sign-up" />
        </div>
      </div>
    </section>
  );
}

export default Subscribe;

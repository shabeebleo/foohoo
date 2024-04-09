import React from "react";
import { reviews } from "../constants";
import ReviewCard from "../components/ReviewCard";

function CustomerReview() {
  return (
    <section>
      <h3 className="font-bold text-center font-sans text-4xl">
        what Our <span className="text-custom-color">Customers </span>Say?
      </h3>
      <p className="info-text m-auto text-center mt-4 max-w-lg">Hear genuine review from our customers and their exceptional exprerience with us.</p>
      <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
        {reviews.map((review,index)=>(
          <ReviewCard {...review} key={review.customerName}/>
        ))}
      </div>
    </section>
  );
}

export default CustomerReview;

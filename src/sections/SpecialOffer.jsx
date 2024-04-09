import React from 'react'
import Button from '../components/Button'
import { offer } from '../assets/images'
import { arrowRight } from '../assets/icons'

function SpecialOffer() {
  return (
  <section className='flex justify-between max-xl:flex-col-reverse max-container gap-10'>
    <div className='object-contain'>
      <img src={offer} width={773} height={687}   alt="" />
    </div>
  <div>
        <h2 className="mt-10 capitalize font-bold text-4xl max-sm:text-[72px] max-sm:leading-[82px]">
      
          <span className="text-custom-color">Special </span>
          
          <span className="text-custom-color leading-5">Offer </span>
       
        </h2>
        <p className="text-slate-700 info-text lg:max-w-lg text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
        Discover our special offer, featuring exclusive deals on a wide range of products! Explore discounts, limited-time promotions, and unbeatable prices across our collection. Don't miss out on these extraordinary savings. Shop now and elevate your shopping experience with our exciting special offers!
        </p>
        <div className="flex flex-wrap gap-4 mt-11">
          <Button label="Shop now" b iconUrl={arrowRight} />
          <Button label="Learn More" backgroundColor="bg-white" borderColor="border-slate-400" textColor='text-slate-400' />
        </div>
      </div>
  </section>
  )
}

export default SpecialOffer
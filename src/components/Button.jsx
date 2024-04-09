
import React from 'react';

function Button({ label, iconUrl, backgroundColor, textColor, borderColor , fullwidth}) {
  return (
    <button className={`flex justify-center border items-center px-7 py-4 font-sans rounded-full
      ${backgroundColor ? backgroundColor : 'bg-custom-color'} ${textColor ? textColor : 'text-white'} ${borderColor ? borderColor : 'border-custom-color'} ${fullwidth&&'w-full'}`}>
      {label} 
      {iconUrl && (
        <img className="ml-2 rounded-full w-5 h-5" src={iconUrl} alt="" />
      )}
    </button>
  );
}

export default Button;


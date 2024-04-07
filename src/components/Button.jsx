import React from 'react'

function Button({label,iconUrl}) {
  return (
    <button className='flex justify-center items-center px-7 py-4  font-sans rounded-full bg-custom-color text-white border'>{label} 
   {iconUrl && (
            <img className="ml-2 rounded-full w-5 h-5" src={iconUrl} alt="" />
          )}
    </button>
  )
}

export default Button
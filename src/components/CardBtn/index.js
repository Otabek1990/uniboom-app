import React from 'react'

function CardButton({children, icon, heart}) {
  return (
    <button className="py-2 pl-2 pr-2 bg-blue-200 rounded text-white-300 flex max-w-full">
      <img src={icon} className="mr-2.5" alt="" />
      {children}
      <img src={heart} alt="" />
    </button>
  )
}
export default CardButton

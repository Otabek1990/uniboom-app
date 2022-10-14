/* eslint-disable prettier/prettier */
import React from 'react'

function CardButton({children}) {
  return (
    <button className="py-2 pl-2 pr-2 bg-blue-200 rounded text-white-300">
      {children}
    </button>
  )
}
export default CardButton

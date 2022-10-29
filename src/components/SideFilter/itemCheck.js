import React from 'react'

function ItemCheck({type}) {
  return (
    <li className="mb-7 flex">
      <input type="checkbox" className="outline-0 mr-2" />
      <p className="text-base">{type}</p>
    </li>
  )
}

export default ItemCheck

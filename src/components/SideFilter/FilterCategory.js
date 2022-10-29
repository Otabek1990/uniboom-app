import React from 'react'
import ItemCheck from './itemCheck'

function FilterCategory({text, types}) {
  return (
    <ul>
      <li className="flex justify-between my-7">
        <button className="font-bold">{text}</button>
        <button className="text-gray-100">Сбросить </button>
      </li>
      {types.map(type => (
        <ItemCheck type={type} />
      ))}
    </ul>
  )
}

export default FilterCategory

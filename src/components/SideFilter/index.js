import React from 'react'
import FilterCategory from './FilterCategory'
import {filterTypes} from './SideFilterDatas'

function SideFilter() {
  return (
    <ul className="w-72 text-base p-7">
      <h2 className="text-md">Смартфоны Apple</h2>
      <p className="text-gray-100">159 товаров</p>
      <li className="flex justify-between my-7">
        <button className="font-bold">Цена</button>
        <button className="text-gray-100">Сбросить </button>
      </li>
      <li className="flex justify-between mb-7">
        <input
          type="number"
          className="w-[6.875rem] border-2 border-gray-2000 outline-0 px-2"
        />
        <input
          type="number"
          className="w-[6.875rem] border-2 border-gray-2000 outline-0 px-2"
        />
      </li>
      <li>
        <input
          id="default-range"
          type="range"
          value="50"
          class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
        />
      </li>
      <li>
        {filterTypes.map(item => (
          <FilterCategory {...item} />
        ))}
      </li>
    </ul>
  )
}

export default SideFilter

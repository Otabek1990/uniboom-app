import React from 'react'

import phonebg from '../../assets/images/slider_1_1.png'

function Homebannerleft() {
  return (
    <div className=" container col-span-3 rounded-xl gap-16 max-w-full flex justify-between items-center px-12  bg-[url('/src/assets/images/slider_1.png')] bg-no-repeat bg-center bg-cover ">
      <div className=" ">
        <h2 className=" mb-4 font-semibold text-lg">
          Тяжёлое машиностроение — это <br /> вам не песнь светлого будущего
        </h2>
        <span className="text-base font-normal text-black opacity-50  ">
          {' '}
          Вот вам яркий пример современных тенденций — <br /> экономическая
          повестка сегодняшнего дня создаёт.
        </span>
        <button className="py-2 px-4 mt-12 bg-blue-300 rounded text-white-300 shadow hover:shadow-2xl block mb-14">
          Узнать больше
        </button>
        <i className="fa fa-angle-left  mr-2 bg-gray-200 bg-opacity-30 py-3 px-4 rounded hover:shadow-xl"></i>
        <i className="fa fa-angle-right bg-gray-200 bg-opacity-30  py-3 px-4 rounded hover:shadow-xl"></i>
      </div>
      <div className="  ">
        <img src={phonebg} alt="" />
      </div>
    </div>
  )
}

export default Homebannerleft

import React from 'react'
import './Homebannerleft.css'

import phonebg from '../../assets/images/slider_1_1.png'

function Homebannerleft() {
  return (
    <div className="Homepageleft max-w-full  flex justify-between items-center px-20 ">
      <div className="Bannerleft  ">
        <h2 className=" mb-4 font-semibold text-lg">
          Тяжёлое машиностроение — это <br /> вам не песнь светлого будущего
        </h2>
        <span className="text-md font-normal text-black opacity-50  ">
          {' '}
          Вот вам яркий пример современных тенденций — <br /> экономическая
          повестка сегодняшнего дня создаёт.
        </span>
        <button className="py-2 px-4 mt-12 bg-blue-300 rounded text-white-300 shadow hover:shadow-2xl block mb-14">
          Узнать больше
        </button>
        <i className="fa fa-angle-left  mr-2 bg-gray-200 opacity-70 py-3 px-4 rounded "></i>
        <i className="fa fa-angle-right bg-gray-200 opacity-70 py-3 px-4 rounded"></i>
      </div>
      <div className="Banneright ">
        <img src={phonebg} alt="" />
      </div>
    </div>
  )
}

export default Homebannerleft

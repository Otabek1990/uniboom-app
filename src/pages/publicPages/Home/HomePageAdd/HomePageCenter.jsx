import React from 'react'
import month from '../../../../assets/images/month_1.png'

function HomePageCenter(props) {
  return (
    <div className=" flex bg-yellow spacing w-full justify-between items-center rounded-md mt-8">
      <div className="flex w-50% items-center">
        <h3 className="pl-12 text-lg text-white-100 font-extrabold ">
          Ноутбуки в рассрочку
        </h3>
        <h4 className="pl-5 text-md white-500 font-bold">до 12 месяцев</h4>
      </div>
      <div className="">
        <img src={month} alt="rasm../" />
      </div>
    </div>
  )
}

export default HomePageCenter

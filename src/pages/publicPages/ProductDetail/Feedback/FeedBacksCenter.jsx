import React from 'react'
import star from '../../../../assets/icons/star.svg'
import star1 from '../../../../assets/icons/star1.svg'

function FeedBacksCenter() {
  return (
    <div>
      <div className="flex  mt-5 ">
        <div className="mr-52">
          <h2 className="font-raleway not-italic font-bold text-base">
            Gulnoza
          </h2>
          <h2 className="font-raleway  not-italic font-normal text-base text-gray-100 mt-5">
            Ташкент
          </h2>
          <p className="font-raleway not-italic font-normal text-[12px] text-gray-100 mt-5">
            17.06.2022
          </p>
          <p className="font-raleway not-italic font-normal text-[12px] text-gray-100">
            19:30:09
          </p>
        </div>
        <div>
          <div className="flex">
            <img className="mr-3" src={star1} alt="" />
            <img className="mr-3" src={star1} alt="" />
            <img className="mr-3" src={star1} alt="" />
            <img className="mr-3" src={star1} alt="" />
            <img src={star} alt="" />
          </div>
          <h2 className="font-raleway  not-italic font-normal text-base text-black mt-5">
            Прежде всего, перспективное планирование предоставляет широкие
            возможности для системы обучения кадров, соответствующей насущным
            потребностям. Приятно, граждане, наблюдать, как интерактивные
            прототипы, вне зависимости от их уровня, должны быть представлены в
            исключительно положительном свете.
          </h2>
        </div>
      </div>
      <div className="flex  mt-5 ">
        <div className="mr-52">
          <h2 className="font-raleway not-italic font-bold text-base">Артур</h2>
          <h2 className="font-raleway  not-italic font-normal text-base text-gray-100 mt-5">
            Ташкент
          </h2>
          <p className="font-raleway not-italic font-normal text-[12px] text-gray-100 mt-5">
            17.06.2022
          </p>
          <p className="font-raleway not-italic font-normal text-[12px] text-gray-100">
            19:30:09
          </p>
        </div>
        <div>
          <div className="flex">
            <img className="mr-3" src={star1} alt="" />
            <img className="mr-3" src={star1} alt="" />
            <img className="mr-3" src={star1} alt="" />
            <img className="mr-3" src={star1} alt="" />
            <img src={star} alt="" />
          </div>
          <h2 className="font-raleway  not-italic font-normal text-base text-black mt-5">
            Вася не нравится дорого и неэффективно. И за эти деньги можно
            собрать крутой ПК Даже игровые компьютеры стоит меньше кто такой же
            производительностью. Короче отстой Я верну MacBook
          </h2>
        </div>
      </div>
    </div>
  )
}

export default FeedBacksCenter

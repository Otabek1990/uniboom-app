import React from 'react'
import Noutbook from './assets/images/favorite_1.png'
import Heart from './assets/icons/heart.svg'
import Shop from './assets/icons/shopping-cart-white.svg'
import Bag from './assets/icons/bag-2.svg'
import Car from './assets/icons/car.svg'
import RecoveryConvert from './assets/icons/recovery-convert.svg'
import MoneyChange from './assets/icons/money-change.svg'

function ProductInfoImg() {
  return (
    <div className="px-24">
      <div className=" mb-5">
        <h3 className="text-gray-200 w-1/4 text-base font-normal flex justify-between my-10">
          <span>Каталог товаров</span> / <span>Электроника</span>/
          <span className="text-[#000] font-bold">Ноутбуки</span>
        </h3>
        <h1 className="text-[1.5rem] leading-tight font-semibold">
          Ноутбук Apple Macbook Air 13 2020 / M1 / 8GB / 256GB / Apple graphics
          7-core, серебристый
        </h1>
        <h3 className="my-5 text-base font-bold">
          Магазин: <span className="text-blue-300">BSB STORE</span>{' '}
        </h3>
      </div>
      <div className="grid grid-flow-col auto-cols-auto gap-x-6 font-releway grid-rows-4  ">
        <div className="grid grid-cols-6  row-span-4 ">
          <div className="flex flex-col ">
            <img
              src={Noutbook}
              alt="..."
              className="border border-solid p-1 rounded  mb-5"
            />
            <img
              src={Noutbook}
              alt="..."
              className="border border-solid p-1 rounded mb-5"
            />
            <img
              src={Noutbook}
              alt="..."
              className="border border-solid p-1 rounded mb-5"
            />
            <img
              src={Noutbook}
              alt="..."
              className="border border-solid p-1 rounded mb-5"
            />
            <img
              src={Noutbook}
              alt="..."
              className="border border-solid p-1 rounded "
            />
          </div>
          <div className="col-span-5 ml-5">
            <img src={Noutbook} alt="..." className="w-full h-full" />
          </div>
        </div>
        <div className="bg-[#FAFAFA] border border-solid border-gray-200 py-5 px-7 rounded-xl row-span-3">
          <div className="flex justify-between ">
            <div>
              <p className="text-base font-semibold leading-tight text-[1.5rem] pb-5 ">
                Коротко о продукте
              </p>
              <h2>О продукте</h2>
              <div className=" font-normal text-gray-100 text-base">
                <p className="mb-2">Бренд</p>
                <p className="mb-2">Модель</p>
                <p className="mb-2">Операционной системы</p>
                <p className="mb-2">Цвет</p>
                <p className="mb-2">Диагональ</p>
                <p className="mb-2">Процессор</p>
                <p className="mb-2">Оперативная память</p>
                <p className="mb-2">Hard (SSD)</p>
              </div>
            </div>
            <div className="flex flex-col justify-end text-right ">
              <p className="mb-2">Apple</p>
              <p className="mb-2">Macbook Air 13 2020</p>
              <p className="mb-2">MacOS</p>
              <p className="mb-2">Silver</p>
              <p className="mb-2">13.3”</p>
              <p className="mb-2">M1</p>
              <p className="mb-2">8 GB</p>
              <p className="mb-2">256 GB</p>
            </div>
          </div>
          <h3 className="text-center text-base font-bold text-blue-200">
            Все характеристики
          </h3>
        </div>
        <div className="row-span-4 w-[28rem]">
          <div className="rounded-xl border border-solid px-5 py-7 ">
            <div className="flex justify-between items-center">
              <h2>
                25 000 000 <span>сум</span>
              </h2>
              <img
                src={Heart}
                alt="...."
                className="border border-solid rounded p-1"
              />
            </div>
            <button className="bg-blue-300 my-5  text-white-100 flex items-center py-2 w-full justify-center font-normal text-base rounded">
              <img src={Shop} alt="..." />
              Добавить в корзину
            </button>
            <button className="border border-solid border-blue-300 text-blue-300 py-2 w-full text-base font-normal rounded">
              Купить сейчас
            </button>
          </div>
          <div className="flex flex-col border border-solid rounded-xl p-5">
            <button className="font-normal text-base bg-[#ECECEC] rounded py-2 mb-5">
              По <span className="font-bold">2 500 000</span> сум / на
              <span className="font-bold">12</span> мес.
            </button>
            <button className="bg-blue-200 text-base font-normal py-2 rounded text-white-100">
              Купить в рассрочку
            </button>
          </div>
          <div className="grid grid-cols-2 ">
            <div className="flex flex-col justify-between">
              <h2 className="flex text-base font-normal">
                <img src={Bag} alt="..." />
                Магазин
              </h2>
              <h2 className="flex text-base font-normal">
                <img src={Car} alt="..." />
                Доставка
              </h2>
              <h2 className="flex text-base font-normal">
                <img src={RecoveryConvert} alt="..." />
                Условия возврата
              </h2>
              <h2 className="flex text-base font-normal">
                <img src={MoneyChange} alt="..." />
                Способы оплаты
              </h2>
            </div>
            <div className="font-bold text-right">
              <h2 className="text-base">BSB STORE</h2>
              <h2 className="text-base">Есть</h2>
              <h2 className="text-base">Есть, 10 дней</h2>
              <h2 className="text-base">PayMe, Humo, UZCARD, Apelsin, Click</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductInfoImg

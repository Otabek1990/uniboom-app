import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../../assets/icons/logo.svg'
import search from '../../assets/icons/search-normal.svg'
import heart from '../../assets/icons/heart.svg'
import cart from '../../assets/icons/shopping-cart.svg'
import menu from '../../assets/icons/menu.svg'

function HeaderBottom() {
  return (
    <div className="flex items-center justify-between  px-24 h-[70px] py-4 border-t border-solid">
      <div className="flex">
        <Link to={'/'}>
          <img className="mr-12" src={logo} alt="" />
        </Link>
        <Link to={'/catalog'}>
          <button className="bg-blue-200 rounded px-4 py-2 text-white-100 mr-12 flex text-base ">
            <img className="mr-3" src={menu} alt="" /> Каталог
          </button>
        </Link>
      </div>
      <div className="border-2  px-5 rounded py-2 flex w-1/3 ">
        <input
          placeholder="Поиск товаров"
          className="border-none outline-none w-full bg-white-300"
          type="text"
        />
        <img src={search} alt="" />
      </div>
      <div className="flex">
        <div className="flex">
          <p className="flex items-center pr-16 text-base">
            <img src={heart} alt="" className="mr-3" />
            Избранные
          </p>
          <Link to="/basket" className="flex items-center text-base ">
            <img src={cart} alt="" className="mr-3" />
            Корзинка
          </Link>
        </div>
        <Link to={'/login'}>
          <button className="bg-[transparent] border border-blue-200 px-4 py-2 rounded text-blue-200 ml-11 text-base">
            Войти
          </button>
        </Link>
      </div>
    </div>
  )
}
export default HeaderBottom

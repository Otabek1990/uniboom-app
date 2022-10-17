/* eslint-disable prettier/prettier */
/* eslint-disable import/no-unresolved */
import React from 'react'
// eslint-disable-next-line import/no-extraneous-dependencies
import {Navigation, Pagination, Autoplay} from 'swiper'
// eslint-disable-next-line import/no-extraneous-dependencies
import {Swiper, SwiperSlide} from 'swiper/react'
import {products} from '../../data'
import CardButton from '../CardButton/Cardbutton.jsx'
import ShoppingCart from '../../assets/icons/shopping-cart.svg'
import Heart from '../../assets/icons/heart.svg'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

function index(_props) {
  // const Recomended = products.filter(Curdata => Curdata.category.Recommend)
  // const Filter=(NewProduct)=>{const result=products.filter((Curdata)=> return Curdata.category === NewProduct)}
  return (
    <div className="bg-white-100 mt-12">
      <div className="wrap_title flex justify-between">
        <h3 className="text-2xl mb-4 font-semibold text-black leading=[120%]">
          Новые товары
        </h3>
        <p className="text-blue-200">Все товари</p>
      </div>
      <div className="Posts">
        <Swiper
          slidesPerView={5}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          className="mySwiper"
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          navigation={{
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next',
          }}
        >
          {products
            .filter(product => product.category === 'NewProduct')
            .map(post => (
              <SwiperSlide
                className="box p-4 bg-white-300 border-1 border-solid divide-white-200 "
                key={post.id}
              >
                <img src={post.image} alt="" />
                <p className="my-2.5">{post.title}</p>
                {/* <span className="px-2 py-[5] rounded bg-red-200 text-white-300 mt=[5]">
                  {post.discount}
                </span> */}
                <div className="price">
                  <h6 className="text-gray-100 line-through">{post.price}</h6>
                  <h6 className="text-blue-200 mb-5" style={{fontSize: '24px'}}>
                    {post.salePrice}
                  </h6>
                </div>
                <div className="cardBottom flex whitespace-nowrap">
                  <CardButton icon={ShoppingCart}>В корзину</CardButton>
                  <img
                    className="p-2 border border-white-200 rounded rounded-2 ml-5 "
                    src={Heart}
                    alt=""
                  />
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  )
}

export default index

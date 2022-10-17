/* eslint-disable import/no-unresolved */
import React from 'react'
// eslint-disable-next-line import/no-extraneous-dependencies
import {Navigation} from 'swiper'
// eslint-disable-next-line import/no-extraneous-dependencies
import {Swiper, SwiperSlide, useSwiper} from 'swiper/react'
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
    <div className="bg-white-100 mt-12 ">
      <h3 className="text-2xl font-semibold text-black leading=[120%]">
        Рекомендуем вам
      </h3>
      <div className="wrap_slide flex relative justify-between">
        <div className="pagenation flex my-5">
          <h5 className="py-2 px-4 bg-gray-200 mr-5 rounded text-gray-100 hover:bg-blue-300 hover:text-white-100">
            Товары со скидкой
          </h5>
          <h5 className="py-2 px-4 bg-gray-200 mr-5 rounded text-gray-100 hover:bg-blue-300 hover:text-white-100">
            Товары по рассрочке
          </h5>
          <h5 className="py-2 px-4 bg-gray-200 mr-5 rounded text-gray-100 hover:bg-blue-300  hover:text-white-100">
            Топ продаж
          </h5>
        </div>
        <div className="next_prev text-white-300 relative">
          <div class="swiper-button-next text-xs py-2.5 px-4 bg-blue-400"></div>
          <div
            class="swiper-button-prev bg-blue-400 py-2.5 px-4"
            style={{left: '-80px'}}
          ></div>
        </div>
      </div>
      <div className="Posts relative">
        <Swiper
          modules={[Navigation]}
          slidesPerView={5}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          className="mySwiper "
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
          <swiper-wrapper>
            {products
              .filter(product => product.category === 'Recommend')
              .map(post => (
                <SwiperSlide
                  className="box p-4 bg-white-300 border-1 border-solid divide-white-200 "
                  key={post.id}
                >
                  <img src={post.image} alt="" />
                  <p className="my-2.5">{post.title}</p>

                  <span className="px-2 py-[5] rounded bg-red-200 text-white-300 mt=[5]">
                    {post.discount}
                  </span>
                  <div className="price">
                    <h6 className="text-gray-100 line-through">{post.price}</h6>{' '}
                    <h6
                      className="text-blue-200 mb-5"
                      style={{fontSize: '24px'}}
                    >
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
          </swiper-wrapper>
        </Swiper>
      </div>
    </div>
  )
}

export default index

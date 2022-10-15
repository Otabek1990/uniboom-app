import React from 'react'

import compbg from '../../assets/images/product_1.png'

function Homebannerright() {
  return (
    <div className="Homebannerright">
      <div className="box   pt-20 border-0 bg-[#FAFAFA] rounded-lg h-full inline-block text-center">
        <img className="px-8   " src={compbg} alt="" />
        <p className="mac font-normal text-thin  ">
          {' '}
          MacBook Pro 13 inch 8/256/A2338{' '}
        </p>
        <span className="price font-md text-black mt-2.5 font-semibold block mb-3 ">
          14 000 000 сум
        </span>{' '}
        <i className="fa fa-angle-left  mr-2 bg-blue-400 py-3 px-4 rounded"></i>
        <i className="fa fa-angle-right bg-blue-400 py-3 px-4 rounded"></i>
      </div>
    </div>
  )
}

export default Homebannerright

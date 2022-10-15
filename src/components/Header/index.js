import React from 'react'
import HeaderBottom from './HeaderBottom.jsx'
import HeaderTop from './HeaderTop.jsx'

function Header() {
  return (

    <div className="w-10 p-[10px] max-w-full">

      <HeaderTop />
      <HeaderBottom />
    </div>
  )
}

export default Header

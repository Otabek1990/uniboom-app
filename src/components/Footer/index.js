import React from 'react'
import {categories} from './footerDatas'
import FooterMainGenerator from './footerMainGenerator'

function Footer() {
  return (
    <footer className="bg-white-300  lg:text-left  p-24 pt-12 pb-7">
      <FooterMainGenerator data={[...categories]} />

      <div className="border-solid border-t-2  text-gray-700 text-center p-4">
        <p className="text-gray-100">UniStore | Все права защищены. 2022</p>
      </div>
    </footer>
  )
}

export default Footer

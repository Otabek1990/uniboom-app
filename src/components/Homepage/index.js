import React from 'react'
import Homebannerleft from './Homebannerleft.jsx'
import Homebannerright from './Homebannerright.jsx'

function Homepage() {
  return (
    <div className=" px-10 grid  grid-cols-4 bg-white-100 my-12 gap-6">
      <Homebannerleft />
      <Homebannerright />
    </div>
  )
}

export default Homepage

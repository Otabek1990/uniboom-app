import React from 'react'
import Homebannerleft from './Homebannerleft.jsx'
import Homebannerright from './Homebannerright.jsx'

function Homepage() {
  return (
    <div className="Homepagebanner container mx-auto bg-white-100  grid grid-cols-[4fr__1fr] my-12 gap-4">
      {/* <div className="toptext flex justify-between">
        <h1 className="title text-md mb-4">Будьте в курсе происходящего</h1>
        <h1 className="title text-md mb-4">Товары дня</h1>
      </div> */}

      <Homebannerleft />
      <Homebannerright />
    </div>
  )
}

export default Homepage

import React from 'react'
import DeclarationRight from './DeclarationRight.jsx'
import DeclationLeft from './DeclationLeft.jsx'

function Declaration() {
  return (
    <div className=" gap-6 h-full grid grid-cols-4 py-8">
      <DeclationLeft />
      <DeclarationRight />
    </div>
  )
}

export default Declaration

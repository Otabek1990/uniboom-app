import React from 'react'
import {Link} from 'react-router-dom'

function CatalogItemsMap({elm}) {
  return (
    <div className="">
      {elm.map(item => (
        <Link className="text-base font-normal mb-11 cursor-pointer whitespace-nowrap inline-block">
          {item}
        </Link>
      ))}
    </div>
  )
}

export default CatalogItemsMap

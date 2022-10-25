import React from 'react'
import {catalogs} from '../../../datas/catalog'
import CatalogItemMap from './CatalogItemMap.jsx'

function CatalogItem() {
  const filter = catalogs.filter(elm => elm.id === 1)
  return (
    <div className="px-24 py-10 w-full">
      {filter.map((item, index) => (
        <div className="">
          <CatalogItemMap item={item} index={index} />
        </div>
      ))}
    </div>
  )
}

export default CatalogItem

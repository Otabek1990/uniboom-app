import React from 'react'
import {catalogs} from '../../../datas/catalog'
import CatalogItemMap from './CatalogItemMap.jsx'

function CatalogItem() {
  const filter = catalogs.filter(elm => elm.id === 1)
  return (
    <div className="py-10 w-full pl-24">
      {filter.map((item, index) => (
        <div key={item.id}>
          <CatalogItemMap item={item} index={index} />
        </div>
      ))}
    </div>
  )
}

export default CatalogItem

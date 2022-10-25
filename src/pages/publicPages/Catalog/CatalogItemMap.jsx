import React from 'react'
import CatalogItemsMap from './CatalogItemsMap.jsx'

function CatalogItemMap({item}) {
  return (
    <>
      <h1>{item.catalogName}</h1>
      <div className="grid grid-cols-4 mt-10 gap-44">
        {item.catalogDatas.map(elm => (
          <div>
            <h2 className="text-base text-black font-bold mb-11 whitespace-nowrap">
              {elm.title}
            </h2>
            <CatalogItemsMap elm={elm.Items} key={elm.id} />
          </div>
        ))}
      </div>
    </>
  )
}

export default CatalogItemMap

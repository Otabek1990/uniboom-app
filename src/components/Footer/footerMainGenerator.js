import React from 'react'
import {Link} from 'react-router-dom'

function FooterMainGenerator(props) {
  const categories = props.data
  return (
    <div className="grid desktop:grid-cols-5 tablet:grid-cols-4 justify-center">
      {categories.map(category =>
        !category.icons ? (
          <div key={category.id} className="mb-6">
            <h5 className="uppercase font-bold mb-2.5 text-black">
              {category.name}
            </h5>

            <ul className="list-none mb-0 p-2">
              {category.links.map(item => (
                <li
                  key={item.text}
                  className="hover:text-blue-200 duration- text-gray-100 py-5"
                >
                  <Link to={item.href}>{item.text}</Link>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div key={category.id} className="mb-6">
            <h5 className="uppercase font-bold mb-2.5 text-black">
              {category.name}
            </h5>

            <ul className="list-none flex mb-0 items-center">
              {category.links.map(item => (
                <li key={item.icon} className="py-5 pr-8">
                  <Link to={item.href}>
                    <img
                      className="hover:fill-blue-200"
                      src={item.icon}
                      alt={item.icon}
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ),
      )}
    </div>
  )
}
export default FooterMainGenerator

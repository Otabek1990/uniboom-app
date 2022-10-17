import React from 'react'
import {Routes, Route} from 'react-router-dom'
import {publicRoutes} from './routes/publicRoutes'

function UnsignedUser() {
  return (
    <div>
      <Routes>
        {publicRoutes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
    </div>
  )
}

export default UnsignedUser

import React from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import ProductDetail from './pages/publicPages/ProductDetail'
import SignedUser from './SignedUser.jsx'
import UnsignedUser from './UnsignedUser.jsx'

function App() {
  const loggedIn = false
  return (
    <div className="">
      <Header />
      {loggedIn ? <SignedUser /> : <UnsignedUser />}
      <Footer />
      <ProductDetail />
    </div>
  )
}

export default App

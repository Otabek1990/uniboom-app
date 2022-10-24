import React from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
// import ProductDetailInfo from './pages/publicPages/ProductDetail/ProductDetailInfo.jsx'
import SignedUser from './SignedUser.jsx'
import UnsignedUser from './UnsignedUser.jsx'

function App() {
  const loggedIn = false
  return (
    <div className="">
      <Header />
      {loggedIn ? <SignedUser /> : <UnsignedUser />}

      <Footer />
      {/* <ProductDetailInfo /> */}
    </div>
  )
}

export default App

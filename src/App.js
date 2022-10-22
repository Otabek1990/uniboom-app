import React from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import Basket from './pages/publicPages/Basket'
import SignedUser from './SignedUser.jsx'
import UnsignedUser from './UnsignedUser.jsx'

function App() {
  const loggedIn = false
  return (
    <div className="">
      <Header />
      {loggedIn ? <SignedUser /> : <UnsignedUser />}

      <Footer />
      <Basket />
    </div>
  )
}

export default App

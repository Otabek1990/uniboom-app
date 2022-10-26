import React from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import Profile from './pages/privatePages/Profile'
import SignedUser from './SignedUser.jsx'
import UnsignedUser from './UnsignedUser.jsx'

function App() {
  const loggedIn = false
  return (
    <div className="">
      <Header />
      <Profile />
      {loggedIn ? <SignedUser /> : <UnsignedUser />}

      <Footer />
    </div>
  )
}

export default App

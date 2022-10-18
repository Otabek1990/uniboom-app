import React from 'react'
import HomePageAds from './HomepageAds.jsx'
import HomePageAdsBottom from './HomePageAdsBottom.jsx'

function Home() {
  return (
    <div>
      <h1>Asosiy sahifa</h1>
      <HomePageAds bgColor="bg-red-500" />
      <HomePageAds bgColor="bg-yellow" />
      <HomePageAdsBottom />
    </div>
  )
}

export default Home

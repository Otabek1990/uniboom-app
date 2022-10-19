import React from 'react'
import Homebannerleft from './Homebannerleft.jsx'
import Homebannerright from './Homebannerright.jsx'
import HomePageAds from './HomepageAds.jsx'
import HomePageAdsBottom from './HomePageAdsBottom.jsx'

function Home() {
  return (
    <div>
      <div className="w-full grid  grid-cols-4 my-12 gap-6">
        <Homebannerleft />
        <Homebannerright />
      </div>

      <HomePageAds bgColor="bg-red-500" />
      <HomePageAds bgColor="bg-yellow" />
      <HomePageAdsBottom />
    </div>
  )
}

export default Home

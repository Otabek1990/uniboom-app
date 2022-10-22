import React from 'react'
import FeedBacksBottom from './FeedBacksBottom.jsx'
import FeedBacksCenter from './FeedBacksCenter.jsx'
import FeedBacksTop from './FeedBacksTop.jsx'

function FeedBacks() {
  return (
    <div className=" w-[70%] mt-14">
      <FeedBacksTop />
      <FeedBacksCenter />
      <FeedBacksBottom />
    </div>
  )
}

export default FeedBacks

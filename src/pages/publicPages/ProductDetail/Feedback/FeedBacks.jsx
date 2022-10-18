import React from 'react'
import FeedBacksBottom from './FeedBacksBottom.jsx'
import FeedBacksCenter from './FeedBacksCenter.jsx'
import FeedBacksTop from './FeedBacksTop.jsx'

function FeedBacks() {
  return (
    <div className=" px-24 w-[70%]">
      <FeedBacksTop />
      <FeedBacksCenter />
      <FeedBacksBottom />
    </div>
  )
}

export default FeedBacks

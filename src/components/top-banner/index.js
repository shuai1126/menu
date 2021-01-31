import React, { memo } from 'react'
import './style.css'

export default memo(function TopBanner() {

  return (
    <div className="top-banner">
      <h1 className="app-title">菜谱大全</h1>
    </div>
  )
})

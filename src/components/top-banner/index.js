import React, { memo } from 'react'
import './style.css'

export default memo(function TopBanner() {

  return (
    <div className="top-banner">
      <div className="app-title" style={{fonSize:"15px"}}>菜谱大全</div>
    </div>
  )
})

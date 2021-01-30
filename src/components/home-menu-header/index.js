import React, { Component } from 'react';
import './style.css'
export default function HomeMenuHeader (props) {
  console.log(props);
  const { title } = props
  return (
    <div className="h-menu-header">
      <h4>{title}</h4>
      <span className="more">更多</span>
    </div>
  )
}

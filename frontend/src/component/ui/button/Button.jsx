import React from 'react'
import "../../../index.css"
import { ArrowRightOutlined } from '@ant-design/icons'

const Button = ({content , widht , height , isicon , onClick}) => {
  return (
    <div>
      <button className='layout-button' style={{width : `${widht}px`, height:`${height}px`}} onClick={onClick}>{content}{isicon && <ArrowRightOutlined style={{paddingLeft : `${10}px`}}/>}</button>
    </div>
  )
}

export default Button

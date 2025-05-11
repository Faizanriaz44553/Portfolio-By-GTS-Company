import React from 'react'
import "../../../index.css"
import { ArrowRightOutlined } from '@ant-design/icons'

const Button = ({content , widht , height , isicon , onClick}) => {
  return (
    <div>
      <button className='layout-button' style={{width : `${widht}px`, height:`${height}px` , cursor: 'pointer' , transition:`${0.5}s`}} onClick={onClick}>{content}{isicon && <ArrowRightOutlined style={{paddingLeft : `${10}px`}}/>}</button>
    </div>
  )
}

export default Button

import React from 'react'
import './EnvornmentSection.css'
import Button from '../ui/button/Button'

const EnvornmentSection = ({trueColum , path , para , isHeading}) => {
  return (
    <div className={trueColum ? 'EnvornmentSection-main-container-2' : 'EnvornmentSection-main-container'}>
      <div className="EnvornmentSection-child-div-1">
           <img className='EnvornmentSection-image' src={path}  alt="" />
      </div>
      <div className="EnvornmentSection-child-div-2">
      {isHeading && <h1 className='EnvornmentSection-heading'>{isHeading}</h1>}
          <p className='EnvornmentSection-para'style={!trueColum ? {color: 'black'} : null}>{para}</p>
          <Button
            content="let started"
            widht={150}
            height={50}
            isicon={true}
          />
      </div>
    </div> 
  )
}

export default EnvornmentSection

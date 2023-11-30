import React from 'react'
import './Input.css'


function Input(props) {
    const {Type = 'text', children, ...rest} = props
    return (
        <>
          <span className={`leadgen-coffee-input-sec ${Type}`}{...rest }>{children}</span>
        </>
    )
  }
  
export default Input
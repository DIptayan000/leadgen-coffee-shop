import React from 'react'
import './Forms.css'


function Forms(props) {
    const {FormType = 'text', children, ...rest} = props
    return (
        <>
          <form className={`leadgen-coffee-input-sec ${FormType}`}{...rest }>{children}</form>
        </>
    )
  }
  
export default Forms
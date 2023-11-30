import React from 'react'
import './Typography.css'


function Typography(props) {
    const {align = 'center', children, ...rest} = props
    return (
        <>
          <div className={`leadgen-coffee-typography-sec ${align}`}{...rest }>{children}</div>
        </>
    )
  }
  
export default Typography
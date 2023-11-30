import React from 'react'
import './Link.css'


function Link(props) {
    const {Linksec = 'first', children, ...rest} = props
    return (
        <>
          <button className={`leadgen-coffee-link-sec ${Linksec}`}{...rest }>{children}</button>
        </>
    )
  }
  
export default Link
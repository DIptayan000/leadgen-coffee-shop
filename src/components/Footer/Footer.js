import React from 'react'
import './Footer.css'


function Footer(props) {
    const {section = 'copyright', children, ...rest} = props
    return (
        <>
          <footer className={`leadgen-coffee-footer-sec ${section}`}{...rest }>{children}</footer>
        </>
    )
  }
  
export default Footer
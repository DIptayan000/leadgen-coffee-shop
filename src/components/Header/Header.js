import React from 'react'
import './Header.css'

function Header(props) {
    const {section = 'logo', children, ...rest} = props
    return (
        <>
            <div className={`leadgen-coffee-shop-heading ${section}`} {...rest}>{children}</div>
        </>
    )
}

export default Header
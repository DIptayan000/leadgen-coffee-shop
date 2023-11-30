import React from 'react'
import './Button.css'

function Button(props) {
    const {variant = 'primary', children, ...rest } = props
    return (
        <>
            <div className="leadgen-coffee-shop-btn"><button className={`button ${variant}`} {...rest}>{children}</button></div>
        </>
    )
}

export default Button
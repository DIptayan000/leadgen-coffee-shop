import React from 'react'
import './Headline.css'

function Headline(props) {
    const {size = 'Xsmall', children, ...rest} = props
    return (
        <>
            <h1 className={`leadgen-coffee-shop-heading ${size}`} {...rest}>{children}</h1>
        </>
    )
}

export default Headline

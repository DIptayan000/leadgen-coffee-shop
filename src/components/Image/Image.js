import React from 'react'
import './Image.css'

function Image(props) {
    const {size = 'ExtrasmallLogoImage', children, ...rest } = props
    return (
        <>
            <span className={`leadgenimg ${size}`} {...rest}>{children}</span>
        </>
    )
}

export default Image
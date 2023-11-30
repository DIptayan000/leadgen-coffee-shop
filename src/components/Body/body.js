import React from 'react'
import './body.css'

export const body = (props) => {
  const {align = 'left', children, label, ...rest} = props
  return (
    <>
        <p className={`leadgen-textarea ${align}`} {...rest}>{children}<span>{label}</span></p>
    </>
  )
}

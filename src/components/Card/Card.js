import React from 'react'
import './Card.css'

// export const card (props) => {
//   const {variant = 'Vertical', children, ...rest } = props
//   return (
//     <div className={`leadgen-coffee-card-sec ${variant}`}{...rest }>{children}</div>
//   )
// }


function Card(props) {
  const {variant = 'Vertical', children, ...rest} = props
  return (
      <>
        <div className={`leadgen-coffee-card-sec ${variant}`}{...rest }>{children}</div>
      </>
  )
}

export default Card

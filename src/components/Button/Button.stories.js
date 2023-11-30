import React from 'react'
import Button from './Button'

export default {
    title: 'Button',
    component: Button,
}

// Button Component
export const Primary = () => <Button variant="primary">Book Now</Button>
export const Secondary = () => <Button variant="secondary">Reservation</Button>
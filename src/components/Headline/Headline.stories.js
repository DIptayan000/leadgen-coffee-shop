import React from 'react'
import Headline from './Headline'

export default {
    title: 'Headline',
    component: Headline,
}

// Heading Component

export const Xsmall = () => <Headline size="Xsmall">Welcome to coffee shop</Headline>

export const small = () => <Headline size="small">Welcome to coffee shop</Headline>

export const large = () => <Headline size="large">We created best coffee experience for you and your family.</Headline>

export const Xlarge = () => <Headline size="Xlarge">Book A Tabel</Headline>




import React from 'react'
import Link from './Link'
import { linkTo } from '@storybook/addon-links';

export default {
    title: 'Link',
    component: Link,  
}

// Link Component
export const first = () => 
<Link onClick={linkTo('Link', 'second')}>Call Here</Link>

export const second = () => 
<Link onClick={linkTo('Link', 'first')}>Download</Link>

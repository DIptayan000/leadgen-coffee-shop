import React from 'react'
import Header from './Header'
import {ExtrasmallLogoImage} from '../Image/Image.stories'
import { Secondary } from '../Button/Button.stories'

export default {
    title: 'Header',
    component: Header,
}

// Header logo Component
export const Logo = () => 
    <Header section="Logo"><ExtrasmallLogoImage /></Header>

// Header Navs Component
export const Navs = () => 
    <Header section="Navs">
        <ul className="nav leadgen-nav-link">
            <li className="nav-item">About</li>
            <li className="nav-item">Contact</li>
            <li className="nav-item">Blog</li>
            <li className="nav-item"><Secondary /></li>
        </ul>
    </Header>
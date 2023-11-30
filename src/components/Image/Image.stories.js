import React from 'react'
import Image from './Image'
import logo from '../../assests/images/logo.png'
import hero from '../../assests/images/hero-text.png'
import application from  '../../assests/images/application-screenshot-img-06.png'
import gallery1 from  '../../assests/images/agency-work-13.jpg'

export default {
    title: 'Image',
    component: Image,  
}

// Image Component
    export const LargeBannerImage = () => 
        <Image size="LargeBannerImage">
            <img src={hero} alt="leadgen-coffee-shop-banner"/>
        </Image>

    export const MediumCommonImage = () => 
        <Image variant="MediumCommonImage">
            <img src={application} alt="leadgen-coffee-shop-medium"/>
        </Image>

    export const SmallGalleryImage = () => 
        <Image variant="SmallGalleryImage">
            <img src={gallery1}  alt="leadgen-coffee-shop-gallery"/>
        </Image>

    export const ExtrasmallLogoImage = () => 
        <Image variant="ExtrasmallLogoImage">
            <img src={logo} alt="leadgen-coffee-shop-logo"/>
        </Image>


import React from 'react'
import Footer from './Footer'
import facebook from  '../../assests/images/icons8-facebook-24.png'
import instagram from  '../../assests/images/icons8-instagram-24.png'
import linkedin from  '../../assests/images/icons8-linkedin-24.png'
import whatsapp from  '../../assests/images/icons8-whatsapp-24.png'

export default {
    title: 'Footer',
    component: Footer,  
}

export const Copyright = () => 
<Footer section="Copyright">
    <p className="leadgen-coffee-footer-para">© 2023 LEADGEN IS PROUDLY POWERED BY AYATA.</p>
</Footer>

export const Socialmedia = () => 
<Footer section="Socialmedia">
    <div className="leadgen-coffee-footer-link-social">
        <ul className="nav">
            <li className="nav-item">
                <img src={facebook} alt="leadgen-coffee-shop-banner"/>
            </li>
            <li className="nav-item">
                <img src={instagram} alt="leadgen-coffee-shop-banner"/>
            </li>
            <li className="nav-item">
                <img src={linkedin} alt="leadgen-coffee-shop-banner"/>
            </li>
            <li className="nav-item">
                <img src={whatsapp} alt="leadgen-coffee-shop-banner"/>
            </li>
        </ul>
    </div>
</Footer>
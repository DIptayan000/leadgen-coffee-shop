import React from 'react'
import {Logo} from '../components/Header/Header.stories'
import {Navs} from '../components/Header/Header.stories'

function Header() {
  return (
    <>  
        {/* Header Section Start */}
        <header className="leadgen-coffee-shop-header-main">
            <div className="container">
                <nav className="navbar navbar-light leadgen-header-navbar">
                    <Logo />
                    <Navs />
                </nav>
            </div>        
        </header>
        {/* Header Section Ends*/}
    </>
  )
}

export default Header
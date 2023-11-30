import React from 'react'
import {Copyright} from '../components/Footer/Footer.stories'
import {Socialmedia} from '../components/Footer/Footer.stories'

function Footer() {
  return (
        <>
            {/* Footer Section Start */}
            <div className="leadgen-coffee-shop-footer-main">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6"><Socialmedia /></div>
                        <div className="col-sm-6"><Copyright /></div>
                    </div>
                </div>
            </div>
            {/* Footer Section Ends */}
        </>
  )
}

export default Footer

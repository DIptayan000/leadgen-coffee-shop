import React from 'react'
import Card from './Card'
import gallery1 from  '../../assests/images/agency-work-13.jpg'
import restaurant from  '../../assests/images/restaurant-chef-01.jpg'

export default {
    title: 'Card',
    component: Card,  
}

// Card Vertical Component
export const Vertical = () => 
<Card variant="Vertical">
    <div className="leadgen-coffee-card-vertical">
        <div className="card">
            <div className="card-img-sec">
            <img className="card-img-top" src={gallery1} alt="Card image cap"/>
            </div>
            <div className="card-body">
                <h5 className="card-heading-eyebrow">Coffee Traveler</h5>
                <h1 className="card-heading-eyebrow">Recommended by our chef Nicole Jones</h1>
                <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.
                </p>
                {/* <div className="leadgen-card-btn">Click here</div> */}
                <div className="leadgen-coffee-cta-link">
                    <span className="leadgen-card-btn" to="tel:5551234567″">Call us now !</span>
                </div>
            </div>
        </div>
    </div>
</Card>

// Card Horizontal Component
export const Horizontal = () => 
<Card variant="Horizontal">
    <div className="leadgen-coffee-card-horizontal">
    <div className="container">
        <div className="row">
            <div className="col-sm-6 hori-left">
                <div className="hori-left-inner">
                    <h5 className="card-heading-horizontal-eyebrow">Coffee Traveler</h5>
                    <h1 className="card-heading-horizontal-heading">Recommended by our chef Nicole Jones</h1>
                    <p className="card-text-horizontal">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.
                    </p>
                    <p className="card-text-horizontal">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>

                    <div className="leadgen-hori-card-btn">Click here</div>
                </div>
            </div>
            <div className="col-sm-6">
                <img className="card-img-top" src={restaurant} alt="Card image cap"/>
            </div>
        </div>
    </div>
    </div>
</Card>
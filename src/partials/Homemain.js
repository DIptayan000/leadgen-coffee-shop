import React from 'react'
import {LargeBannerImage}  from '../components/Image/Image.stories'
import {MediumCommonImage}  from '../components/Image/Image.stories'
import {Horizontal} from '../components/Card/Card.stories'
import {Typographycenter} from '../components/Typography/Typography.stories'
import {Typographyleft} from '../components/Typography/Typography.stories'
import {Vertical} from '../components/Card/Card.stories'
import {Primary} from '../components/Button/Button.stories'
import {BookingForm} from '../components/Forms/Forms.stories'
import {Xlarge} from '../components/Headline/Headline.stories'
import Header from '../partials/Header'
import Footer from '../partials/Footer'


function Homemain() {
  return (
    <>
       {/*Header Section imported*/}
        <Header />

        {/*Leadgen Coffee shop Home Middle Section */}
        <section className="leadgen-coffee-shop-main-sec" >
            <div className="leadgen-coffee-shop-main-home-sec" data-testid="leadgen-coffee-shop-main-home-sec">
                <LargeBannerImage />
            </div>
            {/* Leadgen coffee shop Banner Image component div ends here*/}

            <div className="leadgen-coffee-shop-about-sec">
              <div className="container">
                  <div className="row">
                      <div className="col-sm-6 typo-sec">
                        <Typographyleft />
                         <Primary />
                      </div>
                      <div className="col-sm-6 img-sec"><MediumCommonImage /></div>
                  </div>
              </div>
            </div>
             {/* Leadgen coffee shop Image, Button and Typographyleft component div ends here*/}
   
            <div className="leadgen-coffee-shop-testimonial-chef">
                <div className="leadgen-coffee-shop-testimonial-chef-para"><Typographycenter /></div>
                <Horizontal />
            </div>
            {/* Leadgen coffee shop Horizontal card and Typographycenter component div ends here*/}

            <div className="leadgen-coffee-shop-card">
               <div className="container">
                    <div className="leadgen-coffee-shop-card-text">
                        <Typographycenter />
                    </div>
                    <div className="row">
                        <div className="col-sm-4"><Vertical /></div>
                        <div className="col-sm-4"><Vertical /></div>
                        <div className="col-sm-4"><Vertical /></div>
                    </div>
               </div>
            </div>
            {/* Leadgen coffee shop vertical card and Typographycenter component div ends here*/}

            <div className="leadgen-coffee-shop-form">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6"><Typographyleft /></div>
                        <div className="col-sm-6">
                            <Xlarge />
                            <BookingForm />
                        </div>
                    </div>
                </div>
            </div>
            {/*Leadgen coffee shop Booking form component and Lefttypography component divs ends here*/}

        </section>
        {/*Leadgen Coffee Home Middle Section Ends*/}

        {/*Footer Section imported */}
        <Footer />
    </>
  )
}

export default Homemain
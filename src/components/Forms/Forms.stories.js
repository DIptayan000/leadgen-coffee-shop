import React from 'react'
import Forms from './Forms'
import {Text} from '../Input/Input.stories'
import {Email} from '../Input/Input.stories'
import {Textarea} from '../Input/Input.stories'
import {Submit} from '../Input/Input.stories'
import {Search} from '../Input/Input.stories'

export default {
    title: 'Forms',
    component: Forms,  
}

// Form Component (Booking)
export const BookingForm = () => 
<Forms FormType="BookingForm">
    <div className="leadgen-coffee-booking-form"><Text /></div>
    <div className="leadgen-coffee-booking-form"><Email /></div>
    <div className="leadgen-coffee-booking-form"><Textarea /></div>
    <div className="leadgen-coffee-booking-sub-form"><Submit /></div>
</Forms>

export const SearchForm = () => 
<Forms FormType="SearchForm">
    <div className="leadgen-coffee-booking-form"><Text /></div>
    <div className="leadgen-coffee-booking-sub-form"><Search /></div>
</Forms>

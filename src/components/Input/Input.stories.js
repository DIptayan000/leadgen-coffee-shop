import React from 'react'
import Input from './Input'

export default {
    title: 'Input',
    component: Input,  
}

// Input Components
export const Text = () => 
<Input type="Text">
    <input type="text" className="leadgen-coffee-input name" name="username" placeholder="*Your Name" role="username"/>
</Input>

export const Email = () => 
<Input type="Email">
    <input type="email" className="leadgen-coffee-input email" name="useremail" placeholder="*Your Email"/>
</Input>

export const Password = () => 
<Input type="Password">
    <input type="password" className="leadgen-coffee-input pwd" name="pwd"/>
</Input>

export const Textarea = () =>
<Input type="Textarea">
    <textarea className="leadgen-coffee-input textarea" name="textarea" rows="4" cols="50" placeholder="*Your Message"></textarea>
</Input>

export const Submit = () => 
<Input type="submit"><input type="submit" className="leadgen-coffee-submit" value="Book Table" role="submit"/></Input>

export const Search = () => 
<Input type="submit"><input type="submit" className="leadgen-coffee-submit" value="Search" role="Search"/></Input>
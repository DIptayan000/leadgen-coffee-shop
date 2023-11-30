import React from 'react';
import {render} from '@testing-library/react';
import Homemain from './Homemain'

describe('Homemain', () => {
    it('Leadgen coffee shop renders text properly', () => {
        const {getByTestId} = render(<Homemain />);
        const result = getByTestId('leadgen-coffee-shop-main-home-sec');
        expect(result).toBeInTheDocument();
    });
    
    // This will return the element (normally an <img>) that has the given alt text.
    it('Leadgen coffee shop renders image properly', () => {
        const {getByAltText} = render(<Homemain />);
        const resultimg = getByAltText('leadgen-coffee-shop-medium');
        expect(resultimg.src).toContain('http://localhost/application-screenshot-img-06.png');
        expect(resultimg).toBeInTheDocument();
    });

    // This will search for all elements with a placeholder attribute and find one that matches the given Text match

    //Check for the '*Your Name' Input field
    it('Leadgen coffee shop booking username input field render properly', () => {
        const {getByPlaceholderText} = render(<Homemain />);
        const resultusername = getByPlaceholderText('*Your Name');
        expect(resultusername).toBeInTheDocument();
    });

    //Check for the '*Your Email' Input field
    it('Leadgen coffee shop booking username input field render properly', () => {
        const {getByPlaceholderText} = render(<Homemain />);
        const resultuseremail = getByPlaceholderText('*Your Email');
        expect(resultuseremail).toBeInTheDocument();
    });

    //Check for the '*Your Message' Textarea field
    it('Leadgen coffee shop booking textarea field render properly', () => {
        const {getByPlaceholderText} = render(<Homemain />);
        const resulttextarea = getByPlaceholderText('*Your Message');
        expect(resulttextarea).toBeInTheDocument();
    });

    //Check for the 'Book Table' Input Button field
      it('Leadgen coffee shop booking textarea field render properly', () => {
        const {getByRole} = render(<Homemain />);
        const resultbooktablebtn = getByRole('submit');
        expect(resultbooktablebtn).toBeInTheDocument();
    });
});
Feature('Leadgen-Coffee-shop');

Scenario('test something',  ({ I }) => {
    //To open a webpage url of Leadgen coffee shop 
    I.amOnPage('http://localhost:3000/');

    // It will enter a text inside a username form field
    I.fillField('username','Davis John');

    // It will enter a text inside a useremail form field
    I.fillField('useremail','miles@davis.com');

    // It will enter a text inside a textarea  form field
    I.fillField('textarea','Lorem Ipsum is simply dummy text of the printing and typesetting industry');

    //It will check for a text on a page
    I.see('Lorem Ipsum is simply dummy text of the printing and typesetting industry.', '.leadgen-coffee-shop-typo-para-text');
    pause();
    
    // Checks that the given input field or textarea equals to given value
    I.seeInField('username', 'Davis John');
    I.seeInField('useremail', 'miles@davis.com');
    I.seeInField('textarea', 'Lorem Ipsum is simply dummy text');
});


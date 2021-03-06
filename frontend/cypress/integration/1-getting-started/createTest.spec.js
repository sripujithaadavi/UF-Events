/// <reference types="cypress" />
describe('test signup function', () => {
  beforeEach(() => {
    cy.visit(' http://localhost:4200/register')  
  })
// cypress testcases to check the format of the signup form
  it('Check if text is present', () => {
    cy.get('h1').contains('SignUp Form')
    cy.get('.mat-form-field.ng-tns-c67-1 > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').should('have.text','Email')
    cy.get('.mat-form-field.ng-tns-c67-2 > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').should('have.text','Password *')
    cy.get('.mat-form-field.ng-tns-c67-3 > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').should('have.text','name *')
  })
// cypress testcases for creating an account
  it('Fill the deatails to create an account', () => {
    cy.get('#mat-input-0').type('nagarjunareddyboya@gmail.com')
    cy.get('#mat-input-1').type('Nagarjuna@123')
    cy.get('#mat-input-2').type('Nagarjuna Reddy Boya')
    cy.get('.mat-button-wrapper').click()

// cypress testcases to check the format of the login form   
    cy.get('h1').should('have.text','Login Form')
    cy.get('.mat-form-field.ng-tns-c67-4 > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').should('have.text','Email')
    cy.get('.mat-form-field.ng-tns-c67-5 > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').should('have.text','Password *')

// cypress testcases to login with the created account details 
    cy.get('#mat-input-3').type('nagarjunareddyboya@gmail.com')
    cy.get('#mat-input-4').type('Nagarjuna@123')

  // cypress testcases to open filters  
    cy.get('.mat-button-wrapper').click()
    cy.get('.group2 > .mat-raised-button').click()

  // cypress testcases to open the create form and check the format of the create form
    cy.get('.mat-menu-trigger').click()
    cy.get('.mat-menu-content > :nth-child(2) > span').click()
    cy.get('h1').should('have.text', 'Create your Event here.')
    cy.get('#mat-hint-0').should('have.text','Enter the event Name')
    cy.get('#mat-hint-1').should('have.text','Provide secondary details')
    cy.get('#mat-hint-2').should('have.text','Please provide description')
    cy.get('#mat-hint-3').should('have.text','Provide the event ticket price')
    cy.get('#mat-hint-4').should('have.text','Please provide address of the Event')
    cy.get('#mat-hint-5').should('have.text','Enter the name of the building where the event is conducted')
    cy.get('.mat-form-field.ng-tns-c67-14 > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').should('have.text','Event Name *')
    cy.get('.mat-form-field.ng-tns-c67-15 > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').should('have.text','Event Info *')
    cy.get('.mat-form-field.ng-tns-c67-16 > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').should('have.text','Description *')
    cy.get('.mat-form-field.ng-tns-c67-17 > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').should('have.text','Sample Description *')
    cy.get('.mat-form-field.ng-tns-c67-19 > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').should('have.text','Category *')

// cypress testcases to enter the details of the first event and publish it
    cy.get('#mat-input-11').type('Mass on the Grass')
    cy.get('#mat-input-12').type('Weekly')
    cy.get('#mat-input-13').type('Celebrate Mass on Ash Wednesday in Campus')
    cy.get('#mat-input-14').type('Celebrate Mass on Ash Wednesday in Campus')
    cy.get('#mat-input-15').clear().type('4')
    cy.get('#mat-input-16').type('In-person')
    cy.get('#mat-input-17').type('Plaza of the Americas')
    cy.get('#mat-input-18').type('2022-05-03T15:00')
    cy.get('.event_form_container__flex > .mat-focus-indicator > .mat-button-wrapper').click()

 // cypress testcases to check the format of the login form   
    cy.get('h1').should('have.text','Login Form')   
    cy.get('.mat-form-field.ng-tns-c67-22 > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').should('have.text','Email')
    cy.get('.mat-form-field.ng-tns-c67-23 > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').should('have.text','Password *')

// cypress testcases to login with the account details to publish the event details
    cy.get('#mat-input-19').type('nagarjunareddyboya@gmail.com')
    cy.get('#mat-input-20').type('Nagarjuna@123')
    cy.get('.login-container__form > .mat-focus-indicator > .mat-button-wrapper').click()

 // cypress testcases to check if the published event details are on the events page   
    cy.contains('Mass on the Grass')
    cy.contains('Weekly')
    cy.contains('4')
    cy.contains('Celebrate Mass on Ash Wednesday in Campus')
    cy.contains('Plaza of the Americas')

 // cypress testcases to open the published event and to see the detailed view of the published event   
    cy.get(':nth-child(1) > .mat-card').click()
    cy.contains('Mass on the Grass')
    cy.contains('Weekly')
    cy.contains('In-person')
    cy.contains('4')
    cy.contains('Celebrate Mass on Ash Wednesday in Campus')
    cy.contains('Plaza of the Americas')

// cypress testcases open new create form to publish another event
    cy.get('.mat-menu-trigger').click()
    cy.get('.mat-menu-content > :nth-child(2) > span').click()

// cypress testcases to check the format of the create form
    cy.get('h1').should('have.text', 'Create your Event here.')
    cy.get('#mat-hint-6').should('have.text','Enter the event Name')
    cy.get('#mat-hint-7').should('have.text','Provide secondary details')
    cy.get('#mat-hint-8').should('have.text','Please provide description')
    cy.get('#mat-hint-9').should('have.text','Provide the event ticket price')
    cy.get('#mat-hint-10').should('have.text','Please provide address of the Event')
    cy.get('#mat-hint-11').should('have.text','Enter the name of the building where the event is conducted')
    cy.get('.mat-form-field.ng-tns-c67-32 > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').should('have.text','Event Name *')
    cy.get('.mat-form-field.ng-tns-c67-33 > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').should('have.text','Event Info *')
    cy.get('.mat-form-field.ng-tns-c67-34 > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').should('have.text','Description *')
    cy.get('.mat-form-field.ng-tns-c67-35 > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').should('have.text','Sample Description *')
    cy.get('.mat-form-field.ng-tns-c67-37 > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').should('have.text','Category *')

// cypress testcases to enter the details of the second event and publish it
    cy.get('#mat-input-27').type('Shaving Cream Showdown')
    cy.get('#mat-input-28').type('Yearly')
    cy.get('#mat-input-29').type('The purpose of this event is to build housing community')
    cy.get('#mat-input-30').type('The purpose of this event is to build housing community')
    cy.get('#mat-input-31').clear().type('10')
    cy.get('#mat-input-32').type('In-person')
    cy.get('#mat-input-33').type('Weaver Hall')
    cy.get('#mat-input-34').type('2022-10-03T16:00')
    cy.get('.event_form_container__flex > .mat-focus-indicator > .mat-button-wrapper').click()

// cypress testcases to check the format of the login form    
    cy.get('h1').should('have.text','Login Form')
    cy.get('.mat-form-field.ng-tns-c67-40 > .mat-form-field-wrapper > .mat-form-field-flex').should('have.text','Email')
    cy.get('.mat-form-field.ng-tns-c67-41 > .mat-form-field-wrapper > .mat-form-field-flex').should('have.text','Password *')

// cypress testcases to login with the account details to publish the event details    
    cy.get('#mat-input-35').type('nagarjunareddyboya@gmail.com')
    cy.get('#mat-input-36').type('Nagarjuna@123')
    cy.get('.login-container__form > .mat-focus-indicator > .mat-button-wrapper').click()

// cypress testcases to check if the published event details are on the events page    
    cy.contains('Shaving Cream Showdown')
    cy.contains('Yearly')
    cy.contains('10')
    cy.contains('The purpose of this event is to build housing community')
    cy.contains('Weaver Hall')

// cypress testcases to open the published event and to see the detailed view of the published event     
    cy.get(':nth-child(2) > .mat-card').click()   
    cy.contains('Shaving Cream Showdown')
    cy.contains('Yearly')
    cy.contains('In-person')
    cy.contains('10')
    cy.contains('The purpose of this event is to build housing community')
    cy.contains('Weaver Hall')

// cypress testcases to logout from the account    
    cy.get('.mat-menu-trigger').click()
    cy.get(':nth-child(3) > span').click()    
  })

// cypress testcases to check the format of the signup form
  it('Check if text is present', () => {
    cy.get('h1').contains('SignUp Form')
    cy.get('.mat-form-field.ng-tns-c67-1 > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').should('have.text','Email')
    cy.get('.mat-form-field.ng-tns-c67-2 > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').should('have.text','Password *')
    cy.get('.mat-form-field.ng-tns-c67-3 > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').should('have.text','name *')
  })

// cypress testcases for creating multiple accounts  
  it('Fill the deatails to create an account', () => {
    cy.get('#mat-input-0').type('sripujithaadavi@gmail.com')
    cy.get('#mat-input-1').type('SriPujitha@123')
    cy.get('#mat-input-2').type('Sri Pujitha Adavi')
    cy.get('.mat-button-wrapper').click()

// cypress testcases to check the format of the login form     
    cy.get('h1').should('have.text','Login Form')
    cy.get('.mat-form-field.ng-tns-c67-4 > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').should('have.text','Email')
    cy.get('.mat-form-field.ng-tns-c67-5 > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').should('have.text','Password *')

// cypress testcases to login with the created account details 
    cy.get('#mat-input-3').type('sripujithaadavi@gmail.com')
    cy.get('#mat-input-4').type('SriPujitha@123')
    cy.get('.mat-button-wrapper').click()

// cypress testcases to open filters    
    cy.get('.group2 > .mat-raised-button').click()
    cy.get('.mat-menu-trigger').click()

// cypress testcases to open the create form and check the format of the create form    
    cy.get('.mat-menu-content > :nth-child(2) > span').click()
    cy.get('h1').should('have.text', 'Create your Event here.')
    cy.get('#mat-hint-0').should('have.text','Enter the event Name')
    cy.get('#mat-hint-1').should('have.text','Provide secondary details')
    cy.get('#mat-hint-2').should('have.text','Please provide description')
    cy.get('#mat-hint-3').should('have.text','Provide the event ticket price')
    cy.get('#mat-hint-4').should('have.text','Please provide address of the Event')
    cy.get('#mat-hint-5').should('have.text','Enter the name of the building where the event is conducted')
    cy.get('.mat-form-field.ng-tns-c67-14 > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').should('have.text','Event Name *')
    cy.get('.mat-form-field.ng-tns-c67-15 > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').should('have.text','Event Info *')
    cy.get('.mat-form-field.ng-tns-c67-16 > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').should('have.text','Description *')
    cy.get('.mat-form-field.ng-tns-c67-17 > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').should('have.text','Sample Description *')
    cy.get('.mat-form-field.ng-tns-c67-19 > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').should('have.text','Category *')
 
// cypress testcases to enter the details of the first event and publish it 
    cy.get('#mat-input-11').type('Tide Slide')   
    cy.get('#mat-input-12').type('Monthly')
    cy.get('#mat-input-13').type('This event is to raise money for Dance Marathon')    
    cy.get('#mat-input-14').type('This event is to raise money for Dance Marathon')   
    cy.get('#mat-input-15').clear().type('1') 
    cy.get('#mat-input-16').type('In-person')
    cy.get('#mat-input-17').type('Fraternity House') 
    cy.get('#mat-input-18').type('2022-04-16T16:30') 
    cy.get('.event_form_container__flex > .mat-focus-indicator > .mat-button-wrapper').click()   
    
// cypress testcases to check the format of the login form      
    cy.get('h1').should('have.text','Login Form')
    cy.get('.mat-form-field.ng-tns-c67-22 > .mat-form-field-wrapper > .mat-form-field-flex').should('have.text','Email')
    cy.get('.mat-form-field.ng-tns-c67-23 > .mat-form-field-wrapper > .mat-form-field-flex').should('have.text','Password *')

// cypress testcases to login with the account details to publish the event details    
    cy.get('#mat-input-19').type('sripujithaadavi@gmail.com')
    cy.get('#mat-input-20').type('SriPujitha@123')    
    cy.get('.login-container__form > .mat-focus-indicator > .mat-button-wrapper').click()    

 // cypress testcases to check if the published event details are on the events page      
    cy.contains('Tide Slide')
    cy.contains('Monthly')
    cy.contains('1')
    cy.contains('This event is to raise money for Dance Marathon')
    cy.contains('Fraternity House')

// cypress testcases to open the published event and to see the detailed view of the published event      
    cy.get(':nth-child(3) > .mat-card').click()
    cy.wait(1000)
    cy.contains('Tide Slide')
    cy.contains('Monthly')
    cy.contains('In-person')
    cy.contains('1')
    cy.contains('This event is to raise money for Dance Marathon')
    cy.contains('Fraternity House')  


// cypress testcases open new create form to publish another event    
    cy.get('.mat-menu-trigger').click()
    cy.get('.mat-menu-content > :nth-child(2) > span').click()

// cypress testcases to check the format of the create form    
    cy.get('h1').should('have.text', 'Create your Event here.')
    cy.get('#mat-hint-6').should('have.text','Enter the event Name')
    cy.get('#mat-hint-7').should('have.text','Provide secondary details')
    cy.get('#mat-hint-8').should('have.text','Please provide description')
    cy.get('#mat-hint-9').should('have.text','Provide the event ticket price')
    cy.get('#mat-hint-10').should('have.text','Please provide address of the Event')
    cy.get('#mat-hint-11').should('have.text','Enter the name of the building where the event is conducted')
    cy.get('.mat-form-field.ng-tns-c67-32 > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').should('have.text','Event Name *')
    cy.get('.mat-form-field.ng-tns-c67-33 > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').should('have.text','Event Info *')
    cy.get('.mat-form-field.ng-tns-c67-34 > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').should('have.text','Description *')
    cy.get('.mat-form-field.ng-tns-c67-35 > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').should('have.text','Sample Description *')
    cy.get('.mat-form-field.ng-tns-c67-37 > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').should('have.text','Category *')   
    cy.get('h1').should('have.text', 'Create your Event here.')
    cy.get('#mat-hint-6').should('have.text','Enter the event Name')
    cy.get('#mat-hint-7').should('have.text','Provide secondary details')
    cy.get('#mat-hint-8').should('have.text','Please provide description')
    cy.get('#mat-hint-9').should('have.text','Provide the event ticket price')
    cy.get('#mat-hint-10').should('have.text','Please provide address of the Event')
    cy.get('#mat-hint-11').should('have.text','Enter the name of the building where the event is conducted')
    cy.get('.mat-form-field.ng-tns-c67-32 > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').should('have.text','Event Name *')
    cy.get('.mat-form-field.ng-tns-c67-33 > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').should('have.text','Event Info *')
    cy.get('.mat-form-field.ng-tns-c67-34 > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').should('have.text','Description *')
    cy.get('.mat-form-field.ng-tns-c67-35 > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').should('have.text','Sample Description *')
    cy.get('.mat-form-field.ng-tns-c67-37 > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').should('have.text','Category *')      

// cypress testcases to enter the details of the second event and publish it
    cy.get('#mat-input-27').type('Southeast Sisterhood Conference')        
    cy.get('#mat-input-28').type('Yearly')        
    cy.get('#mat-input-29').type('A celebration for our Southeast regional chapters.')      
    cy.get('#mat-input-30').type('A celebration for our Southeast regional chapters.')
    cy.get('#mat-input-31').clear().type('15')    
    cy.get('#mat-input-32').type('In-person')    
    cy.get('#mat-input-33').type('Reitz Union')  
    cy.get('#mat-input-34').type('2022-05-03T15:00')        
    cy.get('.event_form_container__flex > .mat-focus-indicator > .mat-button-wrapper').click()
    
// cypress testcases to check the format of the login form     
    cy.get('h1').should('have.text','Login Form')
    cy.get('.mat-form-field.ng-tns-c67-40 > .mat-form-field-wrapper > .mat-form-field-flex').should('have.text','Email')
    cy.get('.mat-form-field.ng-tns-c67-41 > .mat-form-field-wrapper > .mat-form-field-flex').should('have.text','Password *')

// cypress testcases to login with the account details to publish the event details      
    cy.get('#mat-input-35').type('sripujithaadavi@gmail.com')
    cy.get('#mat-input-36').type('SriPujitha@123')    
    cy.get('.login-container__form > .mat-focus-indicator > .mat-button-wrapper').click()

// cypress testcases to check if the published event details are on the events page       
    cy.contains('Southeast Sisterhood Conference')
    cy.contains('Yearly')
    cy.contains('15')
    cy.contains('A celebration for our Southeast regional chapters.')
    cy.contains('Reitz Union')


// cypress testcases to check the format of the event filters
    cy.get('h1').should('have.text','Filter Events')
    cy.get('.group1').should('have.text',' UF-Events ')
    cy.get(':nth-child(1) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').should('have.text','name')
    cy.get(':nth-child(2) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').should('have.text','Event Before')
    cy.get(':nth-child(3) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').should('have.text','Event After')
    cy.get(':nth-child(4) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').should('have.text','priceStart')
    cy.get(':nth-child(5) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').should('have.text','priceEnd')
    cy.get(':nth-child(6) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').should('have.text','SortBy')
    cy.get(':nth-child(7) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').should('have.text','category')

// cypress test cases to check the event filter using name
    cy.get('#mat-input-37').type('Mass on the Grass')
    cy.get('.mat-accent > .mat-button-wrapper').click()
    cy.wait(2000)
    cy.get('.mat-warn > .mat-button-wrapper').click()

// cypress test cases to check the event filter using Event Before
    cy.get('#mat-input-38').type('2022-04-25T12:00')
    cy.get('.mat-accent > .mat-button-wrapper').click()
    cy.wait(2000)
    cy.get('.mat-warn > .mat-button-wrapper').click()

// cypress test cases to check the event filter using Event After
    cy.get('#mat-input-39').type('2022-05-01T13:00')
    cy.get('.mat-accent > .mat-button-wrapper').click()
    cy.wait(2000)
    cy.get('.mat-warn > .mat-button-wrapper').click()

    // cypress test cases to check the event filter using priceStart
    cy.get('#mat-input-40').clear().type('8')
    cy.get('.mat-accent > .mat-button-wrapper').click()
    cy.wait(2000)
    cy.get('.mat-warn > .mat-button-wrapper').click()

// cypress test cases to check the event filter using priceEnd
    cy.get('#mat-input-41').clear().type('6')
    cy.get('.mat-accent > .mat-button-wrapper').click()
    cy.wait(2000)
    cy.get('.mat-warn > .mat-button-wrapper').click()

// cypress test cases to check the event filter using SortBy
    cy.get('#mat-input-42').type('In-person')
    cy.get('.mat-accent > .mat-button-wrapper').click()
    cy.wait(2000)
    cy.get('.mat-warn > .mat-button-wrapper').click()

// cypress test cases to check the event filter using category
    cy.get('#mat-select-value-5').click()
    cy.get('#mat-option-5 > .mat-option-text').click()
    cy.get('.mat-accent > .mat-button-wrapper').click()

// cypress testcases to logout from the account
    cy.get('.mat-menu-trigger').click()
    cy.get('.mat-menu-content > :nth-child(3)').click()




  })
})
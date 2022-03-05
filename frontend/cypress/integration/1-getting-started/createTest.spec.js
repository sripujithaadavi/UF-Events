/// <reference types="cypress" />

describe('test create function', () => {
  beforeEach(() => {
    cy.visit(' http://localhost:4200/create')
    cy.wait(4000)
  })
 
  it('Check if text is present', () => {
      cy.contains('Create your Event here.')

      cy.get('h1').should('have.text', 'Create your Event here.')
      cy.get('#mat-hint-0').should('have.text','Enter the event Name')
      cy.get('#mat-hint-1').should('have.text','Provide secondary details')
      cy.get('#mat-hint-2').should('have.text','Please provide description')
      cy.get('#mat-hint-3').should('have.text','Provide the event ticket price')
      cy.get('#mat-hint-4').should('have.text','Please provide address of the Event')
      cy.get('#mat-hint-5').should('have.text','Enter the name of the building where the event is conducted')
      
  })

  it('Fill the first event details, post and check if it is getting posted', () => {
    cy.wait(2000)
    cy.get('#mat-input-0').type('Mass on the Grass')
    cy.wait(2000)
    cy.get('#mat-input-1').type('Weekly')
    cy.wait(2000)
    cy.get('#mat-input-2').type('Celebrate Mass on Ash Wednesday in Campus')
    cy.wait(2000)
    cy.get('#mat-input-3').type('Celebrate Mass on Ash Wednesday in Campus')
    cy.wait(2000)
    cy.get('#mat-input-4').type('4')
    cy.wait(2000)
    cy.get('#mat-input-5').type('In-person')
    cy.wait(2000)
    cy.get('#mat-input-6').type('Plaza of the Americas')
    cy.wait(2000)
    cy.get('#mat-input-7').type('2022-05-03T15:00')
  })  
})
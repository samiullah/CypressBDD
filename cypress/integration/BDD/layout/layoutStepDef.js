import {Given, When, Then} from 'cypress-cucumber-preprocessor/steps';
/// <reference types="cypress" />

Given('I navigate to todo web app', function(){
    cy.visit('https://todomvc-app-for-testing.surge.sh/')
})

Then('title of the web page should be aligned at center', function(){
    cy.get('h1').should('have.css', 'text-align', 'center')
})

Given('todo input text box should have top, right and bottom padding equal to 16px and left padding equal to 60px', function(){
    cy.get('.new-todo').should('have.css', 'padding', '16px 16px 16px 60px')
})




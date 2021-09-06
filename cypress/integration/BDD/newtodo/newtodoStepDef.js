/// <reference types="cypress" />
// import 'cypress/integration/BDD/layout/layoutStepDef.js';
import {Given, When, Then} from 'cypress-cucumber-preprocessor/steps';


Given('I navigate to todo web app', function(){
    cy.visit('https://todomvc-app-for-testing.surge.sh/')
})

When('I enter task {string}', function(task){
    cy.get('.new-todo').type(task)
    cy.get('.new-todo').type('{enter}')
})

Then('both tasks should be saved in the list', function(){
    cy.get('.todo-list').children('ul>li').should('have.length', 2)
})

Given('I edit the existing task by double clicking', function(){
    cy.get(':nth-child(2) > .view > label').dblclick();
    cy.get('.editing').clear();
    cy.get('.editing').type('My new task{enter}');
   
})

Then('Edited task name should render in the list', function(){
    cy.get(':nth-child(2) > .view > label').contains('My new task').should('be.visible')

})

Given('I delete the first task', function(){
    cy.get('ul > li:nth-child(1) > div > button').invoke('show').click();
})

Then('the task count should be one', function(){
    cy.get('.todo-list').children('ul>li').should('have.length', 1)
})

When('I mark one task as completed', function(){
    cy.get(':nth-child(1) > .view > .toggle').click();

})

Then ('only 1 item should be left as pending', function(){
    cy.get('.todo-count>strong').contains(1).should('be.visible');
})

Given('I switch to completed filter', function(){
    cy.get('ul > li:nth-child(3) > a').click();
})

When('I clear completed tasks', function(){
    cy.get('.clear-completed').click();

})

Then('task list in completed section should get cleared', function(){
    cy.get('.todo-list').children('ul>li').should('have.length', 0)
})

Given('I switch to active filter', function(){
    cy.get('ul > li:nth-child(2) > a').click();

})

Then('task list should have active tasks', function(){
    cy.get('.todo-list').children('ul>li').should('have.length', 1)

})





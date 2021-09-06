Feature: As an end user I should be able to create, edit and delete new or existing todos from my todo list

       As and end user I should
       be able to create a new task
       edit existing task
       delete existing task
       mark task as complete
       clear completed tasks
       filter completed and active tasks

   Scenario: As an end user I should be able to create list of tasks and they should get saved
        Given I navigate to todo web app
        When I enter task "Work on Selenium"
        And I enter task "Work on Cypress"
        Then both tasks should be saved in the list

   Scenario: As an end user I should be able to edit existing task from task list
       Given I edit the existing task by double clicking
       Then Edited task name should render in the list

   Scenario: As an end user I should be able to delete any existing task
      Given I delete the first task
      Then the task count should be one

   Scenario: As an end user I should be able to mark task as completed
       Given I enter task "Work on Selenium part 4"
       When I mark one task as completed
       Then only 1 item should be left as pending

    Scenario: As an end user I should be able to clear completed tasks
      Given I switch to completed filter
      When I clear completed tasks
      Then task list in completed section should get cleared

    Scenario: As an end user I should be able to see Active tasks in the todo app
      Given I switch to active filter
      Then task list should have active tasks


         


  
                 
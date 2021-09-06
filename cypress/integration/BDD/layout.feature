Feature: Web Elements should be aligned at center of homepage in the app

    Scenario: App title should be center aligned
        Given I navigate to todo web app
        Then title of the web page should be aligned at center

    Scenario: todo input text box should have top, right and bottom padding as 16px
        Then todo input text box should have top, right and bottom padding equal to 16px and left padding equal to 60px
            


Feature: Creating a card
    As a third party developer
    I want to be able to allow people to create custom cards based on my webapp

    Scenario: Create card landing page
        When I visit "card/create"
        Then I should get the title "Create a card"
        And there should be a sample image of a credit card

    Scenario: Adding a user
        Given I have a sample pack
        When I visit "card/create"
        And I click "Create Card From Image"
        Then I should see "50" cards
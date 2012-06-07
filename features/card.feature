@pending
Feature: Creating a card
    As a third party developer
    I want to be able to allow people to create custom cards based on my webapp

    Scenario: Adding a user
        When I visit "card/create"
        Then I should get the title "Create a card"
        And there should be a sample image of a credit card
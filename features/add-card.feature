@pending
Feature: Adding a card
    As a third party developer
    I want to be able to allow people to create custom cards based on my webapp

    Background:
        Given I am an authorised user

    Scenario: Adding a user
        When I visit "card/create"
        Then I should get the title "Add a card"
Feature: Creating a card
    As a third party developer
    I want to be able to allow people to create custom cards based on my webapp

    Scenario: Create card landing page
        Given I have a sample pack
        When I visit "/card/create"
        Then I should get the title "Create a card"
        # And there should be a sample image of a credit card

    Scenario: Submitting the card to the moo service
        Given I have a sample pack
        When I visit "/card/create"
        
        And I click "Import image"
        And I click "Add this image thing"
        And I click "Create Card with this image"

        And I click "Generate Cards"
        And I click "Edit Pack"
        Then I should see the moo canvas with my cards preloaded
Feature: Creating a pack
    As a third party developer
    I want to be able to allow people to create custom cards based on my webapp
    This will allow me to add custom cards to a collection

    Scenario: Creating a pack
        When I visit "pack/create"
        Then I should get the title "Create a pack"
        And I click "Create Pack"
        Then I should get the title "Pack Details"

    Scenario: Seeing a pack contents
        Given I have a sample pack
        When I visit "pack/{{sample_pack_id}}"
        And I should have a limit of "50" cards I could create
        And I should see a button or link "Create Card"
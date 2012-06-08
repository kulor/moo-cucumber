Feature: Admin panel
    As a third party developer
    I want to be able to change the settings of my widget

    Scenario: Importing images
        When I visit "image/import"
        And I import the image "http://uk.moo.com/images/logo/logo_no_stripe_green.png"
        And I submit the form
        Then I should see a list of the images I have uploaded

    Scenario: Uploading images
        When I visit "image/upload"
        And I upload a sample image "foo.gif"
        Then I should see a list of the images I have uploaded
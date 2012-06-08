Then /^I should see "(.*?)" cards$/ do |expected_card_count|
    cards = page.all('.card')
    cards.length.should == expected_card_count
end
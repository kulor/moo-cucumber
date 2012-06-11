Then /^I should see "(.*?)" cards$/ do |expected_card_count|
    cards = page.all('.card')
    cards.length.should == expected_card_count
end

Then /^I should see the moo canvas with my cards preloaded$/ do
    page.should have_css('#BCDesignImageUI.current', :text => 'Crop your images')
    sleep 5
end
When /^I import the image "(.*?)"$/ do |url|
    fill_in 'imageUrl', :with => url
end

Then /^I should see a list of the images I have uploaded$/ do
    p page.find('.images')
end
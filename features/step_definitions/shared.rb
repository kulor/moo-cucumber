Given /^I am an authorised user$/ do
  # TODO
end

When /^I visit "(.*?)"$/ do |url|
    visit url
end

Then /^I should get the title "(.*?)"$/ do |title|
    page.find('h1').text.should == title
end
Given /^I am an authorised user$/ do
  # TODO
end

When /^I visit "(.*?)"$/ do |url|
    url = url.sub("{{sample_pack_id}}", @sample_pack_id) if url['{{sample_pack_id}}']
    visit url
end

Then /^I should get the title "(.*?)"$/ do |title|
    page.find('h1').text.should == title
end

Then /^I click "(.*?)"$/ do |button_or_link_text|
    click_on button_or_link_text
end

Then /^I should see "(.*?)" in the task title$/ do |title_text|
    page.should have_css('h2.task', :text => title_text)
end

Then /^I should see a button or link "(.*?)"$/ do |button_text|
    page.should have_css('button,a', :text => button_text)
end

When /^I submit the form$/ do
    page.find('button').click
end
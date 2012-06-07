Then /^there should be a sample image of a credit card$/ do
    page.find('img.sample-card').should be_true
end

Given /^I have a sample pack$/ do
    visit "/pack/create"
    fill_in 'friendlyName', :with => 'sample'
    click_on "Create Pack"
    @sample_pack_id = page.find('#pack-id').text
end

When /^I should have a limit of "(.*?)" cards I could create$/ do |card_limit|
    page.should have_css('#pack-num-cards', :text => card_limit)
end
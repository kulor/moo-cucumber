require 'capybara/mechanize/cucumber'
require 'capybara/cucumber'
require 'rspec/expectations'

Capybara.run_server = false
Capybara.app_host = 'http://localhost:3000'
Capybara.default_selector = :css

Capybara.default_driver = :mechanize
Capybara.default_driver = :selenium if ENV['DRIVER'] == 'js'

Before do |scenario| 
  # As the Moo app will throw alert messages when switching pages
  # or exiting, this can interfere with the Cucumber session (the next scenario may fail)
  begin
      page.driver.browser.switch_to.alert.accept 
  rescue
  end
end
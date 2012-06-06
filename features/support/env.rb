require 'capybara/mechanize/cucumber'
require 'capybara/cucumber'
require 'rspec/expectations'
# require 'debugger'

Capybara.run_server = false
Capybara.app_host = 'http://localhost:9000'
Capybara.default_selector = :css 

Capybara.default_driver = :mechanize
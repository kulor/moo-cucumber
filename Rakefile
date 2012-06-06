task :default => [:test]
task :test => "test:rb"
task :test_dev => "test:dev"

namespace :test do
  desc "Run the features through Cucumber"
  task :rb do
    sh %{ cucumber -t ~@pending -f progress --no-snippets }
  end
  task :dev do
    sh %{ cucumber -t ~@pending ENV=dev }
  end
end
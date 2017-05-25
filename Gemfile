source 'https://rubygems.org'
ruby '2.3.1'

git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?("/")
  "https://github.com/#{repo_name}.git"
end

gem 'react_on_rails', '6.1.2'
gem 'rails', '~> 5.0.1'
gem 'pg', '0.19.0'
gem 'puma', '3.7.1'
gem 'sass-rails', '~> 5.0'
gem 'uglifier', '3.1.4'
gem 'coffee-rails', '~> 4.2'
gem 'omniauth-oauth2', '1.3.1'
gem 'omniauth-linkedin-oauth2'
# gem 'omniauth-oauth2', '~> 1.3.1' #Fix problem with oauth2
gem 'doorkeeper'
gem 'jquery-rails', '4.2.2'
gem 'turbolinks', '~> 5'
gem 'jbuilder', '~> 2.5'
# gem 'bcrypt', '~> 3.1.7'

# Use Capistrano for deployment
# gem 'capistrano-rails', group: :development

group :development, :test do
  # Call 'byebug' anywhere in the code to stop execution and get a debugger console
  gem 'byebug', platform: :mri
  gem 'rspec-rails', '~> 3.5'
  gem 'pry-rails', '0.3.4'
end

group :test do
  gem 'factory_girl_rails', '~> 4.0'
  gem 'shoulda-matchers', '~> 3.1'
  gem 'faker'
  gem 'database_cleaner'
end

group :development do
  # Access an IRB console on exception pages or by using <%= console %> anywhere in the code.
  gem 'web-console', '3.4.0'
  gem 'listen', '~> 3.0.5'
  # Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', '1.2.2', platforms: [:mingw, :mswin, :x64_mingw, :jruby]

gem 'mini_racer', '0.1.7', platforms: :ruby

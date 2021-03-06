Rails.application.config.middleware.use OmniAuth::Builder do
  # provider :linkedin, ENV['LINKEDIN_KEY'], ENV['LINKEDIN_SECRET']
  provider :linkedin, 'key', 'secret',
           scope: 'r_basicprofile',
           fields: ['id', 'first-name', 'last-name', 'picture-url', 'public-profile-url']
end
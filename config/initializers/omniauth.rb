Rails.application.config.middleware.use OmniAuth::Builder do
  # provider :linkedin, ENV['LINKEDIN_KEY'], ENV['LINKEDIN_SECRET']
  provider :linkedin, '86s6phpbfuwa8i', 'qQzkufW5E8AuJwRN',
           scope: 'r_basicprofile',
           fields: ['id', 'first-name', 'last-name', 'picture-url', 'public-profile-url']
end
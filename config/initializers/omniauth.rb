Rails.application.config.middleware.use OmniAuth::Builder do
  provider :linkedin, ENV['LINKEDIN_KEY'], ENV['LINKEDIN_SECRET']

  provider :twitter, '3fIlwh0mQBgi4dOHnPt9IydIx', 'aE9Zdz58O22Tl9YZsIuBfSLp8KhS4UlKUYZKwwpRcCy6cWGDuu'
end
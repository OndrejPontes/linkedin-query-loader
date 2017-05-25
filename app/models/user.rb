class User < ApplicationRecord
  def self.from_omniauth(auth_hash)
    user = find_or_create_by(
        uid: auth_hash['uid'],
        provider: auth_hash['provider'],
        name: auth_hash['info']['name'],
        image_url: auth_hash['info']['image']
    )
    user.is_admin = count == 1
    user.save!
    user
  end
end

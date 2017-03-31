FactoryGirl.define do
  factory :query do
    name { Faker::GameOfThrones.character }
    value { Faker::LordOfTheRings.location }
    keys nil
  end
end
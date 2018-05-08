FactoryBot.define do
  factory :event do
    # name  { Faker::Name.name }
    sequence(:name) {|n| "Event #{n}" }
    location  "Boston"
  end
end

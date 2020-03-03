# frozen_string_literal: true

FactoryBot.define do
  factory :booking do
    label { '2:00 PM' }
    hour { 1 }
    minutes { 30 }
    booked { false }
    doctor { FactoryBot.create(:doctor) }

    user_id { FactoryBot.create(:user) }

    trait :today do
      atend { FactoryBot.create(:atend, :today) }
    end

    trait :tomorrow do
      atend { FactoryBot.create(:atend, :tomorrow) }
    end

    trait :yesterday do
      atend { FactoryBot.create(:atend, :yesterday) }
    end
  end
end

# frozen_string_literal: true

FactoryBot.define do
  factory :atend do
    trait :today do
      date { Time.now }
    end

    trait :tomorrow do
      date { Time.now + 1.day }
    end

    trait :day_after_tomorrow do
      date { Time.now + 2.day}
    end

    trait :yesterday do
      date { Time.now - 1.day }
    end
  end
end

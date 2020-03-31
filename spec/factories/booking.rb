# frozen_string_literal: true

FactoryBot.define do
  factory :booking do
    label { '2:00 PM' }
    hour { 1 }
    minutes { 30 }
    doctor { FactoryBot.create(:doctor) }

    trait :today do
      user_id { FactoryBot.create(:user) }
      atend { FactoryBot.create(:atend, :today) }
    end

    trait :tomorrow do
      user_id { FactoryBot.create(:user) }
      atend { FactoryBot.create(:atend, :tomorrow) }
    end

    trait :yesterday do
      user_id { FactoryBot.create(:user) }
      atend { FactoryBot.create(:atend, :yesterday) }
    end

    trait :today_empty do
      atend { FactoryBot.create(:atend, :today) }
    end

    trait :tomorrow_empty do
      atend { FactoryBot.create(:atend, :tomorrow) }
    end

    trait :yesterday_empty do
      atend { FactoryBot.create(:atend, :yesterday) }
    end
  end
end

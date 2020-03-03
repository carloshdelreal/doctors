# frozen_string_literal: true

FactoryBot.define do
  factory :booking do
    label { '2:00 PM' }
    hour { 1 }
    minutes { 30 }
    booked { false }
    doctor { FactoryBot.create(:doctor) }
    atend { FactoryBot.create(:atend) }
    user_id { FactoryBot.create(:user) }
  end
end

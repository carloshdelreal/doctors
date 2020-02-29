# frozen_string_literal: true

FactoryBot.define do
  factory :doctor do
    sequence(:docname) { |n| "thegooddoctor#{n}" }
    sequence(:location) { |n| "city#{n}" }
    sequence(:fullname) { |n| "Carlos Del Real Estrada#{n}" }
    specialization
  end
end

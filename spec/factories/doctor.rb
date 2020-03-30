# frozen_string_literal: true

FactoryBot.define do
  factory :doctor do
    sequence(:docname) { |n| "thegooddoctor#{n}" }
    sequence(:location) { |n| "city#{n}" }
    sequence(:fullname) { |n| "Carlos Del Real Estrada#{n}" }
    sequence(:experience) { (1..20).to_a.sample }
    sequence(:price) { (50..500).step(50).to_a.sample }
    specialization { FactoryBot.create(:specialization) }
  end
end

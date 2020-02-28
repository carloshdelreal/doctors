# frozen_string_literal: true

FactoryBot.define do
  factory :specialization do
    sequence(:area) { |n| "dermato#{n}logy" }
  end
end

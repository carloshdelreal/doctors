# frozen_string_literal: true

class Atend < ApplicationRecord
  has_many :bookings, dependent: :destroy
  has_many :doctors, through: :bookings, source: 'atend'
  validates :date, presence: true
end

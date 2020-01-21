# frozen_string_literal: true

class Doctor < ApplicationRecord
  belongs_to :specialization

  has_many :appointments, dependent: :destroy
  has_many :patients, through: :appointments, source: 'user'

  has_many :bookings, dependent: :destroy
  has_many :attendings, through: :bookings, source: 'atend'
end

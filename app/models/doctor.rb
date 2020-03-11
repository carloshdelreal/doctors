# frozen_string_literal: true

class Doctor < ApplicationRecord
  belongs_to :specialization

  has_many :appointments, dependent: :destroy
  has_many :patients, through: :appointments, source: 'user'

  has_many :bookings, dependent: :destroy
  has_many :attendings, through: :bookings, source: 'atend'
  validates :docname, presence: true
  validates :location, presence: true
  validates :fullname, presence: true
  before_save :downcase_fields

  def downcase_fields
    docname.downcase!
    fullname.downcase!
  end
end

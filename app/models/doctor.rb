# frozen_string_literal: true

class Doctor < ApplicationRecord
  belongs_to :specialization

  has_many :appointments, dependent: :destroy
  has_many :patients, through: :appointments, source: 'user'

  has_many :bookings, dependent: :destroy
  has_many :attendings, through: :bookings, source: 'atend'
  validates :docname, :location, :fullname, :experience, :price,
            :specialization_id, presence: true

  before_save :downcase_fields

  def downcase_fields
    docname.downcase!
    fullname.downcase!
  end
end

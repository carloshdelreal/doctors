class Booking < ApplicationRecord
  belongs_to :doctor
  belongs_to :atend

  validates :label, :hour, :minutes, :doctor_id, :atend_id, presence: true
  validates :user_id, presence: true, allow_nil: true
end

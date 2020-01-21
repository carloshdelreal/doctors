# frozen_string_literal: true

class Booking < ApplicationRecord
  belongs_to :doctor
  belongs_to :atend
end

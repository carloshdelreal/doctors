# frozen_string_literal: true

class Appointment < ApplicationRecord
  belongs_to :user
  belongs_to :doctor
end

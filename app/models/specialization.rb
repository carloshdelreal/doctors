# frozen_string_literal: true

class Specialization < ApplicationRecord
  validates :area, presence: true
end

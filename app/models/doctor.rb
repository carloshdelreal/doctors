class Doctor < ApplicationRecord
  belongs_to :specialization

  has_many :appointments, dependent: :destroy
  has_many :patients, through: :appointments, source: 'user'
end

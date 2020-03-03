# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Booking, type: :model do
  describe 'Create Booking' do
    it 'Valid create' do
      expect(FactoryBot.build(:booking)).to be_valid
    end
  end

  describe 'Does not create a Booking' do
    it 'with empty doctor' do
      expect(FactoryBot.build(:booking, doctor: nil)).not_to be_valid
    end

    it 'with empty atend' do
      expect(FactoryBot.build(:booking, atend: nil)).not_to be_valid
    end
  end
end

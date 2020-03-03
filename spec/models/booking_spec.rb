# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Booking, type: :model do
  describe 'Create Booking' do
    it 'for today' do
      expect(FactoryBot.build(:booking, :today)).to be_valid
    end

    it 'for tomorrow' do
      expect(FactoryBot.build(:booking, :tomorrow)).to be_valid
    end

    it 'for yesterday' do
      expect(FactoryBot.build(:booking, :yesterday)).to be_valid
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

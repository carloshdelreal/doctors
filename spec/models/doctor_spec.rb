# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Doctor, type: :model do
  describe 'Create Doctor' do
    it 'Valid create' do
      expect(FactoryBot.build(:doctor)).to be_valid
    end
  end

  describe 'Does not create a Doctor' do
    it 'with empty docname' do
      expect(FactoryBot.build(:doctor, docname: nil)).not_to be_valid
    end

    it 'with empty location' do
      expect(FactoryBot.build(:doctor, location: nil)).not_to be_valid
    end

    it 'with empty fullname' do
      expect(FactoryBot.build(:doctor, fullname: nil)).not_to be_valid
    end

    it 'with fullname = empty string "" ' do
      expect(FactoryBot.build(:doctor, fullname: '')).not_to be_valid
    end

    it 'with empty specialization' do
      expect(FactoryBot.build(:doctor, specialization_id: nil)).not_to be_valid
    end
  end
end

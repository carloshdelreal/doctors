require 'rails_helper'

RSpec.describe Atend, type: :model do
  describe 'Create Atend' do
    it 'Valid create' do
      expect(FactoryBot.build(:atend, :today)).to be_valid
    end

    it 'with date tomorrow' do
      expect(FactoryBot.build(:atend, :tomorrow)).to be_valid
    end

    it 'with date yesterday' do
      expect(FactoryBot.build(:atend, :yesterday)).to be_valid
    end
  end

  describe 'Does not create an Atend' do
    it 'with empty date' do
      expect(FactoryBot.build(:atend, date: nil)).not_to be_valid
    end
  end
end

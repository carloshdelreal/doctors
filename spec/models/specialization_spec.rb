require 'rails_helper'

RSpec.describe Specialization, type: :model do
  describe 'Create Specialization' do
    it 'Valid create' do
      expect(FactoryBot.build(:specialization)).to be_valid
    end
  end

  describe 'Cannot create a Specialization' do
    it 'invalid empty specialization' do
      expect(FactoryBot.build(:specialization, area: nil)).not_to be_valid
    end
  end
end

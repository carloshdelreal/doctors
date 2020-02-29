# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Atend, type: :model do
  describe 'Create Atend' do
    it 'Valid create' do
      expect(FactoryBot.build(:atend)).to be_valid
    end
  end

  describe 'Does not create an Atend' do
    it 'with empty date' do
      expect(FactoryBot.build(:atend, date: nil)).not_to be_valid
    end
  end
end

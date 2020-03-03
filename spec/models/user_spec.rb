# frozen_string_literal: true

require 'rails_helper'

RSpec.describe User, type: :model do
  context 'Create a user with valid information' do
    it 'Creates the user' do
      expect(FactoryBot.build(:user)).to be_valid
    end
  end
  context 'Creates a user with invalid information' do
    it 'Creates a user without email' do
      expect(FactoryBot.build(:user, email: nil)).not_to be_valid
    end

    it 'Creates a user without a valid email' do
      expect(
        FactoryBot.build(:user, email: 'antonio.antonio.com')
      ).not_to be_valid
    end

    it 'Creates a user without a valid email regex' do
      expect(FactoryBot.build(:user, email: 'ant')).not_to be_valid
    end

    it 'Creates a user with a password length of 5' do
      expect(FactoryBot.build(:user, password: '12345')).not_to be_valid
    end
  end
end

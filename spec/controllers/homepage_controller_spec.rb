# frozen_string_literal: true

require 'rails_helper'

RSpec.describe HomepageController, type: :controller do
  describe 'Accessing without log in' do
    it 'redirects to login' do
      get :home
      expect(response).to redirect_to new_user_session_path
    end
  end

  describe 'Accessing logged in' do
    it 'responds successfully' do
      user = FactoryBot.create(:user)
      sign_in(user)
      get :home
      respond_to be_success
    end
  end
end

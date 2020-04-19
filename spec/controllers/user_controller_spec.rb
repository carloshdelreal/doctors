require 'rails_helper'

RSpec.describe Api::V1::UserController, type: :controller do
  describe 'Accessing logged in' do
    it 'responds successfully' do
      user = FactoryBot.create(:user)
      sign_in(user)
      get :index
      respond_to be_success
    end
  end

  describe 'Accessing without log in' do
    it 'redirects to login' do
      get :index
      expect(response).to redirect_to new_user_session_path
    end
  end
end

require 'rails_helper'

RSpec.describe Api::V1::SpecializationController, type: :controller do
  describe 'Accessing logged in' do
    it 'responds successfully to index request' do
      user = FactoryBot.create(:user)
      sign_in(user)
      get :index
      respond_to be_success
    end

    it 'responds successfully to show request' do
      user = FactoryBot.create(:user)
      sign_in(user)
      specialization = FactoryBot.create(:specialization)
      get :show, params: { id: specialization.id }
      respond_to be_success
      expect(response.body).to have_content(specialization.area)
    end
  end

  describe 'Accessing without log in' do
    it 'redirects to login when index request' do
      get :index
      expect(response).to redirect_to new_user_session_path
    end

    it 'redirects to login when show request' do
      get :show, params: { id: FactoryBot.create(:specialization).id }
      expect(response).to redirect_to new_user_session_path
    end
  end
end

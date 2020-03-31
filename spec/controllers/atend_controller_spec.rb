require 'rails_helper'

RSpec.describe Api::V1::AtendController, type: :controller do
  describe 'Accessing without log in' do
    it 'redirects to login when index request' do
      get :index
      expect(response).to redirect_to new_user_session_path
    end
  end

  describe 'Accessing logged in' do
    before(:example) do
      user = FactoryBot.create(:user)
      sign_in(user)
    end
    it 'responds successfully to index request' do
      get :index
      respond_to be_success
    end

    it 'shows all future the Atends' do
      FactoryBot.create(:atend, :day_after_tomorrow)
      get :index
      respond_to be_success
      parsed_body = JSON.parse(response.body)
      puts parsed_body
      expect(parsed_body['atends'].length).to be(1)
    end

    it 'does not show the past atends' do
      FactoryBot.create(:atend, :yesterday)
      get :index
      respond_to be_success
      parsed_body = JSON.parse(response.body)
      puts parsed_body
      expect(parsed_body['atends'].length).to be(0)
    end
  end
end

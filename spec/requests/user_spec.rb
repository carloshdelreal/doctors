# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'User Request' do
  describe 'Authorized user requests' do
    before(:example) do
      @user = FactoryBot.create(:user)
      post '/users/sign_in', params: {
        "user": {
          "email": @user.email,
          "password": @user.password,
          'remember_me' => '0'
        }, 'commit' => 'Log in'
      }
      follow_redirect!
    end
    after(:each) do
      expect(response).to have_http_status(200)
      expect(response.content_type).to eq('application/json; charset=utf-8')
    end

    it 'request /api/v1/user' do
      get '/api/v1/user'
      expect(response.body).to eq(@user.to_json)
    end
  end
end

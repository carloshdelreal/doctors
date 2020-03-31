# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'Doctor Request' do
  describe 'Doctors index' do
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
      expect(response.content_type).to eq('application/json; charset=utf-8')
    end

    it 'request /api/v1/doctor/search/:searchstring' do
      s_str = 'carlos'
      FactoryBot.create(:doctor, docname: s_str)
      get "/api/v1/doctor/search/#{s_str}"
      r = JSON.parse response.body
      expect(r.length).to eq(1)
    end

    it 'request /api/v1/doctor/search/:searchstring, empty search' do
      s_str = 'carloskjalsjlajfdkjasdljf'
      FactoryBot.create(:doctor)
      get "/api/v1/doctor/search/#{s_str}"
      r = JSON.parse response.body
      expect(r.length).to eq(0)
    end
  end
end

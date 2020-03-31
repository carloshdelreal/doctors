# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'Specialization Request' do
  describe 'Specialization' do
    before(:example) do
      5.times do
        FactoryBot.create(:specialization)
      end
      @user = FactoryBot.create(:user)
      post '/users/sign_in', params: { "user": { "email": @user.email, "password": @user.password, 'remember_me' => '0' }, 'commit' => 'Log in' }
      follow_redirect!
    end
    after(:each) do
      expect(response).to have_http_status(200)
      expect(response.content_type).to eq('application/json; charset=utf-8')
    end

    it 'request /api/v1/specialization' do
      get '/api/v1/specialization'
      r = JSON.parse response.body
      expect(r.length).to eq(5)
    end

    it 'request /api/v1/specialization/:id' do
      s = FactoryBot.create(:specialization)
      get "/api/v1/specialization/#{s.id}"
    end
  end
end

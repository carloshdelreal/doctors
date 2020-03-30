require 'rails_helper'

RSpec.describe "Doctor Request" do
  describe 'Doctors index' do
    before(:example) do
      @user = FactoryBot.create(:user)
      post '/users/sign_in', params: { "user": { "email": @user.email, "password": @user.password, "remember_me"=>"0"}, "commit"=>"Log in"}
      follow_redirect!
    end
    after(:each) do
      expect(response).to have_http_status(200)
      expect(response.content_type).to eq("application/json; charset=utf-8")
    end

    it 'request /api/v1/doctor' do
      FactoryBot.create(:doctor)
      get '/api/v1/doctor'
      r = JSON.parse response.body
      expect(r.length).to eq(1)
    end

    it 'request /api/v1/doctor empty doctors' do
      get '/api/v1/doctor'
      r = JSON.parse response.body
      expect(r.length).to eq(0)
    end
  end

  describe 'Doctor show' do
    before(:example) do
      @user = FactoryBot.create(:user)
      post '/users/sign_in', params: { "user": { "email": @user.email, "password": @user.password, "remember_me"=>"0"}, "commit"=>"Log in"}
      follow_redirect!
    end
    after(:each) do
      expect(response).to have_http_status(200)
      expect(response.content_type).to eq("application/json; charset=utf-8")
    end

    it 'request /api/v1/doctor/:id' do
      doctor = FactoryBot.create(:doctor)
      get "/api/v1/doctor/#{doctor.id}"
    end
    
  end
end

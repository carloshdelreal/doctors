# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'Home Request' do
  describe 'Unautorized user home request are redirected' do
    after(:each) do
      expect(response).to redirect_to(unauthenticated_root_url)
      follow_redirect!
      expect(response.body).to include('Log in')
      expect(response.body).to include('Sign up')
    end

    it 'request /doctors' do
      get '/doctors'
    end

    it 'request /api/v1/bookings' do
      get '/api/v1/bookings'
    end

    it 'request /api/v1/doctors' do
      get '/api/v1/doctors'
    end
  end

  describe 'Autorized user invalid requests will be redirected to home' do
    before(:example) do
      @user = FactoryBot.create(:user)
      post '/users/sign_in', params: { "user": { "email": @user.email, "password": @user.password, 'remember_me' => '0' }, 'commit' => 'Log in' }
      follow_redirect!
    end

    after(:each) do
      expect(response).to have_http_status(301)
      expect(response).to redirect_to(authenticated_root_url)
    end

    it 'request /lkjasdjfajsd' do
      get '/lkjasdjfajsd'
    end

    it 'request /doctor' do
      get '/doctor'
    end

    it 'request /doctors' do
      get '/doctors'
    end
  end
end

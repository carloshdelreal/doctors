# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'Specialization Request' do
  describe 'Authorized user home requests' do
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

    it 'request /api/v1/user/booking' do
      FactoryBot.create(:booking, :tomorrow, user_id: @user.id)
      FactoryBot.create(:booking, :yesterday, user_id: @user.id)
      get '/api/v1/user/booking'
      r = JSON.parse response.body
      expect(r['booking'].length).to eq(2)
    end

    it 'request /api/v1/user/upcoming' do
      FactoryBot.create(:booking, :tomorrow, user_id: @user.id)
      FactoryBot.create(:booking, :yesterday, user_id: @user.id)
      get '/api/v1/user/upcoming'
      r = JSON.parse response.body
      expect(r['booking'].length).to eq(1)
    end

    it 'request patch /api/v1/booking/:id' do
      booking = FactoryBot.create(:booking, :tomorrow_empty, user_id: @user.id)
      patch "/api/v1/booking/#{booking.id}"
      expect(Booking.find_by(id: booking.id).user_id).to eq(@user.id)
      get '/api/v1/user/upcoming'
      r = JSON.parse response.body
      expect(r['booking'].length).to eq(1)
    end
  end
end

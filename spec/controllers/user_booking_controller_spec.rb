require 'rails_helper'

RSpec.describe Api::V1::User::BookingController, type: :controller do
  describe 'Accessing without log in' do
    it 'redirects to login when index request' do
      get :index
      expect(response).to redirect_to new_user_session_path
    end

    it 'redirects to login when requesting upcoming' do
      get :upcoming
      expect(response).to redirect_to new_user_session_path
    end
  end

  describe 'Accessing logged in' do
    it 'responds successfully to index request' do
      user = FactoryBot.create(:user)
      sign_in(user)
      get :index
      respond_to be_success
    end

    it 'shows all the bookings for the user' do
      user = FactoryBot.create(:user)
      sign_in(user)
      doctor = FactoryBot.create(:doctor)
      FactoryBot.create(
        :booking,
        :tomorrow,
        user_id: user.id,
        doctor_id: doctor.id,
        booked: true
      )
      get :index
      respond_to be_success
      expect(response.body).to have_content(doctor.id)
      expect(response.body).to have_content(doctor.fullname)
    end

    it 'responds successfully to upcoming request' do
      user = FactoryBot.create(:user)
      sign_in(user)
      get :upcoming
      respond_to be_success
    end

    it 'shows all the upcoming bookings for the user' do
      user = FactoryBot.create(:user)
      sign_in(user)
      doctor = FactoryBot.create(:doctor)
      FactoryBot.create(
        :booking,
        :tomorrow,
        user_id: user.id,
        doctor_id: doctor.id,
        booked: true
      )
      get :upcoming
      respond_to be_success
      expect(response.body).to have_content(doctor.id)
      expect(response.body).to have_content(doctor.fullname)
    end
  end
end

require 'rails_helper'

RSpec.describe Api::V1::BookingController, type: :controller do
  describe 'Accessing logged in' do
    before(:example) do
      user = FactoryBot.create(:user)
      sign_in(user)
    end

    it 'responds successfully to index request' do
      doctor = FactoryBot.create(:doctor)
      get :index, params: { doctor_id: doctor.id }
      respond_to be_success
    end

    it 'shows all the bookings for the doctor' do
      doctor = FactoryBot.create(:doctor)
      booking = FactoryBot.create(:booking, :yesterday, doctor: doctor)
      get :index, params: { doctor_id: doctor.id }
      respond_to be_success
      expect(response.body).to have_content(booking.id)
    end

    it 'Updates a booking relating current user to booking' do
      doctor = FactoryBot.create(:doctor)
      booking = FactoryBot.create(:booking, :yesterday, doctor: doctor)
      put :update, params: { id: booking.id }
      expect(response.body).to have_content('{"success":true}')
    end
  end

  describe 'Testing Booking update data' do
    before(:example) do
      user = FactoryBot.create(:user)
      sign_in(user)
      doctor = FactoryBot.create(:doctor)
      FactoryBot.create(:booking, :tomorrow, doctor: doctor)
    end

    it 'Returns success: false when booking an unexisting record' do
      put :update, params: { id: 2000 }
      expect(response.body).to have_content('{"success":false}')
    end

    it 'Returns success: false when booking an already booked record' do
      doctor = FactoryBot.create(:doctor)
      user2 = FactoryBot.create(:user)
      booking2 = FactoryBot.create(
        :booking, :tomorrow, doctor: doctor, user_id: user2.id
      )
      put :update, params: { id: booking2.id }
      expect(response.body).to have_content('{"success":false}')
    end
  end

  describe 'Accessing without log in' do
    it 'redirects to login when index request' do
      doctor = FactoryBot.create(:doctor)
      get :index, params: { doctor_id: doctor.id }
      expect(response).to redirect_to new_user_session_path
    end
  end
end

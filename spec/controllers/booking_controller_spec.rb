# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Api::V1::BookingController, type: :controller do
  describe 'Accessing without log in' do
    it 'redirects to login when index request' do
      get :index
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

    it 'shows all the bookings for the doctor' do
      user = FactoryBot.create(:user)
      doctor = FactoryBot.create(:doctor)
      sign_in(user)
      FactoryBot.create(:booking, :yesterday, doctor: doctor)
      get :index, params: { doctor_id: doctor.id }
      respond_to be_success
      parsed_body = JSON.parse(response.body)
      expect(response.body).to have_content(doctor.id)
    end
  end
end

# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Api::V1::DoctorController, type: :controller do
  describe 'Accessing without log in' do
    it 'redirects to login when index request' do
      get :index
      expect(response).to redirect_to new_user_session_path
    end

    it 'redirects to login when show request' do
      get :show, params: { id: FactoryBot.create(:doctor).id }
      expect(response).to redirect_to new_user_session_path
    end

    it 'redirects to login when search request' do
      get :search, params: { searchstring: :mia }
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

    it 'shows all the created doctors' do
      user = FactoryBot.create(:user)
      sign_in(user)
      5.times do
        FactoryBot.create(:doctor)
      end
      get :index
      respond_to be_success
      parsed_body = JSON.parse(response.body)
      expect(parsed_body.length).to be(5)
    end

    it 'responds successfully to show request' do
      user = FactoryBot.create(:user)
      sign_in(user)
      doctor = FactoryBot.create(:doctor)
      get :show, params: { id: doctor.id }
      respond_to be_success
      expect(response.body).to have_content(doctor.docname)
      expect(response.body).to have_content(doctor.location)
      expect(response.body).to have_content(doctor.fullname)
    end

    it 'search request to be success' do
      user = FactoryBot.create(:user)
      sign_in(user)
      get :search, params: { searchstring: :mia }
      respond_to be_success
    end

    it 'returns the doctor matching the fullname' do
      user = FactoryBot.create(:user)
      doctor = FactoryBot.create(:doctor)
      sign_in(user)
      get :search, params: { searchstring: doctor.fullname }
      respond_to be_success
      expect(response.body).to have_content(doctor.fullname)
    end

    it 'returns the doctor matching the location' do
      user = FactoryBot.create(:user)
      doctor = FactoryBot.create(:doctor)
      sign_in(user)
      get :search, params: { searchstring: doctor.location }
      respond_to be_success
      expect(response.body).to have_content(doctor.location)
    end

    it 'returns the doctor matching the docname' do
      user = FactoryBot.create(:user)
      doctor = FactoryBot.create(:doctor)
      sign_in(user)
      get :search, params: { searchstring: doctor.docname }
      respond_to be_success
      expect(response.body).to have_content(doctor.docname)
    end

    it 'returns maximum 7 items' do
      user = FactoryBot.create(:user)
      sign_in(user)
      loc = 'miami'
      10.times do
        FactoryBot.create(:doctor, location: loc)
      end

      get :search, params: { searchstring: loc }
      respond_to be_success
      parsed_body = JSON.parse(response.body)
      expect(parsed_body.length).to be(7)
      expect(response.body).to have_content(loc)
    end
  end
end

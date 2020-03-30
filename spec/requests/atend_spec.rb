require 'rails_helper'

RSpec.describe "Atend Request" do
  describe 'Atend' do
    before(:example) do
      FactoryBot.create(:atend, :yesterday)
      FactoryBot.create(:atend, :today)
      FactoryBot.create(:atend, :tomorrow)
      @user = FactoryBot.create(:user)
      post '/users/sign_in', params: { "user": { "email": @user.email, "password": @user.password, "remember_me"=>"0"}, "commit"=>"Log in"}
      follow_redirect!
    end
    after(:each) do
      expect(response).to have_http_status(200)
      expect(response.content_type).to eq("application/json; charset=utf-8")
    end

    it 'request /api/v1/atend' do
      get '/api/v1/atend'
      r = JSON.parse response.body
      expect(r.length).to eq(2)
    end
  end
end

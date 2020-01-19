# frozen_string_literal: true

class Api::V1::UserController < ApplicationController
  before_action :set_user, only: %i[show]

  def show
    render json: @user
  end

  private

  def set_user
    @user = User.find(params[:id])
  end
end

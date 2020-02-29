# frozen_string_literal: true

class Api::V1::UserController < ApplicationController
  before_action :set_user, only: %i[index]

  def index
    render json: @user
  end

  private

  def set_user
    @user = current_user
  end
end

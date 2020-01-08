# frozen_string_literal: true

class Api::V1::DoctorController < ApplicationController
  before_action :set_doctor, only: %i[show]

  def index
    render json: Doctor.select(:id, :docname, :location, :fullname, :specialization_id).all
  end

  def show
    render json: @doctor
  end

  private

  def set_doctor
    @doctor = Doctor.select(:id, :docname, :location, :fullname, :specialization_id).find(params[:id])
  end
end

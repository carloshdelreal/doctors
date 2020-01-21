# frozen_string_literal: true

class Api::V1::AppointmentController < ApplicationController
  before_action :set_appointment, only: %i[show]
  before_action :set_doctor, only: %i[index]

  def index
    render json: @doctor_appointments
  end

  def show
    render json: @appointment
  end

  private

  def set_appointment
    @appointment = Appointment.find(params[:id])
  end

  def set_doctor
    @doctor_appointments = Appointment.where(doctor_id: params[:doctor_id])
  end
end

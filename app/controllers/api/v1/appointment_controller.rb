class Api::V1::AppointmentController < ApplicationController
  before_action :set_appointment, only: %i[show]

  def index
    render :json => Appointment.all
  end

  def show
    render :json => @appointment
  end

  private
    def set_appointment
      @appointment = Appointment.find(params[:id])
    end
end
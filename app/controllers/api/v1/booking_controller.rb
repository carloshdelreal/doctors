# frozen_string_literal: true

class Api::V1::BookingController < ApplicationController
  before_action :set_bookings, only: %i[index]

  def index
    render json: { success: true,
                   booking: @bookings.as_json(only: %i[label hour minutes atend_id]) }
  end

  private

  def set_bookings
    @bookings = Booking.where(doctor_id: params[:doctor_id], booked: false)
  end
end

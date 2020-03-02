# frozen_string_literal: true

class Api::V1::BookingController < ApplicationController
  before_action :set_bookings, only: %i[index]

  def index
    render json: {
      booking: @bookings.as_json(
        only: %i[id label hour minutes doctor_id atend_id]
      )
    }
  end

  def update
    booking = Booking.find(params[:id])
    booking.user_id = current_user.id
    booking.booked = true
    if booking.save
      render json: { success: true }
    else
      render json: { success: false }
    end
  end

  private

  def set_bookings
    @bookings = Booking.where(doctor_id: params[:doctor_id], booked: false)
  end
end

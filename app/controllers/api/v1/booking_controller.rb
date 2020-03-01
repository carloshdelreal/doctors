# frozen_string_literal: true

class Api::V1::BookingController < ApplicationController
  before_action :set_bookings, only: %i[index]
  before_action :booking_params, only: %i[create]

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

  def show
    booking = Booking.where(user_id: current_user.id)
    render json: { success: true,
                   booking: booking.as_json }
  end

  private

  def set_bookings
    @bookings = Booking.where(doctor_id: params[:doctor_id], booked: false)
  end

  def booking_params
    params.require(:booking).permit(:booking, :id)
  end
end

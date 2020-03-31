# frozen_string_literal: true

class Api::V1::BookingController < ApplicationController
  before_action :set_bookings, only: %i[index]

  def index
    render json: {
      booking: @bookings.as_json(
        only: %i[id label atend_id]
      )
    }
  end

  def update
    booking = Booking.find_by(id: params[:id])
    booking.user_id = current_user.id if booking && booking.user_id.nil?

    if booking && booking.user_id == current_user.id && booking.save
      render json: { success: true }
    else
      render json: { success: false }
    end
  end

  private

  def set_bookings
    @bookings = Booking.where(doctor_id: params[:doctor_id], user_id: nil)
  end
end

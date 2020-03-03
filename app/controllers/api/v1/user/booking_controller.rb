# frozen_string_literal: true

class Api::V1::User::BookingController < ApplicationController
  before_action :set_bookings, only: %i[index upcoming]
  before_action :filter_upcoming, only: %i[upcoming]

  def index
    render json: { booking: @bookings.as_json }
  end

  def upcoming
    render json: { booking: @bookings.as_json }
  end

  private

  def set_bookings
    all_bookings = Booking.where(user_id: current_user.id)
    @bookings = []
    all_bookings.each do |booking|
      a = Atend.find(booking.atend_id)
      d = Doctor.select(
        :id, :docname, :location, :fullname, :specialization_id
      ).find(booking.doctor_id)

      @bookings.push(
        booking_id: booking.id,
        datetime:
        Time.new(
          a.date.year,
          a.date.month,
          a.date.day,
          booking.hour,
          booking.minutes
        ),
        label: booking.label,
        doctor: d,
        specialty: Specialization.find(d.specialization_id).area
      )
    end
  end

  def filter_upcoming
    @bookings = @bookings[0]
  end
end

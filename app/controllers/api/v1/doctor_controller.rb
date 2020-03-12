# frozen_string_literal: true

class Api::V1::DoctorController < ApplicationController
  before_action :set_doctor, only: %i[show]
  before_action :search_doctor, only: %i[search]

  def index
    render json: Doctor.select(
      :id, :docname, :location,
      :fullname, :specialization_id, :experience, :price
    ).all
  end

  def show
    render json: @doctor
  end

  def search
    render json: @doctor
  end

  private

  def set_doctor
    @doctor = Doctor.select(
      :id, :docname, :location,
      :fullname, :specialization_id, :experience, :price
    ).find_by(id: params[:id])
  end

  def search_doctor
    doctors = Doctor.where(
      'fullname LIKE ? OR location LIKE ? OR docname LIKE ?',
      "%#{params[:searchstring]}%",
      "%#{params[:searchstring]}%",
      "%#{params[:searchstring]}%"
    ).limit(7)

    @doctor = []
    doctors.each do |d|
      @doctor.push(
        id: d.id,
        docname: d.docname,
        location: d.location,
        fullname: d.fullname,
        specialty: Specialization.find(d.specialization_id).area
      )
    end
  end
end

class Api::V1::SpecializationController < ApplicationController
  before_action :set_specialty, only: %i[show]

  def index
    render json: Specialization.select(:id, :area).all
  end

  def show
    render json: @specialty
  end

  private

  def set_specialty
    @specialty = Specialization.select(:id, :area).find(params[:id])
  end
end

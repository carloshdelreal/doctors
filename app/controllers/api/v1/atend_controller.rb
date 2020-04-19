class Api::V1::AtendController < ApplicationController
  before_action :set_atends, only: %i[index]

  def index
    render json: { success: true,
                   atends: @atends.as_json(only: %i[id date]) }
  end

  private

  def set_atends
    @atends = Atend.where('date >= :tomorrow', tomorrow: Time.now + 1.day)
  end
end

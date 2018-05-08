class Api::V1::EventsController < ApiController
  protect_from_forgery unless: -> { request.format.json? }

  def index
    render json: { events: Event.all }
  end

  def show
    render json: { events: Event.find(params[:id]) }
  end
end

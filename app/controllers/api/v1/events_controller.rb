class Api::V1::EventsController < ApiController
  protect_from_forgery unless: -> { request.format.json? }


  def index
    render json: { events: Event.all }
  end

  def show
    render json: { events: Event.find(params[:id]) }
  end

  def create
  @event = Event.new(event_params)
  if @event.save!
    render json: { event: @event }
  else
    render json: { error: @event.errors.full_messages }, status: :unprocessable_entity
    end
  end

  private

  def event_params
   params.require(:event).permit(:name, :location, :description, :event_date, :event_time, :url, :rsvps)
  end
end

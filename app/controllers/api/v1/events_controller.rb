class Api::V1::EventsController < ApiController
  protect_from_forgery unless: -> { request.format.json? }

  def index
    render json: { events: Event.all }
  end

  def show
    render json: { events: Event.find(params[:id]) }
  end

  def create
  data = JSON.parse(request.body.read)
  new_event = Event.new(body: data["body"], time: date["date"], location: data["location"], event_id: data["event_id"])
  post_user = current_user
  new_event.user = post_user
  if new_event.save
    render json: new_event
  else
    error = { id: "error message", body: "Please log in to create an Event"}
    render json: error
  end
end
end

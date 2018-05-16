class Api::V1::RsvpsController < ApiController
  protect_from_forgery unless: -> { request.format.json? }
  skip_before_action :verify_authenticity_token, only: [:create]

  def index
    render json: Rsvp.all
  end

  def create
    event_id = params[:event]
    @new_rsvp = Rsvp.new(user: current_user, event_id: event_id, rsvp: "test data")
    if current_user.nil?
      error = "Please log in to leave an RSVP"
    else
      current_user.rsvps.each do |rsvp|
        if rsvp.event_id == event_id
          error = "One RSVP to a user, please!"
        end
      end
    end
    if @new_rsvp.save
      render json: { rsvpTotal: rsvp_total }
    else
      error = { message: "There was an error persisting your RSVP" }
      render json: error
    end
  end
end

private

def rsvp_total
  Rsvp.all.length
end

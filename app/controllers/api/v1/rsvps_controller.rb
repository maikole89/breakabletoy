class Api::V1::RsvpsController < ApiController
  protect_from_forgery unless: -> { request.format.json? }
  skip_before_action :verify_authenticity_token, only: [:create]

  def index
    render json: Rsvp.all
  end

  def create
    # data = JSON.parse(request.event_rsvps.read)
    event_id = params[:event]
    # error = { id: 'error message', body: ''}
    # @new_rsvp = EventRsvp.new(event_rsvps: data["event_rsvps"], event_id: data["event_id"])
    @new_rsvp = Rsvp.new(user: current_user, event_id: event_id)
    if current_user.nil?
      error = "Please log in to leave an RSVP"
    else
      current_user.rsvps.each do |rsvp|
        if rsvp.event_id == event_id
          error = "One RSVP to a user, please!"
        end
      end
    end
    #
    # if error[:event_rsvps] == ''
    #   @new_rsvp.user = post_user
    # end
    # if @new_rsvp.valid?
    if @new_rsvp.save
      render json: @new_rsvp
    else
      render json: error
    end
  end
end

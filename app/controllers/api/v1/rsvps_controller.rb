class Api::V1::RsvpsController < ApiController
  skip_before_action :verify_authenticity_token, only: [:create]
  def index
    render json: Rsvp.all
  end

  def create
    data = JSON.parse(request.event_Rsvp.read)
    error = { id: 'error message', body: ''}
    new_rsvp = Rsvp.new(event_Rsvp: data["event_Rsvp"], event_id: data["event_id"])
    post_user = current_user
    if !post_user
      error[:event_Rsvp] = "Please log in to leave an RSVP"
    else
      post_user.rsvps.each do |rsvp|
        if rsvp.event_id == new_rsvp.event_id
          error[:event_Rsvp] = "One RSVP to a user, please!"
        end
      end
    end
    if error[:event_Rsvp] == ''
      new_rsvp.user = post_user
    end
    if new_rsvp.valid?
      new_rsvp.save
      render json: new_rsvp
    else
      render json: error
    end
  end
end
end

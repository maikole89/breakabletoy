class EventSerializer < ActiveModel::Serializer
  attributes :id, :name, :location, :description, :event_date, :event_time, :url, :rsvp, :event_id, :user_id
  
  has_many :rsvps
  has_many :users, through: :rsvps


  def user_rsvps
    # We can now access the current_user with the keyword `scope`
    object.rsvps.where(user: scope)
  end
end

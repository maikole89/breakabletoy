class RsvpSerializer < ActiveModel::Serializer
  attributes :id, :rating, :body, :user_id, :user_name
  belongs_to :user
  belongs_to :event

  def rsvp_total
  total = 0
  object.rsvps.each do |rsvp|
    total += rsvp.value
  end
  return total
end

  def user_name
  object.user.username
  end
end

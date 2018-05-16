class Rsvp < ApplicationRecord
  # validates :rsvp, presence: true, exclusion: { in: [nil] }

  belongs_to :event
  belongs_to :user

end

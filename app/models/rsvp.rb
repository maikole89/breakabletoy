class Rsvp < ApplicationRecord
  validates :rsvp, presence: true, exclusion: { in: [nil] }


end

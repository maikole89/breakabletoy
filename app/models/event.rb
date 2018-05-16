class Event < ApplicationRecord
  validates :name, presence: true, exclusion: { in: [nil] }
  validates :location, presence: true, exclusion: { in: [nil] }

  has_many :teams
end

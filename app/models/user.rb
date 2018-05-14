class User < ApplicationRecord
  enum role: [:user, :admin]
after_initialize :set_default_role, :if => :new_record?

def set_default_role
  self.role ||= :user
end
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  has_many :events
  has_many :event_rsvps, through: :rsvp, source: :event, class_name: "Event"

  # mount_uploader :profile_photo, ProfilePhotoUploader
end

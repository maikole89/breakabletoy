class Api::V1::RsvpsController < ApiController
  belongs_to :user
  belongs_to :event
end

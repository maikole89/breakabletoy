class EventSerializer < ActiveModel::Serializer
  attributes :id, :name, :location, :description, :event_date, :event_time, :url
end

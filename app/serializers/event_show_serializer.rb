class EventShowSerializer < ActiveModel::Serializer
  attributes :id, :name, :event_list

  def event_list
    object.events
  end
end

class AddIdToRsvp < ActiveRecord::Migration[5.2]
  def change
    add_column :rsvps, :user_id, :string, null: false
    add_column :rsvps, :event_id, :string, null: false
  end
end

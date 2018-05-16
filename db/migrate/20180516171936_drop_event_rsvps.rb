class DropEventRsvps < ActiveRecord::Migration[5.2]
  def change
    drop_table :event_rsvps do |t|
        t.belongs_to :event
        t.belongs_to :rsvp

        t.timestamps
    end
  end
end

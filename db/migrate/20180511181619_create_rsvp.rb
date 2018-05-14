class CreateRsvp < ActiveRecord::Migration[5.2]
  def change
    create_table :rsvps do |t|
      t.string :rsvp, null: false

      t.timestamps
    end
  end
end

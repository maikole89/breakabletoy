class CreateEvents < ActiveRecord::Migration[5.2]
  def change
    create_table :events do |t|
      t.string :name, null:false
      t.string :location, null:false
      t.text :description, null:false
      t.date :event_date, null:false
      t.time :event_time
      t.string :url
      t.timestamps
      
      t.belongs_to :user
    end
  end
end

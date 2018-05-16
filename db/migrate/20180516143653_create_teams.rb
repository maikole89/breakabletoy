class CreateTeams < ActiveRecord::Migration[5.2]
  def change
    create_table :teams do |t|
      t.string :name, null: false
      t.string :handle
      t.string :abbreviatedName, null: false
      t.string :homeLocation, null: false
      t.string :primaryColor
      t.string :secondaryColor
      t.string :accounts
      t.string :owl_id
      t.string :addressCountry
      t.string :logo
      t.string :icon
      t.string :secondaryPhoto
      t.string :players

      t.timestamps
    end
  end
end

class CreateBookings < ActiveRecord::Migration[6.0]
  def change
    create_table :bookings do |t|
      t.string :label
      t.integer :hour
      t.integer :minutes
      t.boolean :booked
      t.references :doctor, null: false, foreign_key: true
      t.references :atend, null: false, foreign_key: true

      t.timestamps
    end
  end
end

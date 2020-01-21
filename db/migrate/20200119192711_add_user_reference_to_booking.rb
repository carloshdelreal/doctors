class AddUserReferenceToBooking < ActiveRecord::Migration[6.0]
  def change
    add_reference :bookings, :user, null: true, foreign_key: true
  end
end

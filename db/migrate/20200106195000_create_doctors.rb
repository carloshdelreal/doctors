class CreateDoctors < ActiveRecord::Migration[6.0]
  def change
    create_table :doctors do |t|
      t.string :docname
      t.string :location
      t.string :fullname
      t.references :specialization, null: false, foreign_key: true

      t.timestamps
    end
    add_index :doctors, :docname, unique: true
  end
end

class CreateSpecializations < ActiveRecord::Migration[6.0]
  def change
    create_table :specializations do |t|
      t.string :area

      t.timestamps
    end
  end
end

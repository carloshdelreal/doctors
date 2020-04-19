class AddExperienceAndPriceToDoctors < ActiveRecord::Migration[6.0]
  def change
    add_column :doctors, :experience, :integer
    add_column :doctors, :price, :integer
  end
end

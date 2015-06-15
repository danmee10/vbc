class CreateCards < ActiveRecord::Migration
  def change
    create_table :cards do |t|
      t.string :first_name
      t.string :last_name
      t.string :headline
      t.string :company
      t.string :title
      t.string :skills
      t.string :location
      t.string :image
      t.references :user

      t.timestamps null: false
    end
  end
end

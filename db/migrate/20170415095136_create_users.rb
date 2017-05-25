class CreateUsers < ActiveRecord::Migration[5.0]
  def change
    create_table :users do |t|
      t.string :provider, null: false
      t.string :uid, null: false
      t.string :name, null: false
      t.string :image_url, null: false
      t.boolean :is_admin, default: false

      t.timestamps
    end
  end
end

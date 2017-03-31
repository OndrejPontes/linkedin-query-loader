class CreateQueries < ActiveRecord::Migration[5.0]
  def change
    create_table :queries do |t|
      t.string :name
      t.text :value
      t.boolean :disabled, default: false
      t.references :main_query, index: true

      t.timestamps
    end
  end
end

class Query < ApplicationRecord
  has_many :keys, class_name: 'Query', foreign_key: 'main_query_id'
  belongs_to :main_query, class_name: 'Query'
  validates_presence_of :name, :value, :disabled
end

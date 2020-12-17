class Item < ApplicationRecord
  belongs_to :store
  has_many :categories, through: :category_items
  has_many :item_categories
end

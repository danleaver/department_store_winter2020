
Store.create(name: "Animals")
Item.create(store_id: 1, name: "Pig", price: "5")
Item.create(store_id: 1, name: "Cow", price: "2")
Item.create(store_id: 1, name: "Sheep", price: "10")

Category.create(name: "Sale")
Category.create(name: "For Kids")
Category.create(name: "New")

ItemCategory.create(item_id: 1, category_id: 1)
ItemCategory.create(item_id: 1, category_id: 2)
ItemCategory.create(item_id: 2, category_id: 2)
ItemCategory.create(item_id: 2, category_id: 3)
ItemCategory.create(item_id: 3, category_id: 1)
ItemCategory.create(item_id: 3, category_id: 3)
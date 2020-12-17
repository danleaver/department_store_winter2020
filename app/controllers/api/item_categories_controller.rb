class Api::ItemCategoriesController < ApplicationController
  def index
    item = Item.find(params[:item_id])
    render json: item.item_categories
  end

  def create
  end

  def destroy
  end

  def item_category_params
  end
end

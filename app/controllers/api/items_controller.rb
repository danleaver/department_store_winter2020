class Api::ItemsController < ApplicationController
  def index
    store = Store.find(params[:store_id])
    render json: store.items
  end

  def show
  end

  def create
  end

  def update
  end

  def destroy
  end

  def item_params
  end
end

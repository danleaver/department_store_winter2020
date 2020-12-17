class Api::CategoriesController < ApplicationController
  def index
    render json: Category.all
  end

  def show
    render json: Category.find(params[:id])
  end

  def create
  end

  def update
  end

  def destroy
  end

  def category_params
  end
end

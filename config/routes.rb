Rails.application.routes.draw do

  namespace :api do
    resources :stores do
      resources :items
    end

    resources :categories #do
      # resources :item_categories
    # end

    resources :items do
      resources :item_categories
    end
  end
end

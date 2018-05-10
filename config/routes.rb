 Rails.application.routes.draw do
  root "app#index"
  devise_for :users
  resources :events, only: [:index, :show]

  namespace :api do
    namespace :v1 do
      resources :events, only: [:index, :show, :create]
    end
  end
end

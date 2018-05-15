 Rails.application.routes.draw do
  root "app#index"
  devise_for :users

  resources :events, only: [:index, :show]

  namespace :api do
    namespace :v1 do
      resources :events, only: [:index, :show, :create] do
        resources :event_rsvps, only: [:index]
      end
      resources :event_rsvps, only: [:create]
      resources :rsvps, only: [:create, :index]
    end
  end
end

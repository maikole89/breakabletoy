 Rails.application.routes.draw do
  root "app#index"
  devise_for :users


  resources :events, only: [:index, :show]
  
  namespace :admin do
    resources :events
  end

  namespace :api do
    namespace :v1 do
      resources :events, only: [:index, :show, :create] do
        resources :rsvps, only: [:index, :create]
      end
    end
  end
end

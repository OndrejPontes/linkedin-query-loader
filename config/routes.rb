Rails.application.routes.draw do
  get '/logout', to: 'sessions#destroy'
  get '/auth/:provider/callback', to: 'sessions#create'
  resources :queries
  get '/keywords', to: 'site#index'
  root 'site#index'
  # get '*all', to: 'site#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

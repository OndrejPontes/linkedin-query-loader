Rails.application.routes.draw do
  resources :queries
  get '/current_user', to: 'sessions#current_user'
  get '/auth/:provider/callback', to: 'sessions#create'
  get '/keywords', to: 'site#index'
  get '/users', to: 'site#index'
  delete '/logout', to: 'sessions#logout'
  root 'site#index'
  # get '*all', to: 'site#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

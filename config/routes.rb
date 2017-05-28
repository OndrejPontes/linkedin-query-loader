Rails.application.routes.draw do
  scope '/api' do
    resources :queries
    resources :users
    get '/current_user', to: 'sessions#current_user'
    delete '/logout', to: 'sessions#logout'
  end
  get '/auth/:provider/callback', to: 'sessions#create'
  get '/keywords', to: 'site#index'
  get '/users', to: 'site#index'
  root 'site#index'
end

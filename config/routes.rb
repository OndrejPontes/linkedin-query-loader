Rails.application.routes.draw do
  root 'site#index'
  resources :queries
  # get '*all', to: 'site#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

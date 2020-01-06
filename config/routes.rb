Rails.application.routes.draw do
  devise_for :users

  devise_scope :user do
    authenticated :user do
      root 'application#home', as: :authenticated_root
    end

    unauthenticated do
      root 'devise/sessions#new', as: :unauthenticated_root
    end
  end

  root to: 'application#home'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end

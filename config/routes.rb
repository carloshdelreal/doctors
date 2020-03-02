Rails.application.routes.draw do
  devise_for :users

  devise_scope :user do
    authenticated :user do
      root 'homepage#home', as: :authenticated_root
    end

    unauthenticated do
      root 'devise/sessions#new', as: :unauthenticated_root
    end
    get 'sign_in', to: 'users/sessions#new'
    get 'sign_up', to: 'users/registrations#new'
    get 'sign_out', to: 'users/sessions#destroy'
    get 'forgot_password', to: 'users/passwords#new'
    get 'reset_password', to: 'users/passwords#edit'
  end

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  namespace :api do
    namespace :v1 do
      resources :user, only: [:index]
      namespace :user do
        resources :booking, only: [:index]
        get 'upcoming', to: 'booking#upcoming'
      end
      resources :booking, only: [:index]
      resources :specialization, only: [:show, :index]
      resources :atend, only: [:index]
      resources :doctor, only: [:show, :index] do
        resources :booking, only: [:index, :update]
      end
    end
  end

  get '*path', to: redirect('/')
end

Rails.application.routes.draw do
  root to: "sessions#new"

  match '/auth/:provider/callback', :to => 'sessions#create', via: :get
  match '/auth/failure', to: redirect('/'), via: :get

  get 'sign_out', to: "sessions#destroy"
  get 'create_account', to: "sessions#new"
  get 'app', to: "angular#front_end"

end

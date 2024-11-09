Rails.application.routes.draw do
  root 'static_pages#home'
  get "/about",              to: "static_pages#about"
  get "/contact",            to: "static_pages#contact"
  get "/votematch",          to: "vote_match#home"
  get "/votematch/question", to: "vote_match#question"
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end

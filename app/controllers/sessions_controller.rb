class SessionsController < ApplicationController

  def new
  end

  def create
    auth = env["omniauth.auth"]
    session[:user_data] = env["omniauth.auth"].extra.raw_info.to_hash
    unless @auth = Authorization.find_from_hash(auth)
      @auth = Authorization.create_from_hash(auth, current_user)
    end
    self.current_user = @auth.user

    redirect_to "/app/#/new-card", notice: "Welcome, #{current_user.name}."
  end

  def destroy
    session[:user_id] = nil
    redirect_to root_url, notice: "Signed out!"
  end

end

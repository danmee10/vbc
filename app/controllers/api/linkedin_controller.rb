class Api::LinkedinController < Api::BaseController
  before_action :authenticate_user

  def show
    @data = session[:user_data]
    respond_with(@data)
  end

end
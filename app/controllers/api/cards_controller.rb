class Api::CardsController < Api::BaseController
  before_action :authenticate_user

  def index
    @cards = current_user.cards
    respond_with(@cards)
  end

  def create
    raise "boom"
  end
end
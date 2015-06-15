class CardsController < ApplicationController

  def show
    @card = Card.find(params[:card_id])
  end

end
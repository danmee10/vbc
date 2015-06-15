class Api::CardsController < Api::BaseController
  before_action :authenticate_user

  def index
    @cards = current_user.cards
    respond_with(@cards)
  end

  def create
    card_params = {
      first_name: params['card_fields']['firstName'],
      last_name: params['card_fields']['lastName'],
      email: params['card_fields']['emailAddress'],
      phone_number: params['card_fields']['phoneNumber'],
      headline: params['card_fields']['headline'],
      image: params['card_fields']['pictureUrl'],
      user_id: params['user_id'].to_i,
      specific_location: params['card_fields']['location']['name'],
      country: params['card_fields']['location']['country']['code'],
      company: params['card_fields']['positions']['values'][0]['company']['name'],
      title: params['card_fields']['positions']['values'][0]['title'],
      skills: params['card_fields']['positions']['values'][0]['summary']
    }

    card = Card.new(card_params)
    if card.save!
      render nothing: true, status: 200
    else
      render nothing: true, status: 500
    end
  end
end


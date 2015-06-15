class User < ActiveRecord::Base
  has_many :authorizations, dependent: :destroy
  has_many :cards, dependent: :destroy

  def self.create_from_hash!(hash)
    create(name: hash['info']['name'])
  end

end

json.games do

  @games.each do |game|

    json.set! game.id do
      json.extract! game, :id, :title, :description, :image_url, :amazon_url, :release_date, :rating, :average_score
      json.developer game.developer.name
      json.platforms game.platforms.pluck(:abreviation)
      json.reviews game.reviews.pluck(:id)
      json.genres game.genres.pluck(:name)
    end
  end
end
if @user_reviews
  json.reviews do
    @user_reviews.each do |review|
      json.set! review.id do
        json.extract! review, :id, :rating, :body, :game_id, :user_id, :created_at
      end
    end
  end
end

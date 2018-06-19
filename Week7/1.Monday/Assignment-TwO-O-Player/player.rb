# Defines Player Class
class Player
  attr_accessor :health, :name
  def initialize(name)
    @name = name
    @health = 3
  end

  def reduce_health
    @health -= 1
  end

  def player_dead?
    @health.zero?
  end
end

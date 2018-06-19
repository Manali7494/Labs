require './player'

# Game Start
class Game
  def initialize
    @player1 = Player.new('Player1')
    @player2 = Player.new('Player2')
    @user_turn = @player1.name
    question_start
  end

  def question_start
    random1 = rand(1..20)
    random2 = rand(1..20)
    @answer = random1 + random2
    puts "#{@user_turn}: What does #{random1} plus #{random2} equal?"
    print '> '
    answer_get
  end

  def answer_get
    @user_answer = gets.chomp.to_i
    check_answer
  end

  def check_answer
    if @user_answer != @answer
      puts "#{@user_turn}: Seriously? No!"
      check_user_for_health_reduction
    else
      puts "#{@user_turn}: YES! You are correct"
    end
    puts "P1: #{@player1.health}/3 vs P2: #{@player2.health}/3"
    end_or_cont_game
  end

  def check_user_for_health_reduction
    if @user_turn == @player1.name
      @player1.reduce_health
    else
      @player2.reduce_health
    end
  end

  def end_or_cont_game
    end_game?
    cont_game
  end

  def end_game?
    if @player1.player_dead?
      puts "#{@player2.name} wins with a score of #{@player2.health}/3"
      puts '----GAME OVER----'
      exit(0)
    elsif @player2.player_dead?
      puts "#{@player1.name} wins with a score of #{@player1.health}/3"
      puts '----GAME OVER----'
      exit(0)
    end
  end

  def cont_game
    puts '----NEW TURN----'
    @user_turn = if @user_turn == @player1.name
                   @player2.name
                 else
                   @player1.name
                 end
    question_start
  end
end
game1 = Game.new

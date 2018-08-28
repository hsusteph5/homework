require_relative 'mancala.rb'

class Board
  attr_accessor :cups

  def initialize(name1, name2)
    @player_one = name1
    @player_two = name2
    @cups = Array.new(14) { Array.new(4) }
    self.place_stones
  end

  def place_stones
    # helper method to #initialize every non-store cup with four stones each
    self.cups.map! do |el|
      [:stone, :stone, :stone, :stone]
    end
    self.cups[6] = []
    self.cups[13] = []
  end

  def valid_move?(start_pos)
    raise 'Invalid starting cup' if start_pos >= 14
    raise 'Starting cup is empty' if self.cups[start_pos].empty?
  end

  def make_move(start_pos, current_player_name)
    n_stones = self.cups[start_pos].count
    self.cups[start_pos] = []

    pos = start_pos + 1
    if @player_one == current_player_name
      until n_stones == 0
        unless pos == 13
          self.cups[pos % 14] << :stone
          n_stones -= 1
        end
        pos += 1
      end
    elsif @player_two == current_player_name
      until n_stones == 0
        unless pos == 6
          self.cups[pos % 14] << :stone
          n_stones -= 1
        end
        pos += 1
      end
    end
    puts pos
    self.render
    self.next_turn(pos)
  end

  def next_turn(ending_cup_idx)
    # helper method to determine whether #make_move returns :switch, :prompt, or ending_cup_idx
    ending_cup_idx -= 1

    if self.cups[ending_cup_idx].nil?
      :switch
    elsif ending_cup_idx == 6
      puts 'anything'
      :prompt
    elsif ending_cup_idx == 13
      :prompt
    else
      ending_cup_idx
    end
  end

  def render
    print "      #{@cups[7..12].reverse.map { |cup| cup.count }}      \n"
    puts "#{@cups[13].count} -------------------------- #{@cups[6].count}"
    print "      #{@cups.take(6).map { |cup| cup.count }}      \n"
    puts ""
    puts ""
  end

  def one_side_empty?
    return true if self.cups[7..12].all? {|el| el.empty?}
    return true if self.cups[0..6].all? {|el| el.empty?}
    false
  end

  def winner
    return :draw if self.cups[13] == self.cups[6]
    if self.cups[13].count > self.cups[6].count
      return @player_two
    else
      return @player_one
    end
  end
end

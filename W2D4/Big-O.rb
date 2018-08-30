fish_arr = ['fish', 'fiiish', 'fiiiiish', 'fiiiish', 'fffish', 'ffiiiiisshh', 'fsh', 'fiiiissshhhhhh']
#nested loop

def sluggish_octopus(fish_arr)
  longest_fish = ""
  (0...fish_arr.length - 1).each do |i|
    (i + 1..fish_arr.length - 1).each do |j|
      if fish_arr[i].length < fish_arr[j].length
        longest_fish = fish_arr[j]
      end
    end
  end
  longest_fish
end

#dominant octopus
class Array
  def self.merge_sort (array, &prc)
     return array if array.length <= 1

     mid_idx = array.length / 2
     merge(
       merge_sort(array.take(mid_idx), &prc),
       merge_sort(array.drop(mid_idx), &prc),
       &prc
     )
   end

   # NB: In Ruby, shift is an O(1) operation. This is not true of all languages.
   def self.merge(left, right, &prc)
     merged_array = []
     prc = Proc.new { |num1, num2| num1.length <=> num2.length } unless block_given?
     until left.empty? || right.empty?
       if prc.call(left.first, right.first) == -1
         merged_array << left.shift
       elsif prc.call(left.first, right.first) == 0
         merged_array << left.shift
       elsif prc.call(left.first, right.first) == 1
         merged_array << right.shift
       end
     end

     merged_array + left + right
   end
end

Array.merge_sort(fish_arr).last


#Clever Octopus
def clever_octopus(fish_arr)
  longest_fish = ""
  (0..fish_arr.length - 1).each do |i|
    longest_fish = fish_arr[i] if longest_fish.length < fish_arr[i].length
  end
  longest_fish
end


#Dancing Octopus
tiles_array = ["up", "right-up", "right", "right-down", "down", "left-down", "left",  "left-up" ]
def slow_dance(direction, arr)
  (0..fish_arr.length - 1).each do |i|
    return idx if direction == arr[i]
  end
end

def fast_dance(direction, arr)
  mid = arr.length / 2
  if arr[mid]
end

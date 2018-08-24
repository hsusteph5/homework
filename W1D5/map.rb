class Map
  def initialize
    @array = []
  end

  def set(key, value)
    @array << [key, value]
  end

  def get(key)
    @array.each do |arr|
      return arr if arr[0] == key
    end
  end

  def delete(key)
    @array.each do |arr|
      @array.delete(arr) if arr[0] == key
    end
  end

  def show
    @array
  end
end

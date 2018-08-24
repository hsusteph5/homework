#Queue is first in first out
class Queue
  attr_reader :array

  def initialize
    @array = []
  end

  def enqueue(el)
    @array << el
    # adds an element to the stack
  end

  def dequeue
    @array.shift
    # removes one element from the stack
  end

  def peek
    @array[0]
  end
end

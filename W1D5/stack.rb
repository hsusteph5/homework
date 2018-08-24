#Stack is the last one in first one out
class Stack
  def initialize
    @stack = []
  end

  def push(el)
    @stack << el
    # adds an element to the stack
  end

  def pop
    @stack.pop
    # removes one element from the stack
  end

  def peek
    @stack[0]
    # returns, but doesn't remove, the top element in the stack
  end
end

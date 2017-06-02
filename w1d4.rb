class Stack

  def self.initialize
    @self = []
  end

  def add(el)
    @self << el
  end

  def remove
    @self.pop
  end

  def show
    @self
  end

end

class Queue

  def enqueue(el)
    x = Stack.new.initialize #How do I call on my original array when it's in a different class
    x.push(el)
  end

  def dequeue
    @self.shift
  end

  def show
    @self
  end

end

class Map

  def assign(key, value)

  end

  def lookup(key)

  end

  def remove(key)

  end
    
end

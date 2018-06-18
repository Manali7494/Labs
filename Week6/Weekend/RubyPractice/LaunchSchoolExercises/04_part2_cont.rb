# Important convention to add 'able' to the action the module perform
=begin
MODULES VS CLASSES
If it's an "is-a" relationship, 
choose class inheritance. 
If it's a "has-a" relationship, 
choose modules
=end

module Swimmable
    def swim
       puts "I'm swimming!"
    end
end

# Note empty classes can use this syntax
class Animal ;end

class Fish < Animal
    include Swimmable
end

class Mammal < Animal
end

class Cat < Mammal
end

class Dog < Mammal
    include Swimmable
end

sparky = Dog.new
neemo = Fish.new
paws = Cat.new

sparky.swim
neemo.swim
paws.swim

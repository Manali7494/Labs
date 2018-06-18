# METHOD LOOKUP PATH!
module Walkable
    def walk 
       puts "I'm walking"
    end
end

module Swimmable
    def swim
        puts "I'm swimming"
    end
end

module Climable
    def climb
        puts "I'm climbing"
    end
end

class Animal
    include Walkable

    def speak
        puts "I'm an animal, and I speak!"
    end
end

class GoodDog < Animal #Superclass is also included in the lookup. So, all modules included in superclass will also be available
    include Swimmable
    include Climable # Fitst module that Ruby looks at
end

puts "----Animal Method Lookup---"
puts Animal.ancestors

fido = Animal.new
fido.speak
fido.walk
puts "----GoodDog method Lookup ----"
puts GoodDog.ancestors
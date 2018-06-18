
#Modules are used within mixins to allow methods to be avialable to multiple classes
module Speak
    def speak(sound)
        puts "#{sound}"
    end
end

# Twp classes are created and includes modules with 'include' syntax
class GoodDog
    include Speak
end

class HumanBeing
    include Speak
end

# Instantiation and calling the method 
sparky = GoodDog.new #Instantiation
sparky.speak('Arf!')

bob = HumanBeing.new
bob.speak('Hello!')

# Ruby Lookup for Classes
puts '-------GoodDog ancestors-----'
puts GoodDog.ancestors
puts ''
puts '--------HumanBeing ancestors----'
puts HumanBeing.ancestors

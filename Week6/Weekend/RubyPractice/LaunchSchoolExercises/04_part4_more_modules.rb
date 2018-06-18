# NameSpacing --> Organizing ssimilar classes under a module

module Mammal
    class Dog
        def speak(sound)
            p "#{sound}"
        end
    end

    class Cat
        def say_name(name)
            p "#{name}"
        end
    end

    # Using modules as a container for methods
    def self.some_out_of_place_method(num)
        p num**2
    end
end

#Calling classes in a module (uses double colon)
buddy = Mammal::Dog.new
kitty = Mammal::Cat.new
buddy.speak('Arf')
kitty.say_name('kitty')

# Calling methods directly from module --> Preffered method
value = Mammal.some_out_of_place_method(4)
 # OR ANOTHER WAY
 value = Mammal::some_out_of_place_method(5)
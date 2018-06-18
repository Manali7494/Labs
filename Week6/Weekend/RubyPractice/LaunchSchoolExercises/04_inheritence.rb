class Animal 

    def initialize(name)
        @name = name
    end
    def speak
        "Hello"
    end
end

class GoodDog < Animal
    attr_accessor :name

    def initialize(color)
        # Using super in initalize to append both name and color propeties
        super 
        @color = color
    end

    def speak
        # Overwriting of methods
        # "#{self.name} says arf!"
        # Calling Super Class
        super + " from GoodDog Class"
    end


end


class BadDog < Animal
    def initalize (age, name)
        super(name)
        @age = age
    end
end


sparky = GoodDog.new('Sparky')
paws = Cat.new
puts sparky.speak
puts paws.speak
bruno = GoodDog.new('brown')

BadDog.new(2,'bear')
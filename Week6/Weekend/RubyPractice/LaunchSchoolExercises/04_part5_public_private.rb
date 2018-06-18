# A public method vs private method

class GoodDog
    DOG_YEARS = 7

    attr_accessor :name, :age

    def initialize(name, age)
        self.name = name
        self.age = age
    end

    # Accessing private methods
    def public_disclosure
        p "#{self.name} in human years is #{human_years}"
    end
    

    private ## Any methods underneath is private

    def human_years
        age * DOG_YEARS
    end


end

sparky = GoodDog.new("Sparky",4)
sparky.public_disclosure
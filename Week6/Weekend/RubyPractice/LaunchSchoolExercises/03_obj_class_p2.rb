class GoodDog
    
    #Constant variable (constants)
    DOG_YEARS = 7
    attr_accessor :name, :age, :height, :weight
    #Class Method variable
    @@number_of_dogs = 0
    ## Note: accessing class variables within an instace method
    def initialize(n, h, w, age)
        @@number_of_dogs +=1
        self.name=n
        self.height= h
        self.weight= w
        # Using age getter and setter methods
        self.age = age * DOG_YEARS
    end

    def self.total_num_of_dogs
        @@number_of_dogs
    end

    # Class Method syntax 
    def self.what_am_i
       puts "I'm a GoodDog Class"
    end

    #Custom to_s method to override default to_s in Ruby
    def to_s
        "This dog's name is #{name} and it is #{age} years old"
    end

    def change_info(n, h, w)
        self.name = n
        self.height = h
        self.weight = w
    end

    def info 
        puts "#{self.name} weighs #{self.weight} and is #{self.height} tall"
    end

    # Way to determine what is self
    def what_is_self
        self
    end
end

#Accessing Class Methods
 GoodDog.what_am_i

 puts GoodDog.total_num_of_dogs
# dog1 = GoodDog.new
# dog2 = GoodDog.new

puts GoodDog.total_num_of_dogs

#Using constant variables
sparky = GoodDog.new("Sparky", 4, 3, 2)
puts sparky.age

# To_S Method
puts sparky # Default: Returns name of object class and encoding object id
# Custom method changes it to the returned statement

#Inspect method
p sparky #Same as puts sparky.inspect

sparky.change_info('James', '12 inches', '30 lbs')
sparky.info

#Returns a calling object equivalent (self.name === sparky.name)
p sparky.what_is_self


=begin
## Note two different types of self
So just to be clear, from within a class...

1) self, inside of an instance method, references the instance (object) 
that called the method - the calling object. Therefore, self.weight= is the 
same as sparky.weight=, in our example.

2) self, outside of an instance method, references the class and can be used 
to define class methods. Therefore, def self.name=(n) is the same
as def GoodDog.name=(n), in our example.

SUMMARY: SELF CHANGES BASED ON THE SCOPE IT IS DEFINED IN!
=end
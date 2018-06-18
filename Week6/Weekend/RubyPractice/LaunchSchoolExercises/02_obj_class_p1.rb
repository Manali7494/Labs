class GoodDog
    # Faster method for getters and setters
    # Takes in symbol as argument
    attr_accessor :name, :height, :weight
    
    # attr_reader: to only get values
    # attr_writer: to only set methods
    

    def initialize(n, h, w)    
        # instance variables using @
        # @name = n
        # Using setter methods
        self.name = n
        self.height = h
        self.weight = w
        puts "This #{name} object was initialized"
    end

    def speak
        # Calls instance method instead of instance variable
        "#{name} speaks Arf!"
    end
    # Slower method for creating getter/setter
    # def name
    #     @name
    # end

    # def name=(n)
    #     @name = name
    # end

    def change_info(n, h, w)
        # Method without using setter methods
        # @name=n
        # Using setter methods (Not creating local variables)
        self.name = n
        self.height = h
        self.weight = w
    end

    def info
        
        "#{name} weighs #{weight} and is #{height} tall"
        # OPtional method for calling it using self variable
        # "#{self.name} weighs #{self.weight} and is #{self.height} tall"
    end

    def checkInfo
        #Calling methods using self eventhough not initated by attr_accessor
        self.info
    end
end

sparky = GoodDog.new("Sparky", '12 inches' , '10lbs')
puts sparky.info
# puts sparky.speak
# puts sparky.name
# sparky.name = 'Spartacus'
# puts sparky.name

sparky.change_info('Spartacus', '24inches', '45 lbs')
puts sparky.info


fido = GoodDog.new('Fido',12,4)
# puts fido.speak
# puts fido.name
puts fido.info
fido.change_info('James', 3, 13)
puts fido.name
puts fido.info
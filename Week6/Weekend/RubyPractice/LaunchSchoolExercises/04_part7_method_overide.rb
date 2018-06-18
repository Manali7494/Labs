class Parent
    def say_hi
        p "Hi from Parent"
    end
end

class Child < Parent
    def say_hi
        p 'Hi from Child'
    end
    # Incorrect Replacement of send method
    # def send
    #     p 'send from Child..'
    # end
    # def instance_of?
    #     p "I'm a fake instance"
    # end
end

p Parent.superclass
son = Child.new
son.send :say_hi 

c = Child.new
p c.instance_of? Child
p c.instance_of? Parent

# One method easily overriden without side-effect
# IS to_s method
# Used for different string representation of an object
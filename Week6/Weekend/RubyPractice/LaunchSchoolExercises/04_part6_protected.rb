=begin
from outside the class, protected methods act just like private methods.
from inside the class, protected methods are accessible just like public methods.
=end
class Animal
    def a_public_method
        "Will this work? " + self.a_protected_method
    end

    protected
    def a_protected_method
        "Yes, I am protected!"

    end
end

fido = Animal.new
p fido.a_public_method
p fido.a_protected_method # NOT WORK FOR OUTSIDE CLASS

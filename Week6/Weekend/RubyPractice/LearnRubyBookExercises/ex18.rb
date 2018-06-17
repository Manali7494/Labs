def print_two(*args)
    arg1, arg2 = args
    puts "arg1: #{arg1}, arg2: #{arg2}"
end

# print_two("Zed", "shaw")

def print_two_again(arg1, arg2)
    puts "arg1: #{arg1}, arg2: #{arg2}"
end

print_two_again("Zed", "Shawn")

def print_one(arg1)
    puts "This is arg1: #{arg1}"
end

print_one("First!")

def print_none()
    puts "I got nothing..."
end
print_none()
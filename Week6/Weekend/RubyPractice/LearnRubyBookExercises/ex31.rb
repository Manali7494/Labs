puts "You enter a dark room with two doors. Do you go through door #1 or door #2?"

print ">"
door = gets.chomp.to_i

if door == 1
    puts "There's a giant bear eating cake. What do you do?"
    puts "1. Take the cake"
    puts "2. Scream at the bear"

    print ">"
    bear = gets.chomp.to_i

    if bear == 1
        puts "The bear is running at you. Runaway! "
    elsif bear == 2
        puts "The beam attacks you"
    else
        puts "Well, doing %s is probably better. Bear runs away" % bear

    end
elsif door == 2
    puts "You stare into endles abyss"
    puts "1. Blueberries"
    puts " 2. Yello Jacket clothespins"
    puts "3. Understanding revolvers yelling melodies"

    print "> "
    insanity = gets.chomp.to_i
    
    if insanity == 1 || insanity == 2
        puts "your body survives powered by a mind of jello. Good job"
    else
        puts " the insaity makes you crazy. Good job"
    end

else
    puts "You stumble around annd do not survive. Good job"

end


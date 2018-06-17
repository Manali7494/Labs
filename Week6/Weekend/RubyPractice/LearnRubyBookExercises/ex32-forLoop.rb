hairs = ['brown', 'blond', 'red']
eyes = ['brown', 'blue', 'green']
weights = [1,2,3,4]


the_count = [1,2,3,4,5]
fruits = ['apples', 'oranges', 'pears', 'apricots']
change = [1, 'pennies', 2 , 'dimes', 3, 'quarters']

for number in the_count
    puts "the number is #{number}"
end

# Ruby style loop

fruits.each do |fruit|
    puts "A fruit of type: #{fruit}"
end

#Another style
change.each{|index| puts "I got #{index}"}

#Building Lists
elements = []

# Range Operator

(0..5).each do |item|
    elements.push(item)
end
puts "#{elements}"



# Print out individual elelemtns
elements.each do |item|
    puts "#{item}"
end
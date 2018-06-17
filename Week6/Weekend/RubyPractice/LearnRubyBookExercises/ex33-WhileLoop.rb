i = 0

numbers = []

while i < 6
    puts "At the top i is #{i}"
    numbers.push(i)
    i += 1
    puts "At the bottom i is #{i}"
end

numbers.each do |item|
    printf "#{item}"
end
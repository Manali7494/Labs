require_relative '../setup'
require_relative './exercise_1'
require_relative './exercise_2'
require_relative './exercise_3'
require_relative './exercise_4'

puts 'Exercise 5'
puts '----------'

# Your code goes here ...

# Total Sum
@total_sum = Store.sum('annual_revenue')
puts "The total revenue of the entire company is #{@total_sum} dollars"

# Average annual revenue
@store_num = Store.all.count
@average = @total_sum / @store_num
puts "The average annual revenue for all stores is #{@average}"

#Stores generating more than $1M+ annual sales

@rich_stores = Store.where('annual_revenue > ?', 1000000).count()

puts "There are #{@rich_stores} stores with an annual revenue greater than $1M"
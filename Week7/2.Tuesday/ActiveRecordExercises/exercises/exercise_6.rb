require_relative '../setup'
require_relative './exercise_1'
require_relative './exercise_2'
require_relative './exercise_3'
require_relative './exercise_4'
require_relative './exercise_5'

puts "Exercise 6"
puts "----------"

# Your code goes here ...
@store1 = Store.find_by(id: 1)
@store1.update(name: 'Burnaby')
@store1.employees.create(first_name: "Khurram", last_name: "Virani", hourly_rate: 60)
@store1.employees.create(first_name: "Alice", last_name: "Wonderland", hourly_rate: 20)
@store1.employees.create(first_name: "James", last_name: "Kirchoff", hourly_rate: 40)
@store1.employees.create(first_name: "Sakura", last_name: "Suzuki", hourly_rate: 50)


@store2 = Store.find_by(id: 2)
@store2.employees.create(first_name: "Getcher", last_name: "Heaven", hourly_rate: 15)
@store2.employees.create(first_name: "Holly", last_name: "Griffin", hourly_rate: 45)
@store2.employees.create(first_name: "Dandelion", last_name: "Jiffy", hourly_rate: 15)
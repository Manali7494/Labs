require_relative '../setup'
require_relative './exercise_1'
require_relative './exercise_2'
require_relative './exercise_3'
require_relative './exercise_4'
require_relative './exercise_5'
require_relative './exercise_6'

puts 'Exercise 7'
puts '----------'

# Your code goes here ...
# NOTES:
#  Check if not empty --> validates_presence_of :item
# Check if a nnumber --> validates_numericality_of :item
# Check if unique --> validates_uniqueness_of :item
# If two fields need to be equal --> validates_confirmation_of :item (ie password)
# Required checkbox checked --> validates_acceptance_of
# Check length --> validates_length_of :password, minimum: 3
# regular expression ie email is valid--> validates_format_of :email , with: /regex/i
# Check between two values --> validates_inclusion_of :age, in: 21..99
# Check not included in range --> validates_exclusion of :age, in: 0..21, message: "sorry you must be over 21"
#
# easier sytax:
# validates :status, presence :true, length: {minimum: 3}
# t = Tweet.new
# t.save
# t.errors.messages {hash }
# t.errors[:status][0] --> can't be blank

puts 'Please enter a store name'
print '> '
store_name = gets.chomp
new_store = Store.create(name: store_name)
error_messages = new_store.errors.messages

p "Name Error: #{error_messages[:name][0]}"
p "Revenue Error: #{error_messages[:annual_revenue][0]}"
p "Apparel Error: #{error_messages[:apparel_exists][0]}"
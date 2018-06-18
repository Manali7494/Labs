# Arguments are used to pass in methods
# Blocks are used to pass in behaviour to methods

# EXAMPLE1
# def print_result
#   result_from_block = yield
#   puts result_from_block
# end
## Alternative Syntax

def print_result
  result_from_block = yield
  puts result_from_block
end

# WAY 1 to write blocks
# print_result { 3 * 3 }

# WAY 2 to write blocks
print_result do
  creature = 'walrus'
  "I am the #{creature}"
end

# Blocks have access to var outside their definition

shopping_list = %i[milk eggs cheese]

print_result do
  # Selecting an item at random
  important_item = shopping_list.sample
  "I hope I dont forget #{important_item}"
end

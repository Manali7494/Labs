# This is the main entrypoint into the program
# It requires the other files/gems that it needs

require 'pry'
require './candidates'
require './filters'

## Your test code can go here

binding.pry

pp @candidates[0]
p "Experienced #{experienced?(@candidates[1])}"
p "Github points 100+ #{github_points?(@candidates[1])}"
p "Ruby python language #{language_ruby_python?(@candidates[1])}"
p "age over 17 #{age_over_seventeen?(@candidates[1])}"
pp qualified_candidates(@candidates)
p @candidates

pp find(11)

pp ordered_by_qualifications(@candidates)

pp application_days?(@candidates[0])

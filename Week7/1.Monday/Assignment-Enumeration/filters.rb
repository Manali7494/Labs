
# In this file we define the methods to help filter out candidates
# This way, we keep these methods separated from other potential parts of the program

def find(id)
  # Your code Here
  @candidates.each do |cand|
    if cand[:id] == id
      return cand
    end
  end
end

def experienced?(candidate)
  # Your code Here
  if candidate[:years_of_experience] > 2
    true
  else
    false
  end
end

def qualified_candidates(candidates)
  # Your code Here
  qualified_cand = []
  candidates.each do |cand|
    if experienced?(cand) && github_points?(cand) && language_ruby_python?(cand) && age_over_seventeen?(cand)
      qualified_cand.push(cand)
    end
  end
  qualified_cand
end

# More methods will go below

def github_points?(candidate)
  if candidate[:github_points] >= 100
    true
  else
    false
  end
end

def language_ruby_python?(candidate)
  languages = candidate[:languages]
  # ruby_languages = languages.include?("Ruby")
  languages.any? { |i| ["Python", "Ruby"].include? i }
end

def application_days?(candidate)
  app_date = candidate[:date_applied]
  if (app_date > 15.days.ago.to_date)
    true
  else
    false
  end
end

def age_over_seventeen?(candidate)
  if candidate[:age] > 17
    true
  else
    false
  end
end

def ordered_by_qualifications(candidates)
  sorted_candidates = candidates.sort_by do |item|
    [-item[:years_of_experience], -item[:github_points]]
  end
  return sorted_candidates
end

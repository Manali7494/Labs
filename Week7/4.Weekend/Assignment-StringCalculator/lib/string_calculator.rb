class StringCalculator
  # self .add used to define class methods
  def self.add(input)
    if input.empty?
      0
    else
      numbers = input.split(",").map{ |num| num.to_i}
      numbers.inject(0) {|sum,number| sum + number}
    end
  end
end

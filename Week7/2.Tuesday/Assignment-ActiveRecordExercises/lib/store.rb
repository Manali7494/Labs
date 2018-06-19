class Store < ActiveRecord::Base
  has_many :employees
  validates :name, length: { minimum: 3,
                             too_short: 'Must have a minimum of 3 characters for names' }
  validates :annual_revenue, numericality:
 { greater_than: 0, message: 'Must have an annual revenue greater than 0' }
end

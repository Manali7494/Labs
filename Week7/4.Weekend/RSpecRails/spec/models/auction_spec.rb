
require 'rails_helper'

RSpec.describe Auction, :type => :model do
  subject { described_class.new }

  it "is valid with valid attributes" do
    subject.title = "Anything"
    subject.description = "Anything"
    subject.start_date = DateTime.now
    subject.end_date = DateTime.now + 1.week
    expect(subject).to be_valid
  end

  it "is not valid without a title" do
    expect(subject).to_not be_valid
  end

  it "is not valid without a description" do
    subject.title = "Anything"
    expect(subject).to_not be_valid
  end

  it "is not valid without a start_date" do
    subject.title = "Anything"
    subject.description = "Lorem ipsum dolor sit amet"
    expect(subject).to_not be_valid
  end

  it "is not valid without a end_date" do
    subject.title = "Anything"
    subject.description = "Lorem ipsum dolor sit amet"
    subject.start_date = DateTime.now
    expect(subject).to_not be_valid
  end
end
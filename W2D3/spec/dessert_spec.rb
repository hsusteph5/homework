require 'rspec'
require 'dessert'

=begin
Instructions: implement all of the pending specs (the `it` statements without blocks)! Be sure to look over the solutions when you're done.
=end

describe Dessert do
  subject(:dessert) { Dessert.new("chocolate", 50, "jacques")}
  let(:chef) { double("jacques") }

  describe "#initialize" do
    it "sets a type" do
      expect(dessert.type).to eq("chocolate")
    end

    it "sets a quantity" do
      expect(dessert.quantity).to eq(50)
    end

    it "starts ingredients as an empty array" do
      expect(dessert.ingredients).to be_empty
    end

    it "raises an argument error when given a non-integer quantity" do
      expect { Dessert.new("cookie", '50', "jacques") }.to raise_error(ArgumentError)
    end

  end

  describe "#add_ingredient" do
    it "adds an ingredient to the ingredients array" do
      expect(dessert.ingredients).to_not include('cocoa')
      dessert.add_ingredient('cocoa')
      expect(dessert.ingredients).to include('cocoa')
    end

  end

  describe "#mix!" do
    it "shuffles the ingredient array" do
      dessert.add_ingredient('cocoa')
      dessert.add_ingredient('milk')
      dessert.add_ingredient('sugar')
      expect(dessert.mix!).not_to eq(['cocoa', 'milk', 'sugar'])
    end

  end

  describe "#eat" do
    it "subtracts an amount from the quantity" do
      dessert.eat(20)
      expect(dessert.quantity).to eq(30)
    end

    it "raises an error if the amount is greater than the quantity" do
      dessert.eat(60)
      expect { dessert.quantity }.to raise_error("not enough left!")
    end
  end

  describe "#serve" do
    it "contains the titleized version of the chef's name" do
      expect(dessert.serve).to include('Jacques')
    end
  end

  describe "#make_more" do
    it "calls bake on the dessert's chef with the dessert passed in" do
      expect(chef).to receive(:bake).with(dessert)
      dessert.make_more
    end
  end
end

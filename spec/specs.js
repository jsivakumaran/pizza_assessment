describe("Pizza", function(){
  it("returns the amount of slices when given the inches to order()", function(){
    var instance_pizza = Object.create(Pizza);
    var slices = instance_pizza.order(36);
    expect(slices).to.equal(12);
  });

});

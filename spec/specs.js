describe("Pizza", function(){

  describe("order", function(){
    it("returns the amount of slices when given a number from 1-16", function(){
      var instance_pizza = Object.create(Pizza);
      var slices = instance_pizza.order(13);
      expect(slices).to.equal(12);
    });
    it("returns 0 when given a number that is outside the range of 1-16", function(){
      var instance_pizza = Object.create(Pizza);
      var slices = instance_pizza.order(30);
      expect(slices).to.equal(0);
    });
    it("returns 0 when a string or something that is not a number is entered", function(){
      var instance_pizza = Object.create(Pizza);
      var slices = instance_pizza.order("jay");
      expect(slices).to.equal(0);
    });
  });
});

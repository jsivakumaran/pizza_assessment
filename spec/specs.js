describe("Pizza", function(){

  describe("order", function(){
    it("returns the amount of slices when given a number from 1-16 and pepporoni", function(){
      var instance_pizza = Object.create(Pizza);
      var slices = instance_pizza.calculateSlices(13, "pepporoni");
      expect(instance_pizza.slices).to.equal(12);
    });
    it("returns the amount of slices when given a number from 1-16 and pepporoni", function(){
      var instance_pizza = Object.create(Pizza);
      var slices = instance_pizza.calculateSlices(13, "cheese");
      expect(instance_pizza.slices).to.equal(10);
    });
    it("returns 0 when given a number that is outside the range of 1-16", function(){
      var instance_pizza = Object.create(Pizza);
      var slices = instance_pizza.calculateSlices(30, "cheese");
      expect(instance_pizza.slices).to.equal(0);
    });
    it("returns 0 when a string or something that is not a number is entered", function(){
      var instance_pizza = Object.create(Pizza);
      var slices = instance_pizza.calculateSlices("jay", "pepporoni");
      expect(instance_pizza.slices).to.equal(0);
    });
  });
});

var Pizza = {
  type: "",
  size: 0,
  slices: 0,
  order: function(number){
    var inches = number;
    if(isNaN(inches)){
      this.slices=0;
    }else if ((inches<=8) && (inches>=1)){
      this.slices=4;
    }else if ((inches<=12) && (inches>=8)){
      this.slices=8;
    }else if ((inches<=16) && (inches>=12)){
      this.slices=12;
    }else {
      this.slices=0;
    }
  }
}

$(document).ready(function(){
  var pizza = Object.create(Pizza);
  
});

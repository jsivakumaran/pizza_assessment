var Pizza = {
  type: "",
  size: 0,
  slices: 0,
  order: function(number){
    var inches = number;
    if(isNaN(inches)){
      return 0;
    }else if ((inches<=8) && (inches>=1)){
      return 4;
    }else if ((inches<=12) && (inches>=8)){

      return 8;
    }else if ((inches<=16) && (inches>=12)){

      return 12;
    }else {
      return 0;
    }
  }
}

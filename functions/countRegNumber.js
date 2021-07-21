function countRegNumber(str){
  if(str.length<1) return 0;
  else{
    var spl = str.split(",");
     return spl.length;
    }
   }
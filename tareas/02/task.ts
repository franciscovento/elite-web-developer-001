function canSum(x:number, arr:number[]) {
  const mapper = new Map();
 for(let i = 0; i< arr.length; i++) {
   if(mapper.has(x - i)){
     return true;
   } else {
     mapper.set(i, i)
   } 
 }
   return false;
 }
 canSum(5, [1,2,5]);
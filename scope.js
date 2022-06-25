//Block scope
// var - var keyword is block not Block scope because we can access outside the block .
{
  var x = 10;
  console.log(x);
}
console.log(x);

// let = let keyword is block scope because we can't accesed from outside block
{
  let y = 30;
  console.log(y);
}
//  console.log(y);  //y is not defined (or) can't access y.

{
  const z = 20;
  console.log(z);
}
//  console.log(z);  //z is not defined (or) can't access z.

//Local Scope

function show() {
  let car = " my Name Aryan Patel "; // Local variable  scope
  var bike = " my name bike "; // Local variable  scope
  const Bus = " my name Bus";
  // Can't access to outofFuntion
  console.log(car);
  console.log(bike);
  console.log(Bus);
}
show();
// console.log(car); //can't Access
// console.log(bike); //  can't Access
// console.log(Bus); // can't Access


// global scope  

var var1=" var1";
let var2=" var2";
const var3="var3";
function display(){
  console.log(var1);
  console.log(var2);
  console.log(var3);
  
}
display();


//closer 
 
function me()
{
  let name="Aryan meena";
  function you()
  {
    console.log(name);   // this is closur
  }
  you();
}

me();
// Syntax of assign methods
var obj1={
  firstName:"Aryan",
  obj3:{
    age:20
  }
};
var obj2={
  lastName:"Meena"
}

obj1.firstName="Aman";


//assign value of obj1 object 
var objA=Object.assign({Colleage:"Ssism",Branch:" Bca-3rd-year "},obj1);
console.log(objA);

// merging object 
var objB=Object.assign(obj1,obj2);
console.log(objB);
 

var obj4=Object.assign({},obj1.obj3.age);
console.log(obj4);
console.log(JSON.stringify(obj1.firstName));

// console.log("obj1 and obj2 to contain a new object ",Object.assign({age:20},obj2,obj1));
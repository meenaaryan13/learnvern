var obj1={
  a:5
}
obj1.a=7;
console.log(obj1.a);
console.log(Object.seal(obj1));
delete obj1.a;  
console.log(obj1.a);
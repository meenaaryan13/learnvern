// syntax Object.is(value1, value2);
//is() method compare two same values

var obj1=5;
var obj2=5;
var obj3=Object.is(obj1,obj2);
console.log(obj3);
console.log(Object.is("aryan","aryan"));
console.log(Object.is('true','false'));

const foo={a:1};
const boo={a:1};
console.log(Object.is(foo,foo));
console.log(Object.is(foo.a,boo));
console.log(Object.is(foo,boo.a));
console.log(Object.is(foo.a,boo.a));

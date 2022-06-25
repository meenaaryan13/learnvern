// document.write("Sort() Method ");
// var x=[3,13,9,18];
var x=["e","d","c","b","a"]

var z=x.sort();
console.log(x);
console.log(z);

// document.write("Splice() method ");
var y=["jan","march","aprile"];

y.splice(1,0,"feb");
console.log(y);

//toLocALsTRING() method
var time=[1,"Time",new Date()]
console.log(time);

var timezone=time.toLocaleString();
console.log(timezone);

// toString() method 

var x=[3,4,5];
console.log(x.toString());

// unshsift() method 

console.log("Unshift method ",x.unshift(1,2));
console.log(x);

// values() method 
var obj={1:"Aryan",2:"Rahul",3:"Vikas"};
console.log("Values",Object.values(obj));
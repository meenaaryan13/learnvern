var arr1=[2,4,6,8,10];
// var arrOf=arr1.of()
var arr2=arr1.map(ele=>[[ele*2]]);
var arr3=arr2.flat();  //remove sub array   
console.log(arr3);
console.log(arr2);
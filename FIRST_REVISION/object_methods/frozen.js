var obj={
  a:6
}

console.log(Object.isFrozen(obj));
Object.freeze(obj);


console.log(Object.isFrozen(obj))
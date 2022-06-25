var date = new Date();

// getDate() methods
console.log(" Today correct date ", date.getDate());

// getDay() methods
console.log(" Today correct Day ", date.getDay());
switch (date.getDay()) {
  case 0:console.log("Sunday");
    break;
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("wednesday");
    break;
  case 4:
    console.log("Thusday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("saturday");
    break;
  default:
    console.log("wrong");
}

// getfullyear rmethods
console.log(" Current year ", date.getUTCFullYear());

// getHours() methods
console.log(" Today correct date ", date.getHours());

console.log("minute in seconds", date.getSeconds());
//getMilliseconds() methods

console.log("Seconds on miliseconds ", date.getMilliseconds());

//toDateString() methods 

console.log("only current Year ,Month and Date",date.toDateString());

//toString() methods 

console.log("only current Year ,Month and Date",date.toString());

//toTimeString() methods 

console.log("India Standard time ",date.toTimeString());

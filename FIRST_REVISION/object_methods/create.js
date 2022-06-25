// Syntax

// Object.create(proto)
// Object.create(proto, propertiesObject)

var person={
    Name:"Aryan",
    Colleage: function(){
      console.log(`student name ${this.Name} Student Age ${this.age} And Student Branch ${this.Branch}`);
    },
};

const person1=Object.create(person);
person1.age=20;
person1.Branch="Bca-2nd-year";
person1.Colleage();

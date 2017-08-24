//Hands On Project Day 3_Family Tree
//class
class Grandparents {
  constructor(firstName, lastName, hairColor, eyeColor) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._hairColor = hairColor;
    this._eyeColor = eyeColor;
  }
    verticalJump() {
    console.log("Grandma can jump 22 inches ");
  }
}
class Parents extends Grandparents {
  verticalJump() {
  console.log("Mother can jump 35 inches ");
}
}

class Children extends Parents {
  verticalJump() {
  console.log("Sister can jump 23 inches ");
}
}

let myGrandmother = new Grandparents("Samantha", "Riordan", "Strawberry Blonde", "green", 1.5);
let myMother = new Parents("Ramona", "Riordan", "Brunette", "light brown", 3.5);
let mySister = new Children("Echo", "Riordan", "Golden-Blonde", "hazel", 2.3);

let familytree = [];
familytree.push(myGrandmother);
familytree.push(myMother);
familytree.push(mySister);

for(i=0; i < familytree.length; i++){
  familytree[i].verticalJump();
}

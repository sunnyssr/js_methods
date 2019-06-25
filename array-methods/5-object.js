// 1. Write a JavaScript program to list the properties and values of a JavaScript object. (Object.keys)
let printAll = (obj) => {
  for(let key in obj){
    console.log(key," : ", obj[key]);
  }
}


// 2. Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property.
var student = { 
  name : "David Rayy", 
  sclass : "VI", 
  rollno : 12
};
let deleteRollNo = (obj) => {

  console.log("Before deleting the property: ");
  printAll(student);

  delete student["rollno"];

  console.log("After deleting the property: ");
  printAll(student);

}

deleteRollNo(student);

// 3. Write a function to get the length of an object.
let lengthOf = (obj) => {
  let counter = 0;
  for(let key in obj) {
    counter++;
  }
  return counter;
}

studentObjLength = lengthOf(student);
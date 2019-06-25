var data = [
  {
    name: 'Butters',
    age: 3,
    type: 'dog'
  },
  {
    name: 'Lizzy',
    age: 6,
    type: 'dog'
  },
  {
    name: 'Red',
    age: 1,
    type: 'cat'
  },
  {
    name: 'Joey',
    age: 3,
    type: 'dog'
  },
   {
    name: 'Pochi',
    age: 3,
    type: 'dog'
  }
];

// write a function that will sum all of the dogs ages in dog years using for loop.
// 1 human year = 7 dog year
// Solution is 105
let sumUpAge = (data) => {
  let sumAge = 0;
  for(let i = 0; i< data.length; i++){
    if(data[i].type === 'dog'){
      sumAge += data[i].age * 7;
    }
  }
  return sumAge;
}

// Write the same function using
// 1. filter - for filtering the cat or dog
// 2. map - to multiply human year to dog year
// 3. reduce - to accumulate total age.
// Solution 105
let sumUpAge2 = (animals) => animals.filter((animal) => (animal.type === 'dog')).map((animal) => animal.age * 7).reduce((sum, currentValue) => sum + currentValue, 0);
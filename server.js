const numary = [1, 2, 3, 4, 5, 6];
console.log("hello");
const func1 = (numary)=> {
    let arr = [];
    for (let i=0; i<numary.length; i++){
        if(numary[i] % 2 === 0){
            arr.push(numary[i] * 2);
        }
    }
    return arr;
}
// console.log(func1(numary));

const stu = {
    name: "ali", age: 23, grade: [{eng: 100, math: 100, sci: 100}]
}
const avgGrade = (stu)=> {
    let arr = [];
    for (let i = 0; i < stu.grade.length; i++) {
        for (let j = 0; j < stu.grade[i].length; j++) {
            arr.push(stu.grade[i][j]);
        }}
    return arr/2;
}
// console.log(avgGrade(stu));

const people = [{name: "jon", age: 28}, {name: "muzamil", age: 23}, {name: "ali", age: 53}];

function findOldestPerson(people) {
    let oldestAge = 0;
    let oldestPerson = "";
    
    for (const person of people) {
      if (person.age > oldestAge) {
        oldestAge = person.age;
        oldestPerson = person.name;
      }
    }
    // for(let person in people) {
    //     if(people[person].age > oldestAge) {
    //         oldestAge = people[person].age;
    //         oldestPerson = people[person].name;
    //     }}
    
    return oldestPerson;
  }
  
// console.log(findOldestPerson(people));

const student = {
    name: "John",
    age: 20,
    grades: [85, 90, 78, 92]
  };
  
  function calculateAverageGrade(student) {
    const sum = student.grades.reduce((total, grade) => total + grade, 0);
    return sum / student.grades.length;
  }
//   console.log(calculateAverageGrade(student));
const array = [1, 2, 3, 4];
for (const element of array) {
//   console.log(element);
}
const person = {
    name: 'John',
    age: 30,
    occupation: 'Engineer'
  };
  
  for (const key in person) {
    // console.log(person[key], key);
  }
//   Write a function filterByLength that takes an array of strings and a number maxLength. The function should return a new array containing only the strings with a length less than or equal to maxLength.

const filter =(arr, maxLenght)=> {
  return  arr.filter((element) => element.length <= maxLenght);
}
// console.log(filter(['a', 'b', 'c', 'djkjojkoi', 'e'], 3));
// const removeDuplicates = (arr) => {
//     return [...new Set(arr)];

// }

const dupArr = [1, 2, 3, 4, 2, 3, 4, 6,9,12];
// Write a function removeDuplicates that takes an array of numbers and returns
//  a new array with duplicate values removed, while maintaining the original order.

const removeDuplicates = (arr)=> {
    let newArr = [];
    for(let i=0; i<arr.length; i++){
        if(!newArr.includes(arr[i])){
            newArr.push(arr[i]);
        }
    }
    return newArr;
}


// console.log(removeDuplicates(dupArr));

const library = {
    books: [
        {title: 'The Awakening', author: 'Kate Chopin'},
        {title: 'City of Glass', author: 'Paul Auster'},
        {title: 'The Testaments', author: 'Man Booker Prize'}
    ]
};

const newData = (book, library)=> {
    library.books.push(book);
    return library;
}
// console.log(newData({title: 'The Testaments', author: 'Man Booker Prize'}, library));

const deteleBook = (book, library)=> {
    let index = library.books.indexOf(book);
    library.books.splice(index, 1);
    return library;
}
// console.log(deteleBook({title: 'The Testaments', author: 'Man Booker Prize'}, library));

function show(a, b, ...args) {
  console.log(a); // one
  console.log(b); // two
  console.log(args); // ["three", "four", "five", "six"]
}

// show('one', 'two', 'three', 'four', 'five', 'six')

const students = [
  { name: "Alice", score: 85 },
  { name: "Bob", score: 95 },
  { name: "Charlie", score: 92 },
  { name: "David", score: 88 },
  { name: "Eva", score: 98 }
];

function highScorers(studentsArray) {
  const stu = studentsArray.filter((element)=> element.score > 90);
  return stu;
}

const above90 = highScorers(students);
// console.log(above90);

function sumOfEvens(numbers) {
  const sum = numbers.reduce((accumolaoter, currentElement) => (accumolaoter + currentElement), 0);
  return sum;
}

const numbers = [2, 5, 8, 11, 14, 17, 20];
// console.log(sumOfEvens(numbers)); // Expected output: 44

const book = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald"
};

function bookInfo(bookObj) {
  return `The book ${bookObj.title} was written by ${bookObj.author}`;
}

// console.log(bookInfo(book)); // Expected output: "The book The Great Gatsby was written by F. Scott Fitzgerald."

function generateRandomPassword(length) {
  return Math.random().toString(36).substring(2, length + 2);
}

const password = generateRandomPassword(12);
// console.log(password); // Example output: "A3b$G7p#qF9z"

const func5 =()=> {
  let num = []
  for(let i =0; i<= 100; i++){
    for (let j = 0; j<= 100; j++){
      if (i % 3 === 0 || j % 3 === 0){
        return "FizzBuzz"
      } else if (i % 3 === 0){
        return "Fizz"
      } else if (j % 3 === 0){
        return "Buzz"
      }

    }
  }
}

// console.log(func5());

// Write a JavaScript program that prints the numbers from 1 to 100. But for multiples of 3, print "Fizz" instead of the number, and for multiples of 5, print "Buzz". For numbers that are multiples of both 3 and 5, print "FizzBuzz".

const func6 =()=> {
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}
// console.log(func6());

function reverseString(inputString) {
  return inputString.split("").reverse().join("");
}

// console.log(reverseString("hello"));

function findMinMax(numbersArray) {
  return {min : Math.min(...numbersArray), max: Math.max(...numbersArray)} };

const numbers1 = [12, 5, 23, 8, 45, 1];
// console.log(findMinMax(numbers1));

function generateFibonacci(terms) {

}

// console.log(generateFibonacci(10)); 

function removeDuplicate2(numbersArray) {
  return [...new Set(numbersArray)];
}

const num1 = [1, 2, 2, 3, 4, 4, 5];
// console.log(removeDuplicate2(num1));

function isPalindrome(inputString) {
  return inputString.split("").reverse().join("") === inputString;
}

// console.log(isPalindrome("radar")); // Expected output: true
// console.log(isPalindrome("hello"));

const string = ["one", "two", "three", "four", "five", "eleven", "twelve"];

const func22 = (arr) => {
// arr.so
}

// console.log(func22(string));

speak = function(sound){
  // console.log(this.name, 'is', sound);
}

let dog ={
  name: 'Dog',
}

let cat = {
  name: 'Cat',
}

bark = speak.bind(dog, "bark");
bark();


const name = 1;
// Using a regular function with explicit binding
function RegularFunction() {
  this.value = 42;

  setTimeout(function() {
    console.log(this.value); // 'this' refers to the global object (or undefined in strict mode)
  }.bind(this), 1000);
}
// RegularFunction();
// Using an arrow function, no explicit binding needed
const  ArrowFunction =()=> {
  this.value = 42;

  setTimeout(() => {
    console.log(this.value); // 'this' refers to the same 'this' as the surrounding code
  }, 1000);
}

// ArrowFunction();
const users = [
  {name: "ali", age: 28},
  {name: "ahmad", age: 30},
  {name: "muzamil", age: 32},
  {name: "muzamil ali", age: 35},
  {name: "Ali ahmad", age: 37},
  {name: "ahmad ali", age: 40},
  {name: "ali ahmad", age: 28},
  {name: "ali muzamil", age: 32},
  {name: "muzamil ali ahmad", age: 35},
  {name: "ahmad ali muzamil", age: 37},
]
// console.log(users.sort((a, b)=> a.age - b.age));

// const func17 = (arr) => {
//   let newArr = [];
//   // const newUsers  = arr.filter
// }

// // const userInput = prompt('Please enter a value:');

// if (userInput !== null) {
//   console.log(`You entered: ${userInput}`);
// } else {
//   console.log('User canceled the prompt.');
// }

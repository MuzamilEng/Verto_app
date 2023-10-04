console.log("Hello World");
const func1 = (a, b)=> {
    return a + b;
}
// console.log(func1(10, 20));

const funct2 = (a)=> {
    if (a % 2 === 0) {
        return 'even';
    } else {
        return 'odd';
    }
}
// console.log(funct2(9));

const factorial = (n)=> {
    if (n === 1) {
        return 1;
    } else {
        return n * factorial(n-1);
    }
}
// console.log(factorial(5));
 
const func4 = (num) => {
    let sum = 0;
    for(let i = 0; i < num.length; i++) {
        sum += num[i];
    }
    return sum;
}
// console.log(func4([1, 2, 3, 4, 7])); 

const func5 = (num) => {
    if (num === 'login'){
        return 'Welcome';
    }
    else{
        return 'Login';
    }
}
// console.log(func5('l'));

const func6 = (num) => {
    return num.map(item=> item * 2);
}
// console.log(func6([1, 2, 3, 4, 5]));

const func7 = (num) => {
    return num.filter(item=> item.length > 5);
}
// console.log(func7(['abcedfg', 'abceg', 'abcefg', 'abdfg', 'abg']));

const func8 = (num) => {
    return num.map(item=> item.name)
}
// console.log(func8([{name: 'muzi', age:23}, {name: 'muzi2', age:23}]));

// Write a function that takes an array of numbers and returns the count of numbers greater than 10.

const func9 = (num) => {
    return num.filter(item=> item > 10)}

// console.log(func9([1, 12, 33,3, 40, 5]));

const func10 = (num) => {
    for (let i = 0; i < num.length; i++) {
        return [num[i] * 2]
    }
}
// console.log(func10([1, 2, 3, 4, 5]));

const func11 = (num) => {
    let product  = 1;
    for (let i = 0; i < num.length; i++) {
        product *= num[i];
    }
    return product;
}
// console.log(func11([1, 2, 3, 4, 5]));

// Write a function that generates a pattern of stars. The function should take a number n and print n lines, where each line contains 'n' stars.

const func12 = (n) => {
    for (i =0; i< n; i++) {
        console.log(('*'.repeat(n)));
    }
}
// func12(5)

const func13 = (n) => {
    return n.sort()
}
// console.log(func13(['a', 'f', 'l', 'd', 'e']));

const func14 = (num) => {
    for (let i = 0; i<num.length; i++) {
        console.log((num[i] * 9/5) + 32);
    }
}
// func14([35.5, -34.6, 78.9, 98.3, 1.2]);

const func15 = (num) => {
    for (let i = 0; i<num.length; i++) {
        if(num[i] % 2 === 0){
            console.log(num[i] ** 2);
        }
    }
}
// func15([1, 2, 3, 4, 5, 6]);
// Write a function that generates a right-angled triangle pattern using asterisks. The function should take a number n and print 'n' lines, where the first line contains 1 star, the second line contains 2 stars, and so on.
const func16 = (n) => {
    for (let i = 0; i < n; i++) {
        console.log(('*'.repeat(i+1)));
    }
}
// func16(6)
// Given an array of objects representing products, each with a "price" property, write a function that returns
//  the total price of all products with a price higher than $50.
const func17 = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].price >= 50) {
            console.log(sum += arr[i].price);
        }
    }
}
// console.log(func17([{price: 50, age:23}, {price: 100, age:23}]));
// write a function that takes an array of numbers and returns the sum of all the numbers.
const func18 = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
// console.log(func18([1, 2, 3, 4, 5]));
// Write a function that takes a 2D array of numbers and returns a new array where each element
//  is the sum of the numbers in the corresponding subarray.

const func19 = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            sum += arr[i][j];
        }
    }
    return sum;
}

// console.log(func19([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));   

const func20 = (arr1, arr2) => {
    let newArr = [];
    for (let i = 0; i < arr1.length; i++){
        for (let j = 0; j < arr2.length; j++){
            if (arr1[i] === arr2[j]){
                newArr.push(arr1[i]);
            }
        }
    }
    return newArr;
}
// console.log(func20([1, 2, 3, 4], [5, 4, 1, 8]));

const func21 = (arr1) => {
    let newArr = [];
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr1[i].length; j++) {
            newArr.push(arr1[i][j]);
        }
    }
    return newArr
}
// console.log(func21([[1, 2, 3, 4]]))

const func22 = (arr1) => {
    let newArr = [];
    for (let key in arr1){
        if (typeof arr1[key] === 'object'){
            newArr.push(...func22(arr1[key]));
            // console.log(newArr);
        } else {
            newArr.push(arr1[key]);}
    }
    return newArr
}
// console.log(func22({a: 1, b:{c: 2, d: 3}, e: 4}));

const studentGrades = {
    math: 90,
    science: 85,
    history: 78,
    literature: 92
};

const func23 = (studentGrades) => {
    let arr = Object.values(studentGrades);
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
// console.log(func23(studentGrades));

const products = {
    apple: { price: 0.5 },
    banana: { price: 0.3 },
    orange: { price: 0.8 },
    mango: { price: 1.2 }
};
// console.log(Object.values(products));
// console.log(Object.keys(products));
// Given an object representing a list of products, each with a "price" property, write a function that returns an array 
// of products with a price higher than a specified threshold.
const func24 = (products, threshold) => {
    let arr = [];
    for (let key in products){
        if (products[key].price > threshold){
            arr.push(products[key]);
        }
    }
    return arr;
}
// console.log(func24(products, 0.2));

const books = [
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
    { title: "To Kill a Mockingbird", author: "Harper Lee" },
    { title: "1984", author: "George Orwell" }
];

const func25 = (books) => {
    let arr = [];
    for (let i = 0; i < books.length; i++) {
        arr.push(books[i].title);
    }
    return arr;
}
// console.log(func25(books));

const playlists = {
    rock: [
        { title: "Bohemian Rhapsody", duration: 320 },
        { title: "Stairway to Heaven", duration: 480 }
    ],
    pop: [
        { title: "Shape of You", duration: 210 },
        { title: "Uptown Funk", duration: 240 }
    ]
};
// console.log(Object.values(playlists));

const func26 = (playlists) => {
    let arr = Object.values(playlists);
    console.log(arr);
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            sum += arr[i][j].duration;
            console.log(arr[i][j]);
        }
    }
    return sum;
}
// console.log(func26(playlists));
const people = {
    alice: 25,
    bob: 32,
    carol: 18
};
// Given an object representing a list of people with their ages, write a function that
// returns a new object where each person's age is incremented by 1.

const func27 = (people) => {
    for (let key in people){
        people[key] += 1;
    }
    return people;
}
// console.log(func27(people));

// Given an array of objects representing movies, each with a "title" and "genre" property,
// write a function that returns an object where the keys are genres and the values are arrays of movie titles within that genre.

const movies = [
    { title: "Inception", genre: "Sci-Fi" },
    { title: "The Avengers", genre: "Action" },
    { title: "Jurassic Park", genre: "Sci-Fi" }
];

const func28 = (movies) => {
    let arr = [];
    for(let i= 0; i < movies.length; i++){
        if(arr[movies[i].genre]){
            // console.log(arr[movies[i].genre], "ksokdokokfo");
            arr[movies[i].genre].push(movies[i].title);
        }
        else {
            arr[movies[i].genre] = [movies[i].title];
        }
    }
    return arr;
}
// console.log(func28(movies));

const library = {
    fiction: [{ title: "Pride and Prejudice" }, { title: "1984" }],
    nonFiction: [{ title: "Sapiens" }, { title: "The Art of War" }]
};

// Given an object representing a library with shelves, each containing an array of books, write a function
// that calculates and returns the total number of books in the library.

const func29 = (library) => {
    let sum = 0;
    let arr = Object.values(library);
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i].length;
    }
    // sum += arr.length;
    // for (let key in library){
    //     sum += library[key].length;
    // }
    return sum;
}
// console.log(func29(library));

function modifyValue(value) {
    value = value * 2;
    // console.log("Inside function:", value);
}

let num = 5;
modifyValue(num);
// console.log("Outside function:", num);


let x = 5;
let y = x;  
y = 10;
// console.log(x, y);  

let arr1 = [1, 2, 3];
let arr2 = arr1;
arr2.push(4);
// console.log(arr1, arr2);

function modifyArray(arr) {
    arr.push(4);
    // console.log("Inside function:", arr);
}

let myArray = [1, 2, 3];
modifyArray(myArray);
// console.log("Outside function:", myArray);

let a = 3;
let b = a;
b=4
// console.log(a, b);

let arr3  = [1, 2, 3];
let arr4 = arr3;
arr4[2] = 5;
// console.log(arr3, arr4);

let objs = {a: 1, b: 2, c: 3};
let objs2 = objs;
objs2.b = 5;

// console.log(objs, objs2);

const func30 = (obj)=> {
    obj.name = 'bars';
    obj.age = 10;
}
const object  = {name: 'foo'};
func30(object);
// console.log(object);

// function modifyObject(obj) {
//     obj.newProperty = "New Value";
//     obj.existingProperty = "Modified Value";
// }

// let myObject = { existingProperty: "Original Value" };
// console.log("Before:", myObject);
// modifyObject(myObject);
// console.log("After:", myObject);


// Pass an array of objects to a function. Within the function, manipulate the objects' 
// properties (add, modify, delete) and see if the changes reflect outside the function.


const array1 = [{name: 'foo', value: 'bar'}, {name: 'mo', value: 'kkolk'} ];

const func32 = (newArray) => {
    newArray[0].name = 'muzo'
    newArray[1].age = 42
}
func32(array1);
// console.log(array1);

const promise1 = new Promise((resolve, reject) => {
    // reject(new Error('rejected promise'))
    // resolve('hello world')
});
// console.log(promise);
// promise1.then((result)=> {
//     console.log(result);
// });

const fetchData = async ()=> {
    let data = await fetch('https://api.github.com/users');
    const response  = await data.json();
    // console.log(response);
}
fetchData();

// URL to a sample JSON data endpoint
const apiUrl = 'https://jsonplaceholder.typicode.com/posts/1';

const myDta = () => {
   const promise = fetch(apiUrl)
   .then(res => res.json()).then(data => console.log(data))
   .catch(err => console.error(err))
   return promise;
}
// myDta();


const validate = (name)=>{
    return new Promise((resolve, reject)=> {
        if (name){
            resolve(" resolve " + name)
        } else {
            reject("error mising name")
        }
    })
}

//  validate('ali').then(data=> console.log(data)).catch(error=> console.log(error)).finally(()=> console.log("done validation"))

const fetchData1 = async () => {
    const data = await fetch("https://api.github.com/users")
    const res =  data.json();
    console.log(res, "success");
}
// fetchData1();

let ab = 5;
let bd = ab
bd  = 3;
// console.log(ab, bd);

let ojb = {a: 1, b: 2, c: 3};
let ojb2 = ojb
ojb.b = 4

// console.log(ojb, ojb2);

let nArr = [{a: 1, b: 2,}, {a: 3, b:3}]
let bArr = nArr
bArr[0].a = 5
bArr[1].b = 45

// console.log(nArr, bArr);


const validates  = (name) =>{
    return new Promise((resolve, reject) =>{
        if(!name){
            reject(new Error("Invalid"))
        } else{
            resolve("resolved" + name)
        }
    })
}

// validates('hammad').then(res => console.log(res)).catch(err => console.log(err))

// ...shallow copy...

const aCopy = {
    name: "ali",
    age: 12
}

const bCopy = aCopy
bCopy.name = "Rehman";

// console.log(aCopy, bCopy);

// ...sprear operator ...
const OBJ = {
    name: "name",
    age: "age",
}
// console.log(OBJ);
const newOBJ = {...OBJ, name: "new name"}
// console.log(newOBJ);

const oldOB = {
    name: "old name",
    age: "old age",
    address: {
        street: "old street",
        no: 12
    }
}
// console.log(oldOB);

const newOB = {...oldOB}
newOB.address.street === "old street12345678"
// console.log(newOB.address.street);
// console.log(newOB);

const first_person = {
    name: "Jack",
    age: 24,
    address: {
      apartment: "A",
      city: "London"
    }
  };
  
//   const second_person = { ...first_person, address: {...first_person.address} };
//   const second_person = JSON.parse(JSON.stringify(first_person));

  
//   second_person.age = 25;
//   second_person.address.apartment = "N";
//   console.log(first_person);
//   console.log(second_person);

// example................................................................
const obj = { x: 1, y: { a: true, b: false } };
const refCopy = obj;
const shallowCopy = { ...obj };
const deepCopy = structuredClone(obj);
// changing the topmost level:
obj.x = 2;
// console.log(refCopy.x, shallowCopy.x, deepCopy.x, "1-level") // 2, 1, 1
obj.y.b = true;
// console.log(refCopy.y.b, shallowCopy.y.b, deepCopy.y.b, "2-level") 

 function print(){
    //  console.log(arguments)
    //  console.log(arguments[1]);
 }
 print(100, "Muzamil", true);

 const print1 = () => {
//   console.log(arguments)
}

print1("hello", 400, false)

const obj3 = {
  name: 'deeecode',
  age: 200,
  print: function() {
    // console.log(this)
  }
}

obj3.print()

const obj4 = {
  name: 'deeecode',
  age: 200,
  print: function() {
    function print2() {
    //   console.log(this)
    }
    
    print2()
  }
}

obj4.print()

// class Animal {
//     constructor(name, numOfLegs) {
//       this.name = name
//       this.numOfLegs = numOfLegs
//     }
    
//     sayName() {
//       console.log(`My name is ${this.name}`)
//     }
//     hasLegs() {
//         console.log(`${this.name} has ${this.numOfLegs} legs`);
//     }
//   }
  
//   const Dog = new Animal("Bingo", 4)
//   const Bird = new Animal("Steer", 2)
  
//   Dog.sayName()
//   Dog.hasLegs()
//   // My name is Bingo
  
//   Bird.sayName()
//   Bird.hasLegs()

class Alpa{
    constructor(name, age){
        this.name = name
        this.age = age
    }

    hasName(){
        // console.log(`My name is ${this.name}`)
    }
    hasAge(){
        // console.log(`My age is ${this.age}`)
    }
}
const alpa = new Alpa("Muzamil", 25)
alpa.hasName()
alpa.hasAge()

// class Animal {
//     constructor = (name, numOfLegs) => {
//       this.name = name
//       this.numOfLegs = numOfLegs
//     }
    
//     sayName() {
//       console.log(`My name is ${this.name}`)
//     }
//   }

class Animal{
    constructor(name, age){
        this.name = name
        this.age = age
    }
    hasName(){
        // console.log(`My name is ${this.name}`)
    }
}
const alpa1 = new Animal("Muzamil", 25)
alpa1.hasName()


printName()

// console.log("hello")

function printName() {
  console.log("i am dillion")
}
// console.log(name1);
const name1 = ()=> {
    console.log("hello dillion");
}
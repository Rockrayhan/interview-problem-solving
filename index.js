
// 1.Task: Array Filtering and Mapping

// const people = [
//   { name: "Rahim", age: 25, gender: "male" },
//   { name: "Karim", age: 30, gender: "male" },
//   { name: "Ayesha", age: 22, gender: "female" },
//   { name: "Fatima", age: 28, gender: "female" }
// ];

// const malesOnly = people.filter(person => person.gender !== "female");


// const maleNames = malesOnly.map(person => person.name);


// console.log(maleNames);





// 2.Task: Object Manipulation

// const books = [
//   { title: "Himur Ache jol", author: "Humayon Ahmed", year: 2008 },
//   { title: "Chintaporadh", author: "Asif Adnan", year: 2019 },
//   { title: "Think and Grow rich", author: "Mr poor", year: 1999 }
// ];

// function getBookTitles(bookArray) {
//   return bookArray.map(book => book.title);
// }

// const titles = getBookTitles(books);
// console.log(titles);




// 4.Task: Sorting Objects

// const cars = [
//   { make: "Toyota", model: "Corolla", year: 2015 },
//   { make: "Honda", model: "Civic", year: 2010 },
//   { make: "Ford", model: "Mustang", year: 2020 },
//   { make: "BMW", model: "X5", year: 2018 }
// ];

// function sortCarsByYear(carArray) {
//   return carArray.sort((a, b) => a.year - b.year);
// }

// const sortedCars = sortCarsByYear(cars);
// console.log(sortedCars);



// 5.Task: Find and Modify

// const people = [
//   { name: "Rahim", age: 25 },
//   { name: "Karim", age: 30 },
//   { name: "Ayesha", age: 22 }
// ];

// function updateAgeByName(name, newAge) {
//   const person = people.find(p => p.name === name);

//   if (person) {
//     person.age = newAge;
//     console.log(`${name}'s age has been updated to ${newAge}`);
//   } else {
//     console.log(`${name} not found in the array`);
//   }
// }

// updateAgeByName("Karim", 35);

// console.log(people);






// 6.Task: Array Reduction

// const numbers = [1, 2, 3, 4, 5, 6];

// function sumEvenNumbers(arr) {
//   const sum = arr.reduce((total, num) => {
//     if (num % 2 === 0) {
//       return total + num;
//     } else {
//       return total;
//     }
//   }, 0);

//   return sum;
// }

// const sumOfEvens = sumEvenNumbers(numbers);
// console.log("Sum of even numbers:", sumOfEvens);










// 7. Task: Leap Year Checker

// function isLeapYear(year) {
//   if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
//     return true;
//   } else {
//     return false;
//   }
// }


// console.log(isLeapYear(2020)); 
// console.log(isLeapYear(2023)); 



// 8. Task: Unique Values

// const numbers = [1, 2, 3, 2, 4, 5, 3, 6, 1];

// function getUniqueNumbers(arr) {
//   const uniqueSet = new Set(arr);
//   return Array.from(uniqueSet);
// }

// const uniqueNumbers = getUniqueNumbers(numbers);
// console.log(uniqueNumbers);






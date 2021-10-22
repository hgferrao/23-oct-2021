// const budget = [
//   { value: 250, description: 'Sold old TV 📺', user: 'jonas' },
//   { value: -45, description: 'Groceries 🥑', user: 'jonas' },
//   { value: 3500, description: 'Monthly salary 👩‍💻', user: 'jonas' },
//   { value: 300, description: 'Freelancing 👩‍💻', user: 'jonas' },
//   { value: -1100, description: 'New iPhone 📱', user: 'jonas' },
//   { value: -20, description: 'Candy 🍭', user: 'matilda' },
//   { value: -125, description: 'Toys 🚂', user: 'matilda' },
//   { value: -1800, description: 'New Laptop 💻', user: 'jonas' },
// ];

// const spendingLimits = {
//   jonas: 1500,
//   matilda: 100,
// };

// const getLimit = user => spendingLimits?.[user] ?? 0;

// const addExpense = function (value, description, user = 'jonas') {
//   user = user.toLowerCase();

//   // const limit = spendingLimits[user] ? spendingLimits[user] : 0;

//   if (value <= getLimit(user)) {
//     budget.push({ value: -value, description, user });
//   }
// };
// addExpense(10, 'Pizza 🍕');
// addExpense(100, 'Going to movies 🍿', 'Matilda');
// addExpense(200, 'Stuff', 'Jay');

// const checkExpenses = function () {
//   for (const entry of budget)
//     if (entry.value < -getLimit(entry.user)) entry.flag = 'limit';
// };
// checkExpenses();

// const logBigExpenses = function (bigLimit) {
//   let output = '';
//   for (const entry of budget)
//     output +=
//       entry.value <= -bigLimit ? `${entry.description.slice(-2)} /` : '';

//   output = output.slice(0, -2); // Remove last '/ '
//   console.log(output);
// };
// console.log(budget);
// logBigExpenses(500);


//////////////////////////////////////////////////////////
let charCount = 1;
let reset = 0;
const countOccurance = function (str) {
  const newString = str.split('');
  console.log(newString);
  let noOfChractorCount = [];
  for (let i = 0; i < newString.length; i++) {
    if (newString[i] === newString[i + 1]) {
      charCount++;
      reset++;
    } else if (reset > 1) {
      noOfChractorCount[newString[i]] = charCount;
      charCount = 1;
      reset = 0;
    } else {
      noOfChractorCount[newString[i]] = 1;
    }
  }
  return noOfChractorCount;
};
// console.log(countOccurance('hhhhhehhnry'));

const findNoOfOccurance = function (str, charactor) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) === charactor) {
      count++;
    }
  }
  return `${charactor}=${count}`;
};
// console.log(findNoOfOccurance('heenr yyy yetetyyyyt', 'p'));

function destroyer(arr, ...removeEl) {
  return arr.filter(values => !removeEl.includes(values));
}

// console.log(destroyer([1, 2, 3, 1, 5, 2, 3], 2, 3));

function spinalCase(str) {
  return str
    .split(/\s|_|(?=[A-Z])/)
    .join('-')
    .toLowerCase();
}

// console.log(spinalCase('This_Is Spinal Tap'));
/*
function whatIsInAName(collection, source) {
  console.log(collection);
  console.log(source.last);
  var arr = [];

  collection.filter(val=>)
  // Only change code below this line
  // if (collection.last === source.last) {
  //   console.log();
  // }

  // Only change code above this line
  // return arr;
}

whatIsInAName(
  [
    { first: 'Romeo', last: 'Montague' },
    { first: 'Mercutio', last: null },
    { first: 'Tybalt', last: 'Capulet' },
  ],
  { last: 'Capulet' }
);

*/

function translatePigLatin(str) {
  let myConsonants = str.match(/^[^aeiou]+/);
  return myConsonants !== null
    ? str.replace(myConsonants, '').concat(myConsonants).concat('ay')
    : str.concat('way');
}

// console.log(translatePigLatin('glove'));

function myReplace(str, before, after) {
  const xx = str.replace(before, after);
  console.log(xx);
}

myReplace('A quick brown fox jumped over the lazy dog', 'fox', 'box');

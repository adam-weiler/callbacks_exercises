const transactions = [
  {
    type: 'sale',
    paymentMethod: 'cash',
    customer: 'Isaac Asimov',
    items: [
      { name: 'Byte', price: 1.00 },
      { name: 'Bit', price: 0.125 }
    ]
  },
  {
    type: 'sale',
    paymentMethod: 'credit',
    customer: 'CJ Cherryh',
    items: [
      { name: 'Bit', price: 0.125 },
      { name: 'Bit', price: 0.125 },
      { name: 'Bit', price: 0.125 }
    ]
  },
  {
    type: 'purchase',
    paymentMethod: 'credit',
    vendor: 'Dick\'s Doodads',
    items: [
      { name: 'XL Doodad', price: -3.00 },
      { name: 'XS Doodad', price: -0.50 },
      { name: 'XS Doodad', price: -0.50 }
    ]
  },
  {
    type: 'purchase',
    paymentMethod: 'cash',
    vendor: 'Gibson Gadgets',
    items: [
      { name: 'Basic Gadget', price: -2.00 },
      { name: 'Advanced Gadget', price: -3.50  }
    ]
  },
  {
    type: 'sale',
    paymentMethod: 'credit',
    customer: 'Frederik Pohl',
    items: [
      { name: 'Byte', price: 1.00 },
      { name: 'Byte', price: 1.00 },
      { name: 'Bit', price: 0.125 },
      { name: 'Bit', price: 0.125 },
      { name: 'Bit', price: 0.125 }
    ]
  },
  {
    type: 'purchase',
    paymentMethod: 'cash',
    vendor: 'Clarke Computing',
    items: [
      { name: 'Floppy Disk', price: -0.10 },
      { name: 'Floppy Disk', price: -0.10 },
      { name: 'Floppy Disk', price: -0.10 },
      { name: 'Floppy Disk', price: -0.10 },
      { name: 'Floppy Disk', price: -0.10 },
      { name: 'Floppy Disk', price: -0.10 },
      { name: 'Floppy Disk', price: -0.10 }
    ]
  },
  {
    type: 'sale',
    paymentMethod: 'credit',
    customer: 'Neal Stephenson',
    items: [
      { name: 'kilobyte', price: 1024.00 }
    ]
  },
  {
    type: 'purchase',
    paymentMethod: 'credit',
    vendor: 'Gibson Gadgets',
    items: [
      { name: 'Advanced Gadget', price: -3.50  },
      { name: 'Advanced Gadget', price: -3.50  },
      { name: 'Advanced Gadget', price: -3.50  },
      { name: 'Advanced Gadget', price: -3.50  }
    ]
  },
  {
    type: 'purchase',
    paymentMethod: 'credit',
    vendor: 'Dick\'s Doodads',
    items: [
      { name: 'XL Doodad', price: -3.00 },
      { name: 'XL Doodad', price: -3.00 },
      { name: 'XL Doodad', price: -3.00 }
    ]
  },
  {
    type: 'sale',
    paymentMethod: 'cash',
    customer: 'Isaac Asimov',
    items: [
      { name: 'Bit', price: 0.125 },
      { name: 'Bit', price: 0.125 },
      { name: 'Bit', price: 0.125 },
      { name: 'Bit', price: 0.125 },
      { name: 'Bit', price: 0.125 },
      { name: 'Bit', price: 0.125 },
      { name: 'Bit', price: 0.125 },
      { name: 'Bit', price: 0.125 },
    ]
  }
];


// --------------------------------------------------
// EXAMPLE QUESTION
// --------------------------------------------------
/*
  Calculate the total number of transactions.
*/
const totalTransactions = transactions.length;

console.log( '\nThe total number of transactions is:', totalTransactions );  // 10


// --------------------------------------------------
// QUESTION 01
// --------------------------------------------------
/*
  Calculate the total number of 'sales'.

  HINT(S):
  - Not all transactions are 'sales'.
*/
const numSales = transactions.filter(transaction => transaction['type'] == 'sale').length;

/*
  Hey, welcome to the first question!

  Here's a breakdown of the question, and some pointers on how to get started!
    - A variable has been declared a few lines above (`numSales`).
    - Just below, the contents of the `numSales` variable are logged to the console.
    - Your job is to assign the variable to the correct value (in this case: the total number of sales) *BEFORE* it is logged out.
    - You can do this by:
      - Adding an `=` sign (we are *assigning* something after all)
      - Starting with the `transactions` variable (see the example question);
      - Adding one or more methods to transform/extract the value we're looking for.
      - If your solution is correct, `numSales` should be equal to 5.

  You can solve the remaining questions in the same way!

  P.S.
  The breakdown above takes up a lot of space, feel free to move it to the top or bottom of the file!
*/

console.log( '\nThe total number of sales is:', numSales );  // 5


// --------------------------------------------------
// QUESTION 02
// --------------------------------------------------
/*
  Calculate the total number of 'purchases'.
*/
const numPurchases = transactions.filter(transaction => transaction['type'] == 'purchase').length;

console.log( '\nThe total number of purchases is:', numPurchases );  // 5


// --------------------------------------------------
// QUESTION 03
// --------------------------------------------------
/*
  Calculate the total number of 'cash' 'sales'.

  HINT(S):
  - Don't forget that 'purchases' can also be made in 'cash'!
*/
const numCashSales = transactions.filter(transaction => transaction['type'] == 'sale').filter(transaction => transaction['paymentMethod'] == 'cash').length;

console.log( '\nThe total number of cash sales is:', numCashSales );  // 2


// --------------------------------------------------
// QUESTION 04
// --------------------------------------------------
/*
  Calculate the total number of 'credit' 'purchases'.

  HINT(S):
  - Make sure to exclude any 'sales' made by 'credit'!
*/
const numCreditPurchases = transactions.filter(transaction => transaction['type'] == 'purchase').filter(transaction => transaction['paymentMethod'] == 'credit').length;

console.log( '\nThe total number of credit purchases is:', numCreditPurchases );  // 3


// --------------------------------------------------
// QUESTION 05
// --------------------------------------------------
/*
  Create an array that includes all of vendors which appear in the transactions data set.
  eg. `[ 'vendor one', 'vendor two', ... ]

  HINT(S):
  - Not all transactions have a 'vendor'!
  - The assembled array should be made up of strings, not full `transaction` objects.
  - This array is allowed to contain duplicate values.
*/
// const allVendors = transactions.filter(transaction => transaction['vendor']);
const allVendors = []

transactions.forEach(function(transaction){ 
  if (transaction['vendor']) {
    allVendors.push(transaction['vendor']);
  }
})

console.log( '\nThe vendors are:', allVendors );


// --------------------------------------------------
// QUESTION 06
// --------------------------------------------------
/*
  Create an array that includes all of the *unique* customers which appear in the transactions data set.
  eg. `[ 'customer one', 'customer two', ... ]

  HINT(S):
  - Not all transactions have a 'customer'!
  - The assembled array should be made up of strings, not full `transaction` objects.
  - Make sure that the resulting array *does not* include any duplicates.
*/
// const uniqueCustomers = transactions.filter((value, index, self) => self.indexOf(value)['vendor']);

// const uniqueCustomers = [...new Set(transactions)]

// const uniqueCustomers = transactions.filter(function (transaction) { return transaction.vendor });

// let uniqueCustomers = transactions.reduce(function (transaction, vendor) {
//   if (transaction.vendor) {
//     return transaction.concat(vendor);
//   } else {
//     return transaction
//   }
// }, []);

let uniqueCustomers = [];

transactions.forEach(function(transaction){ 
  if (transaction['vendor']) {
    uniqueCustomers.push(transaction['vendor']);
  }
})

uniqueCustomers = [...new Set(uniqueCustomers)];  // Removes duplicates from the array.

console.log( '\nThe unique customers are:', uniqueCustomers );  // [ "Dick's Doodads", 'Gibson Gadgets', 'Clarke Computing' ]


// --------------------------------------------------
// QUESTION 07
// --------------------------------------------------
/*
  Create an array of information about the 'sale' transactions which include 5 or more items.

  The array should resemble the following:
  [ { name: 'Customer Name', numItems: 5 }, ... ]

  HINT(S):
  - There may be more than 1 'sale' that includes 5 or more items.
  - Individual transactions do not have `name` properties, we'll have to add them to the output. (Huh?)
*/
const bigSpenders = transactions.filter(transaction => transaction['type'] == 'sale').filter(transaction => transaction['items'].length >= 5);

console.log( '\nThe "big spenders" are:', bigSpenders );  // Returns a list of 2 transactions.


// --------------------------------------------------
// QUESTION 08
// --------------------------------------------------
/*
  Calculate the sum of the *first* 'sale' transaction.

  HINT(S):
  - Transactions don't have 'prices', but their 'items' do!
*/
// const sumFirstSale = transactions.find(function (transaction) {
//   return transaction.type == 'credit';
// });


/*
Iterates through the transactions array...
...uses filter to find each transaction.type of 'sale'.
Takes the *first* 'sale' transaction from this list...
...Takes the items from this array.
Iterates through this items array...
...uses reduce to calculate the price value of each item.
*/
const sumFirstSale = transactions.filter(transaction => transaction.type == 'sale')[0].items.reduce(
  (accumulator, currentValue) => accumulator.price + currentValue.price
)

console.log( '\nThe sum of the first sale items is:', sumFirstSale );  // 1.125


// --------------------------------------------------
// QUESTION 09
// --------------------------------------------------
/*
  Calculate the sum of *all* 'purchase' transactions.

  HINT(S):
  - Your solution to 'QUESTION 08' is a good starting point!
  - Make sure to include 'price' information from *all* purchases.
*/


/*
Iterates through the transactions array...
...uses filter to find each transaction.type of 'purchase'.
Iterates through this transaction array...
...uses forEach to run through each transaction.
Iterates through this item array...
...uses forEach to run through each item in transaction.
Uses sumPurchases to find the total value of all item prices.
*/
let sumPurchases = 0;
const allPurchases = transactions.filter(transaction => transaction.type == 'purchase').forEach((transaction) => {
  transaction.items.forEach((item) => {
    sumPurchases += item.price;
  })
})

console.log( '\nThe sum of all purchases is:', sumPurchases.toFixed(3) );  // Rounds to 3 decimal places. Returns -33.200


// --------------------------------------------------
// QUESTION 10
// --------------------------------------------------
/*
  Calculate the company's net profit.

  This number will be positive if the sum of the sales is greater than the amount spent on purchases.

  Otherwise, this number will be negative.

  HINT(S):
  - Unlike 'QUESTION 08' and 'QUESTION 09', here we're interested in both 'sale' and 'purchase' transactions.
*/


/*
Iterates through the transactions array...
...uses forEach to run through each transaction.
Iterates through this transaction array...
...uses forEach to run through each item in transaction.
Uses netProfit to find the total value of all item prices.
*/
let netProfit = 0;
transactions.forEach((transaction) => {
  transaction.items.forEach((item) => {
    netProfit += item.price;
  })
})

console.log( '\nThe net profit is:', netProfit );  // 995.657


// --------------------------------------------------
// QUESTION 11
// --------------------------------------------------
/*
  Calculate the most items sold as part of single transaction.

  HINTS:
  - The result of this calculation should be a number (not an array, object, or other data type).
*/


/*
Iterates through the transactions array...
...uses forEach to run through each transaction.
If the transaction.items.length is larger than the biggest one stored...
...mostItems takes the current length as it's value.
*/

let mostItems = 0;
transactions.forEach((transaction) => {
  if (transaction.items.length > mostItems) {
    mostItems = transaction.items.length;
  }
})

console.log( '\nThe most items sold in a single transaction is:', mostItems );  // 8


// --------------------------------------------------
// QUESTION 12
// --------------------------------------------------
/*
  Calculate the sum of the 'purchase' with the fewest items.
*/


/*
Iterates through the transactions array...
...uses forEach to run through each transaction.
If the transaction.items.length is smaller than the smallest one stored...
...or the current value is 0...
...fewestItems takes the current length as it's value.
*/

let fewestItems = 0;
let smallestOrder = [];
transactions.forEach((transaction) => {
  if ((transaction.items.length < fewestItems) || (fewestItems == 0)) {
    fewestItems = transaction.items.length;
    smallestOrder = transaction;
  }
})
// console.log(fewestItems)
// console.log(smallestOrder)

/*
Uses forEach to iterates through each item in the smallestOrder array...
...Adds the item.price to sumOfSmallestPurchase, until it reaches the total amount.
*/

let sumOfSmallestPurchase = 0;
smallestOrder.items.forEach((item) => {
  sumOfSmallestPurchase += item.price;
})

console.log( '\nThe sum of the smallest purchase is:', sumOfSmallestPurchase );  // 1024

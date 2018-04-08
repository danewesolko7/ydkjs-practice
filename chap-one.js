/*
Chapter One - Phone Purchase

//Notes
//Variables
var amount = 99.99

amount = amount * 2
console.log( amount );  //199.98

//convert `amount` to string
// add "$" to beginning
amount = "$" + String( amount );

console.log( amount );  //$199.98

// w/latest ES6
const TAX_RATE = 0.08;  //8% sales tax

var amount = 99.99;

amount = amount * 2;

amount = amount + (amount * TAX_RATE);

console.log( amount );  //215.9784
console.log( amount.toFixed (2));   //"215.98"

//Blocks
var amount = 99.99;

//ex.
{
    amount = amount * 2;
    console.log (amount); //199.98
}

var amount = 99.99;

// is amount enough?
if (amount > 10) {
        amount = amount * 2;
        console.log(amount);  //199.98
}

//Conditionals
var bank_balance = 302.13;
var amount = 99.99;

if (amount < bank_balance) {
    console.log("I want to buy this phone!");
}

const ACCESSORY_PRICE = 9.99;

var bank_balance = 302.13;
var amount = 99.99;

amount = amount * 2;

//afford upgrade?
if ( amount < bank_balance ) {
    console.log( "I'll take the accessory!");
    amount = amount + ACCESSORY_PRICE;
}
//no?
else {
    console.log( "No, thanks.");
}

//Loops
//condition tested before
while (numofCustomers > 0) {
    console.log("How may I help you?");

      // help customer?
      numofCustomers = numofCustomers - 1;
}

//vs

//condition tested after
do {
    console.log( "How may I help you?");

      //help customer?
      numofCustomers = numofCustomers - 1;
} while (numofCustomers > 0);

var i = 0;

while (true) {
    if ((i <= 9) === false) {
      break;
    }

    console.log(i);
    i = i + 1;
}

for (var i = 0; i <= 9; i = i + 1) {
  console.log(i);
}

//Functions
function printAmount() {
    console.log( amount.toFixed(2));
}

var amount = 99.99;

printAmount(); //"99.99"

amount = amount * 2;

printAmount(); //"199.98"

function printAmount(amt) {
    console.log (amt.toFixed(2));
}

function formatAmount() {
    return "$" + amount.toFixed(2);
}

var amount 99.99;

printAmount( amount * 2); //"199.98"

amount = formatAmount();
console.log(amount);  //"99.99"

//ex.
const TAX_RATE = 0.08;

function calculateFinancialPurchaseAmount(amt) {
    amt = amt + (amt * TAX_RATE);
    return amt;
}

var amount = 99.99;

console.log(amount.toFixed(2)); //"107.99"

//Scope
function one() {
  var a = 1;
  console.log(a);
}

function two() {
  var a = 2;
  console.log(a);
}
one();  // 1
two();  // 2

funtion outer() {
  var a = 1;

  function inner() {
    var b = 2;
    console.log ( a + b );  //3
  }

  inner();

  console.log(a); //1
}

outer();

const TAX_RATE = 0.08;

function calculateFinancialPurchaseAmount(amt) {
  amt = amt + (amt * TAX_RATE);
  return amt;
}


//Practice
- Write a program to calculate the total price of your phone purchase. You will keep purchasing phones (hint: loop!) until you run out of money in your bank account. You'll also buy accessories for each phone as long as your purchase amount is below your mental spending threshold.

- After you've calculated your purchase amount, add in the tax, then print out the calculated purchase amount, properly formatted.

- Finally, check the amount against your bank account balance to see if you can afford it or not.

- You should set up some constants for the "tax rate," "phone price," "accessory price," and "spending threshold," as well as a variable for your "bank account balance.""

- You should define functions for calculating the tax and for formatting the price with a "$" and rounding to two decimal places.

Bonus Challenge: Try to incorporate input into this program, perhaps with the prompt(..) covered in "Input" earlier. You may prompt the user for their bank account balance, for example. Have fun and be creative!
*/

const TAX_RATE = .08;
const PHONE_PRICE = 99.99;
const ACCESSORY_PRICE = 9.99;
const LIMIT = 1000000000;

var bank_balance = 787787;
var amount = 0;

//Tax calc
function calcTax(amount) {
    return amount * TAX_RATE;
}

//Price formatting, rounded "$.00"
function formatAmount(amount) {
    return "$" + amount.toFixed(2);
}

while (amount < bank_balance) {
    if (amount < SPENDING_THRESHOLD) {
        amount = amount + ACCESSORY_PRICE;
    }
}

amount = amount + calcTax(amount);

console.log {
    "Your purchase: " + formatAmount(amount)
}

if (amount > bank_balance) {
  console.log(
    "You can't afford this purchase."
  );
}

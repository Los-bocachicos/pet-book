// var x  = 1;
// delete x;       // Noncompliant

// function foo(){
// let y = 1
// }

// delete foo;

// var x = "Foo";
// "length" in x; // Noncompliant: TypeError
// 0 in x;        // Noncompliant: TypeError

// var a = NaN;

// if (a === NaN) {  // Noncompliant; always false
//   console.log("a is not a number");  // this is dead code
// }
// if (a !== NaN) { // Noncompliant; always true
//   console.log("a is not NaN"); // this statement is not necessarily true
// }

// var j = 0;
// while (true) { // Noncompliant; constant end condition
//   j++;
// }
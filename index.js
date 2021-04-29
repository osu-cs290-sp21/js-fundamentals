// This is a comment
/*
 * This is also a comment
 */

console.log("Hello world!")

console.log("\n====================")
console.log("== Variables")
console.log("====================")

var x = "String value"
console.log("x:", x)
console.log("typeof(x):", typeof(x))

x = 3.1415
console.log("x:", x)
console.log("typeof(x):", typeof(x))

x = 0
console.log("x:", x)
console.log("typeof(x):", typeof(x))

x = true
console.log("x:", x)
console.log("typeof(x):", typeof(x))

console.log("\n====================")
console.log("== Numbers")
console.log("====================")

console.log("9 / 5:", 9 / 5)

console.log("\n====================")
console.log("== Comparisons")
console.log("====================")

if (true) {
  console.log("inside 'if (true)'");
}

if (false) {
  console.log("inside 'if (false)'");
}

if (16) {
  console.log("inside 'if (16)'");
}

if (0) {
  console.log("inside 'if (0)'");
} else {
  console.log ("0 is falsy!")
}

if ("string") {
  console.log("inside 'if (\"string\")'");
}

if ("") {
  console.log("inside 'if (\"\")'");
}

if (null) {
  console.log("inside 'if (null)'");
}

var undefinedVariable;
console.log("undefinedVariable:", undefinedVariable)
if (undefinedVariable) {
  console.log("inside 'if (undefinedVariable)'");
}

// x = undefined;
// console.log("x:", x)

if (2 == 2) {
  console.log("inside 'if (2 == 2)'");
}

if (2 == "2") {
  console.log("inside 'if (2 == \"2\")'");
}

if (2 === "2") {
  console.log("inside 'if (2 === \"2\")'");
}

if (2 === 2) {
  console.log("inside 'if (2 === 2)'");
}

if (2 !== 2) {
  console.log("inside 'if (2 !== 2)'");
}

console.log("\n====================")
console.log("== Strings")
console.log("====================")

var str1 = "This is a string"
var str2 = 'This is also a string'

var str3 = str1 + str2
console.log("str3:", str3)

var str4 = str1 + 16
console.log("str4:", str4)

var str5 = "2" + 2 + 2
console.log("str5:", str5)

console.log("str4.length:", str4.length)

console.log("str4[0]:", str4[0])
str4[0] = 'X'
console.log("str4:", str4)

var decathlon = 'decathlon'
console.log("decathlon.indexOf('cat'):", decathlon.indexOf('cat'))

var team = 'team'
console.log("team.indexOf('i'):", team.indexOf('i'))

console.log("str4.toLowerCase():", str4.toLowerCase())
console.log("str4.toUpperCase():", str4.toUpperCase())

console.log("str4.split(' '):", str4.split(' '))

console.log("\n====================")
console.log("== Arrays")
console.log("====================")

var arr = [ 1, "2", [ 4, 5, "6" ] ]
console.log("arr:", arr)
console.log("arr.length:", arr.length)

for (var i = 0; i < arr.length; i++) {
  console.log("arr[" + i + "]:", arr[i]);
}

var arr2 = [ 1, 2, 3, 4, 5 ]
console.log("arr2.join(','):", arr2.join(','))

var arr3 = []
arr3.push(1)
arr3.push(2)
arr3.push(3)
console.log("arr3:", arr3)
console.log("arr3.length:", arr3.length)
console.log("arr3.indexOf(2):", arr3.indexOf(2))
console.log("arr3.indexOf(100):", arr3.indexOf(100))

console.log("\n====================")
console.log("== Functions")
console.log("====================")

function addThreeThings(thing1, thing2, thing3) {
  return thing1 + thing2 + thing3;
}

console.log("addThreeThings(1, 2, 3):", addThreeThings(1, 2, 3))
var this_is_snake_case // Not used in JS

console.log("addThreeThings('1', '2', '3'):", addThreeThings('1', '2', '3'))
console.log("addThreeThings('1', 2, '3'):", addThreeThings('1', 2, '3'))

var foo = function () {
  console.log("Inside my anonymous function");
}
console.log("typeof(foo):", typeof(foo));
console.log("foo:", foo);
foo();

var foo2 = foo
foo2();

foo = addThreeThings
console.log("typeof(foo):", typeof(foo));
console.log("foo:", foo);

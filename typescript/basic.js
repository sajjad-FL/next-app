/********************************************************************************************************************** */
// string
var vara = "hello"; // Declaration of vara
vara = "hi"; // Modification of the existing vara variable
console.log(vara); // Output: "hi"
/********************************************************************************************************************** */
// number
var num = 10;
console.log(num);
/********************************************************************************************************************** */
// boolean
var isAdmin = true;
console.log({ isAdmin: isAdmin });
/********************************************************************************************************************** */
//// MULTIPLE TYPES (UNION TYPES) OR OPERATOR
var testStringOrNumber;
testStringOrNumber = 10;
testStringOrNumber = "hello";
console.log({ testStringOrNumber: testStringOrNumber });
/********************************************************************************************************************** */
//  Array
var strings = ['hello', 'world', 21];
console.log({ strings: strings });
var arrayStringNumberBoolean = ['string', 30, true];
console.log({ arrayStringNumberBoolean: arrayStringNumberBoolean });
var arrayAny = ["sajjad", 25, true];
console.log({ arrayAny: arrayAny });
var arrayMethod = ['string', 12];
console.log({ arrayMethod: arrayMethod });
/********************************************************************************************************************** */
// Obect
var user = {
    username: "sajad",
    age: 25,
    isAdmin: true
};
var user1;
user1 = {
    id: 1,
    name: "string",
    age: 200,
    isUser: false,
};
console.log({ user: user, user1: user1 });
/********************************************************************************************************************** */
// Functions
function users(params) {
    console.log(params);
    return params;
}
console.log({ users: users(['sajjad', 'lama dev', 32]) });
function funObj(params) {
    return params;
}
console.log(funObj({ name: "string", age: 10, id: 10 }));
/********************************************************************************************************************** */

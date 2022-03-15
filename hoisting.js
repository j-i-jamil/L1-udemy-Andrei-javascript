// function calculation(x, y) {
//     console.log(x + y);
// }

// for (let i = 0; i < 50; i++) {
//     calculation(3, 4);
//     // console.log(i);
// }

// Inline Caching
// function userInfo(user){
//     console.log(`${user.firstname} and ${user.lastname}`);
// }

// let userData = {
//     'firstname': 'Jamiul',
//     'lastname': 'Islam'
// }

// userInfo(userData);

// Call stack + Memory Heap

// function printName() {
//     return 'Jamiul Islam';
// }

// function findName() {
//     return printName();
// }

// function sayMyName() {
//     return findName();
// }

// console.log(sayMyName());
// console.log(one);
// var one = 1;
// var one = 2;

// console.log(one);

// a()
// function a(){
//     console.log('Hi')
// }
// function a(){
//     console.log('Bye');
// }

// a()

var favoriteFood = 'grapes';
var foodThoughts = function(){
    console.log(`Original favorite food: ${favoriteFood}`);
    var favoriteFood = 'mango';
    console.log(`New favorite food: ${favoriteFood}`);
}
foodThoughts()
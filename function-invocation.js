// function india() {
//     console.log('India');
// }
// var canada = function () {
//     console.log(`Canada`);
// };

// india();
// canada();

// function marry(person1, person2) {
//     console.log(`${person1} married to ${person2}`);
// }
// marry('Tim', 'Tina');

function findName(){
    var b = 'b';
    return printName();
}

function printName(){ 
    var c = 'c';
    return 'Jamiul Islam Jamil'
}

function sayMyName(){
    var a = 'a';
    return findName();
}

console.log(sayMyName());
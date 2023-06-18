// Code your solutions in this file
// for (let age = 30; age < 40; age++) {
//     console.log(`I'm ${age} years old. Happy birthday to me!`);
//     debugger;
//   }
const message = []
const names = ["Guadalupe", "Ollie", "Aki"];

function writeCards(names, event){
    for (let i = 0; i < names.length; i++) {
        message[i] = (`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
    }
    return message 
}

 function countDown(number) {
    while (number >= 0) {
        console.log(number--);
    }
 }
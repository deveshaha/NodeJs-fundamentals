console.log('Hello World!');

let i = 0;

setInterval(function() {
    console.log(i);
    console.log('Im still here!');
    i++;
/*
    if (i === 5) {
        console.log('forcing an error..')
        var a = 3 + z;
    }
*/

}, 1000);

console.log('Second instruction');
console.log('Last instruction');
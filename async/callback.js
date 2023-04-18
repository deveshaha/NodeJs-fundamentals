function sayHello(name, myCallback) {
    setTimeout(function () {
        console.log('Hello ' + name);
        myCallback(name);
    }, 1500);
}

function sayBye(name, myCallback) {
    setTimeout(function() {
        console.log('Bye ' + name);
        myCallback();
    }, 1000);
}

console.log('Staring Process...');
sayHello('Carlos ', function () {
    sayBye('Carlos', function() {
        console.log('Finishing process..');
    });

});


//Async problems
//sayHello('Carlos', function() {});
//sayBye('Carlos', function() {});


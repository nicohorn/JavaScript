
const boxen = require("boxen");

const boxenOptions = {
    padding: 1,
    margin: 1,
    borderStyle: "round",
    borderColor: "green",
    backgroundColor: "#555555"
};



const greeting = `Choose which function to run:
1 => Automatic Semicolon Insertion
2 => Array Propery Length
3 => Eagle Eye Test
4 => Automatic Semicolon Insertion`;

const msgBox = boxen(greeting, boxenOptions)




const readline = require('node:readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});
readline.question(msgBox, option => {

    switch (option) {
        case "1":
            console.log("Selected option: 1")
            accidentalGlobalVariable()
            break;
        case "2":
            console.log("Selected option: 2")
            arrayLengthProperty();
            break;
        case "3":
            console.log("Selected option: 3")
            eagleEyeTest();
            break;
        case "4":
            console.log("Selected option: 4")
            automaticSemicolonInsertion();
            break;
    }
    readline.close();
});


/** Accidental global variable */
function accidentalGlobalVariable() {

    /* This happens because we're not using the let keyword to define the b variable, which means that it'll create a new property in the globalThis object :) */
    function foo() {
        let a = b = 0;
        a++;
        return a;
    }

    //First we run the function so the variables are read by the parser.
    foo();
    console.log("typeof a =>", typeof a); //Output => undefined (local variable defined with let keyword);
    console.log("typeof b =>", typeof b); //Output => number (global variable, window/globalThis property);
}

/** Array length property */
function arrayLengthProperty() {
    const fruits = ["Apple", "Banana", "Orange"]
    console.log("Original fruits array => ", fruits); //Output => [ 'Apple', 'Banana', 'Orange' ]

    //The length property has a side effect when reassigning its value:
    fruits.length = 2;
    console.log("Fruits after changing length property =>", fruits) //Output => [ 'Apple', 'Banana' ]

}

/** Eagle eye test */
function eagleEyeTest() {

    // const length = 4;
    // const numbers = [];
    // for (var i = 0; i < length; i++); {
    //     numbers.push(i + 1);
    // }

    const length = 4;
    const numbers = [];

    //If you look closely, there's a semicolon after the definition of the for statement (right after the parenthesis). This will run anyways and it'll loop through, but it is a null statement. It'll not perform the numbers.push on each loop since that operation it's enclosed in a simple code block that just happens to follow the for loop. Once the for loop finishes, the numbers.push will be executed once, inserting a number into the numbers array which is a property of the globalThis object.
    for (i = 0; i < length; i++); {
        numbers.push(i + 1);
    }
    console.log("Array value/s => ", numbers); //Output => [5]

    console.log("this (globalThis) =>", this) //Look at the last property: an "i" with the value 4 was appended to the window/globalThis object.



}

/** Automatic semicolon */
function automaticSemicolonInsertion() {
    function arrayFromValue(item) {
        return
        [item]; //As there is a line break above, JavaScript "inserts" a semicolon. It will return undefined since the function arrayFromValue is returning nothing.
    }

    console.log("Output from arrayFromValue(10) =>", arrayFromValue(10));
}








// Still working on the description of these :)
function trickyClosure() {
    let i;
    for (i = 0; i < 3; i++) {
        console.log(i)
        const log = () => {
            console.log(i);
        }
        setTimeout(log, 100);
    }
}


/** Currying */
function add(a) {
    return function (b) {
        return a + b;
    }
}

/** Closure counter */
function closureCounter() {
    function counter() {
        //Private variable
        let _counter = 0;

        return {
            getCounter: () => {
                return _counter;
            },
            increment: () => {
                _counter++;
            },
            add: (n) => {
                _counter += n;
            }
        }
    }

    const c = counter();

    for (let i = 0; i < 10; i++) {
        c.increment();
    }
    c.add(20);
    console.log(c.getCounter());

}


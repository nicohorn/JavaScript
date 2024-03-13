/*A closure is the combination of a function and the lexical environment within which that function was declared. This environment consists of any local variables that were in-scope at the time the closure was created. In this case, myFunc is a reference to the instance of the function displayName that is created when makeFunc is run. The instance of displayName maintains a reference to its lexical environment, within which the variable name exists. For this reason, when myFunc is invoked, the variable name remains available for use, and "Mozilla" is passed to console.log.*/


function makeFunc() {
    const name = "Mozilla Firefox";
    function displayName() {
        console.log(name);
    }

    return displayName;
}


//A more interesting example is the following:

function power(x) {
    return function (y) {
        console.log(x ** y);
        return x ** y
    }
}


const makePowerFn = power(2);

makePowerFn(6)

//It can also be called like this:
power(2)(4);
function receivesAFunction(spy) {
    spy();
}


function returnsANamedFunction(spy) {
    return function returnsANamedFunction() {
        console.log(returnsANamedFunction)
    }
}

function returnsAnAnonymousFunction() {
    return function () {
        console.log(returnsAnAnonymousFunction)
    }
}
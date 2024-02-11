// Decorators is function that attach to constructor of a class, it will be invoke event after class is instantiated. Decorator also make making class or function more accurate

export function Logger(constructor: Function){
    console.log('Logging...');
    console.log(constructor);
}

@Logger
class Person {
    name = 'Welly'

    constructor(){
        console.log('Creating person object');
    }
}

export default Person
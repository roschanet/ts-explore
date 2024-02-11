// Decorator also can call function that return function (or as decorator factory)
function Logger(logString: string){
    return function(constructor: Function){
        console.log(logString);
        console.log('Targeted class' + constructor);
        
    }
}

@Logger('LOGGING - PERSON')
class Person {
    name= 'Welly'

    constructor(){
        console.log('Creating a person object');
        
    }
}

export default Person
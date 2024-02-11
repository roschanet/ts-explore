// If without factory decorators will be execute by their order, but if use factory the decorator will be invoke from inner to outer

function Logger(logString: string){
    console.log('First decorator');
    
    return function(constructor: Function){
        console.log(logString);
        console.log('Target class' + constructor);
        
    }
}

// function withTemplate(template: string, hookId: string){
//     return function(_:Function) { // _ can replace constructor with saying that we aware but not use it
//         const hookEl = document.getElementById(hookId)
//         if(hookEl){
//             hookEl.innerHTML = template
//         }
//     }
// }
function SecondLogger(logString: string){
    console.log('Second decorator');
    
    return function(constructor:any) { // _ can replace constructor with saying that we aware but not use it
        console.log('Logging from SecondLogger');
        
    }
}

@Logger('LOGGING - PERSON')
@SecondLogger('LOGGING - SECOND') // with constructor will render <h1>Welly</h1>
class Person {
    name = 'Welly'
    constructor() {
        console.log('Creating person object');
        
    }
}

export default Person
// function withTemplate(template: string, hookId: string){
//     return function(_:Function) { // _ can replace constructor with saying that we aware but not use it
//         const hookEl = document.getElementById(hookId)
//         if(hookEl){
//             hookEl.innerHTML = template
//         }
//     }
// }
function withTemplate(template: string, hookId: string){
    return function(constructor:any) { // _ can replace constructor with saying that we aware but not use it
        const hookEl = document.getElementById(hookId)
        const p = new constructor()
        if(hookEl){
            hookEl.innerHTML = template
            hookEl.querySelector('h1')!.textContent = p.name
        }
    }
}

@withTemplate('<h1>My Person Object</h1>', 'app') // with constructor will render <h1>Welly</h1>
class Person {
    name = 'Welly'
    constructor() {
        console.log('Creating person object');
        
    }
}

export default Person
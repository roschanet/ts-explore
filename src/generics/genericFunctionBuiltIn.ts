// Generics is a feature that allow us to not too care about the type of a parameters

import { resolve } from "path"

class GenericFunctionBuiltIn {
    names: Array<string> = []

    promise: Promise<string> = new Promise((resolve, reject)=> {
        setTimeout(()=> {
            // resolve('Done!')
            //resolve(100) // Error is Promise generic is string
            // reject('Sorry, an error occured')
        }, 1500)
    })

    addNames(name: string){
        this.names.push(name)
    }
}

export default GenericFunctionBuiltIn
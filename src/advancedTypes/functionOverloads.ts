// Feature that make a function can be invoke with multiple parameters type

type Combinable = string | number
type Numeric = number | boolean

class FunctionOverloads {
    // Adding function overloads
    add(x: string, y:string): string;
    add(x: number, y:number): number;
    add(x: string, y:number): string;
    add(x: number, y:string): string;
    add(x: Combinable, y: Combinable){
        if(typeof x === 'string' || typeof y === 'string'){
            return x.toString() + y.toString()
        }

        return x + y
    }
}

export default FunctionOverloads
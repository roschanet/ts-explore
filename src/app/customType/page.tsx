export default function CustomType(){
    // Using type to create custom type
    type Combinable = number | string
    type ResultDescriptor = 'as-number' | 'as-string'

    const input1 = '22'
    const input2 = 11
    const combine = (input1: Combinable,input2: Combinable, resultType: ResultDescriptor)=> {
        let result
        if(typeof input1 === 'number' && typeof input2 === 'number'){
            result = input1 + input2
        }else{
            result = input1.toString() + input2.toString()
        }
        if(resultType === 'as-number'){
            return +result
        }else{
            return result.toString()
        }
    }

    const combineResult = combine(input1, input2, 'as-string')

    return (
        <>
        <h1>Custom Type Page</h1>
        Result: {combineResult} 
        <p>{`type of: ${combineResult} is:`} { typeof combineResult}</p>
        </>
    )
}
export default function LiteralType(){

    const input1 = '22'
    const input2 = 11
    const combine = (input1: number | string,input2: number | string, resultType: 'as-number' | 'as-string')=> {
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
        <h1>Literal Type Page</h1>
        <small>(Used in conjunction with Union Type, give type as its value)</small>
        <p>{combineResult}</p>
        <p>{typeof combineResult}</p>
        </>
    )
}
export default function UnionType(){
    // Using | to allowing more than one type
    const input1 = 22
    const input2 = 11
    const combine = (input1: number | string,input2: number | string)=> {
        let result
        if(typeof input1 === 'number' && typeof input2 === 'number'){
            result = input1 + input2
        }else{
            result = input1.toString() + input2.toString()
        }
        return result
    }

    return (
        <>
        <h1>Union Type Page</h1>
        <p>{`Combine Number of ${input1} and ${input2} is:`} {combine(10, 22)}</p>
        <p>{`Combine String of ${input1} and ${input2} is:`} {combine(`${input1}`, `${input2}`)}</p>
        </>
    )
}
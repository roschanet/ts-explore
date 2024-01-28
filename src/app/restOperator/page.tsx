export default function RestOperator(){
    const add = (...numbers: number[]) => {
        return numbers.reduce((curResult, curValue) => {
            return curResult + curValue
        }, 0)
    }

    const result = add(3, 4, 3, 5)

    return (
        <>
        <h1>Rest Operator Page</h1>
        {`The result of adding values is: ${result}`}
        </>
    )
}
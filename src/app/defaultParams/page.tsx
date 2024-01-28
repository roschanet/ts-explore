export default function DefaultParams(){
    const addValues = (num1: number, num2: number = 2) => {
        return num1 + num2
    }

    const result = addValues(5) // arg 2 can be undefined

    return (
        <>
        <h1>Default Function Page</h1>
        <p>{`Result of adding two values: ${result}`}</p>
        </>
    )
}
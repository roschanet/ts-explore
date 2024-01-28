export default function FunctionType(){
    type FuncAdd = (x: number, y: number)=> number
    let addValue: FuncAdd = (num1: number, num2: number)  => {
        return num1 + num2
    }

    function powerValue(num1: number, cb: (x: number)=> number): void {
        console.log('Power value result: ', cb(num1))
    }

    powerValue(3, (x)=> x*x)

    // const funcValue = subValue // Error compile
    const funcValue: FuncAdd = addValue

    const resultAdd = funcValue(2, 3)

    return (
        <>
        <h1>Function Type Page</h1>
        <p>{`Result add: ${resultAdd}`}</p>
        </>
    )
}
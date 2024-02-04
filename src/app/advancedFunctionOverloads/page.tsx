import FunctionOverloads from "@/advancedTypes/functionOverloads"

export default function AdvancedFunctionOverloads(){
    const mathProcess = new FunctionOverloads()
    const addResult = mathProcess.add(4, 3)
    return (
        <>
        <h1>Advanced Function Overloads Page</h1>
        {`Result of function ${addResult}`}
        </>
    )
}
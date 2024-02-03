import { add } from "@/interfaces/interfaceAsFunctionTye"

export default function InterfaceAsFunction(){
    const addResult = add(2,3)
    return (
        <>
            <h1>Interface As Function Type Page</h1>
            {`Result of adding values: ${addResult}`}
        </>
    )
}
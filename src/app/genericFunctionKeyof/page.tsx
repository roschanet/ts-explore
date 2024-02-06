import { extractAndConvert } from "@/generics/genericFunctionKeyof"

export default function GenericFunctionKeyof(){
    const obj = extractAndConvert({name: 'Welly'}, 'name')
    console.log(obj);
    
    return (
        <>
        <h1>Generic Function Keyof Page</h1>
        </>
    )
}
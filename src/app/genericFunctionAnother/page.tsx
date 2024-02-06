import { countAndDescribe } from "@/generics/genericFunctionAnother"

export default function GenericFunctionAnother(){
    const el = countAndDescribe('How are you?')
    //const el2 = countAndDescribe(30) // Will error by compiled caused by Lengthy interface
    const el2 = countAndDescribe(['sports', 'learning'])
    console.log(el);
    console.log(el2);
    
    return (
        <>
        <h1>Another Generic Function Page</h1>
        </>
    )
}
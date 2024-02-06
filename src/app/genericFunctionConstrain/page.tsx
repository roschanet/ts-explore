import { merge } from "@/generics/genericConstrain"

export default function GenericFunctionConstrain(){
    // const user = merge({name: 'Welly', hobbies: ['sports', 'learning']}, 30) // Will error in compiled
    
    const user = merge({name: 'Welly', hobbies: ['sports', 'learning']}, {age: 40})
    

    console.log(user.name);
    console.log(user.age);
    
    return (
        <>
        <h1>Generic Function Constrain Page</h1>
        </>
    )
}
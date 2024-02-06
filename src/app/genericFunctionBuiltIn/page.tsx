import BuiltInGenerics from "@/generics/genericFunctionBuiltIn"

export default function GenericsFunctionBuiltIn(){
    const user = new BuiltInGenerics()
    user.addNames('Romeo')
    user.addNames('Susan')
    const names = user.names
    console.log(names);
    user.promise.then((values)=> {
        console.log(values);
        
    }).catch(error => {
        console.log(error);
        
    })
    
    return (
        <>
        <h1>Generic Function Built In Page</h1>
        </>
    )
}
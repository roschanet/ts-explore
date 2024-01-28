export default function UnknownType(){
    let userInput: unknown // Adds extra layer than type any
    let name: string

    userInput = 5
    name = 'Robert'
        
    if(typeof userInput === 'string'){
        name = userInput // Will error if no checking
    }
    
    return (
        <>
        <h1>Unknown Type Page</h1>
        {`User input is: ${name}`}
        </>
    )
}
export default function NeverType(){
    // Used for function that never return value, more strict than void
    
    const generateError = (message: string, code: number): never =>{
        throw {message, statusCode: code};
    }

    generateError('Error occured!!', 500)

    return (
        <>
        <h1>Never Type Page</h1>
        </>
    )
}
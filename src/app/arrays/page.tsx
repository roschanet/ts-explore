export default function ArraysPage(){
    let hobbies: string[]
    hobbies = ['Sports', 'Reading', 'Tennis']

    return (
        <>
        <h1>Arrays Page</h1>
        {hobbies.map((hobby, idx)=> <p key={`${hobby}-${idx}`}>{hobby}</p>)}
        </>
    )
}
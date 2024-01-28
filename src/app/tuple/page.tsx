export default function Tuple(){
    let person: {
        id: string;
        name: string;
        hobbies: string[];
        role: [number, string]; // role is using tuple type with only allowing 2 args
    }

    person = {
        id: '1b23',
        name: 'Robert',
        hobbies: ['Learning', 'Tennis'],
        role: [2, 'admin']
    }

    return (
        <>
        <h1>Tuple Page</h1>
        <p>{person.name}</p>
        <ul>Hobbies:
            {person.hobbies.map((hobby, idx)=><li key={`${hobby}-${idx}`}>{hobby}</li>)}
        </ul>
        <ol>Role:
            <li>{person.role[1]}</li>
        </ol>
        </>
    )
}
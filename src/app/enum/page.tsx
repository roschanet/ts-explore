export default function Enum(){
    // Using enum to create enum type
    enum role {ADMIN = "ADMIN", AUTHOR="AUTHOR", USER="USER"}

    const person = {
        id: '1fb2',
        name: 'Lorentz',
        age: 34,
        role: role.ADMIN
    }

    return (
        <>
        <h1>Enum Page</h1>
        <ul>Person Details:
            <li>{person.name}</li>
            <li>{person.age}</li>
            <li>{person.role}</li>
        </ul>
        </>
    )
}
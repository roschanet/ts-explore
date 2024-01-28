export default function SpreadOperator(){
    const hobbies = ['sports', 'reading', 'watching']
    const activeHobbies = ['swimming', 'tennis']

    // activeHobbies.push(hobbies[0], hobbies[1], hobbies[2]);
    // or with spread operator
    activeHobbies.push(...hobbies)

    const person = {
        name: 'Linda',
        age: 30,
        address: 'New York'
    }

    const copiedPerson = person

    const duplicatedPerson = {...person} // Using spread operator

    console.log('Result copied', copiedPerson);
    console.log('Type of copied', typeof copiedPerson);
    console.log('Type of duplicated', typeof duplicatedPerson);
    

    return (
        <>
        <h1>Spread Operator Page</h1>
        <p>{`Copied person: ${copiedPerson.name}`}</p>
        <p>{`Duplicated person: ${duplicatedPerson.name}`}</p>
        </>
    )
}
export default function Destructure(){
    // Array
    const hobbies = ['reading', 'tennis', 'swimming']
    const [read, tennis, swim] = hobbies
    console.log('Hobby 1: ', read);
    console.log('Hobby 2: ', tennis);
    console.log('Hobby 3', swim);
    
    // Object, order doesn't matter
    const person = {
        name: 'Ronny',
        age: 38,
        address: 'Bali'
    }
    const {address, name, age} = person
    console.log('Address: ', address);
    console.log('Name: ', name);
    console.log('Age: ', age);
    

    return (
        <>
        <h1>Destructure Page</h1>
        </>
    )
}
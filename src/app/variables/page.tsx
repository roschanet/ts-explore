export default function Variables(){
    // let and const scope is limit inside curly braces
    // var name1 = 'Rommy'
    // var age1 = 40
    // let name2 = 'Tommy'
    // const age2 = 60

    
    if(true){
        var name1 = 'Rommy'
        var age1 = 40
        let name2 = 'Donny'
        const age2 = 50
    }

    console.log('Name 1 is',name1);
    // console.log('Name 2 is',name2); // Error cause let scope
    console.log('Age 1 is',age1);
    // console.log('Age 2 is',age2); // Error caused const scope
    

    return (
        <>
        <h1>Variables Page</h1>
        <p>Name 1 is {name1}</p>
        <p>Age 1 is {age1}</p>
        {/* <p>Name 2 is {name2}</p>
        <p>Age 2 is {age2}</p> */}
        </>
    )
}
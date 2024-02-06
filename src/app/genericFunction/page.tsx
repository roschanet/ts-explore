import { merge } from "@/generics/genericFuntion"

export default function GenericFuntion(){
    const user = merge({name: 'Welly', hobbies: ['tennis', 'learning']}, {age: 49})
    console.log('Name', user.name); // just error in compiled not run time solution with 'extends' constrain
    console.log('Hobbies', user.hobbies[0]); // just error in compiled not run time solution with 'extends' constrain
    console.log('Age', user.age);
    
    return (
        <>
        <h1>Generic Function Page</h1>
        </>
    )
}
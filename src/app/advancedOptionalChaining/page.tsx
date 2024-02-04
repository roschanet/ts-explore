import OptionalChaining from "@/advancedTypes/optionalChaining"

export default function AdvancedOptionalChaining(){
    const userData = new OptionalChaining()
    const user = userData.fetchUserData?.job?.title // Using ? mark for chaining, will check if it exist than viewing it
    console.log(user);
    

    return (
        <>
        <h1>Advance Optional Chaining Page</h1>
        </>
    )
}
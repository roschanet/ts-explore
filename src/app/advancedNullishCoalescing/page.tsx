import NullishCoalescing from "@/advancedTypes/nullishCoalescing"

export default function AdvancedNullishCoaliscing(){
    const data = new NullishCoalescing()
    const userInput = data.storeData
    console.log(userInput);
    
    return (
        <>
        <h1>Advanced Nullish Coalescing Page</h1>
        </>
    )
}
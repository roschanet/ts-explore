import DiscriminatedUnions from "@/advancedTypes/discriminatedUnions"

export default function AdvancedDiscriminatedUnions(){
    const animal = new DiscriminatedUnions()

    animal.moveAnimal({type: 'bird', flyingSpeed: 1000})
    
    return (
        <>
        <h1>Advanced Discriminated Unions</h1>
        </>
    )
}
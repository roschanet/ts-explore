// Using keyword type to give literal type for discriminated unions
// Use cases is for avoiding missed type in using instance of and properties with keyword 'in' object type

interface Bird {
    type: 'bird'
    flyingSpeed: number
}

interface Horse {
    type: 'horse'
    runningSpeed: number
}

type Animal = Bird | Horse

class DiscriminatedUnions {
    moveAnimal(animal: Animal){
        let speed
        switch (animal.type) {
            case 'bird':
                speed = animal.flyingSpeed
                break;
            case 'horse':
                speed = animal.runningSpeed
                break
            default:
                break;
        }
        console.log('The animal moving speed: ' + speed);
        
    }
}

export default DiscriminatedUnions
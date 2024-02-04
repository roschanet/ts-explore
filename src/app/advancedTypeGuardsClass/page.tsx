import { Car, Truck, useVehicle } from "@/advancedTypes/typeGuardsClass"

export default function AdvancedTypeGuards(){
    const v1 = new Car()
    const v2 = new Truck()
    
    useVehicle(v1)
    useVehicle(v2)
    
    return (
        <>
        <h1>Advanced Type Guards Class Page</h1>
        </>
    )
}
export class Car {
    drive(){
        console.log('Driving...');
        
    }
}

export class Truck {
    drive() {
        console.log('Driving with truck');
        
    }

    loadCargo(amount: number){
        console.log('Loading cargo truck ' + amount);
        
    }
}

type Vehicle = Car | Truck

export function useVehicle(vehicle: Vehicle){
    vehicle.drive()
    if(vehicle instanceof Truck){ // Using instanceof for class
        vehicle.loadCargo(1000)
    }
}
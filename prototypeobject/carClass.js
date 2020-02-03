class Vehicle {
    constructor(engineSize) {
      this.engineSize = engineSize;
     
    }
    
    emitSound(){
    
    return "Honk!"
    }
  }

class Car extends Vehicle {
  constructor(brand, engineSize) {
    super (engineSize);
    this.carname = brand;
    this.numberOfWheels = 4;
    //super calls function from Vehicle constructor method


  }
  
  accelerate(){
  
  return "Accelerating!"
  }
}

const myCar = new Car("Ford", 2000);
const yourCar = new Car("Volkswagon", 1500);

console.log(myCar.emitSound());
console.log(yourCar.emitSound());
console.log(yourCar.engineSize);

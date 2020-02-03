function Car (brand){
    this.brand = brand;
} 

Car.prototype.getBrand = function() {
    return this.Brand;
}

const myCar = new Car("Volkswagon");
console.log(myCar.getBrand());

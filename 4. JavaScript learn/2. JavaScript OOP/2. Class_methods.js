// Creating a Class 'SpaceShuttle'
class SpaceShuttle {

    // Constructor of the Class 'SpaceShuttle'
    constructor(targetPlanet) {
        this.targetPlanet = targetPlanet;
    }

    // Creating a Class method, while using the Class attribute in the Class Method
    takeOff() {
        return `Shuttle is taking off! On route to ${this.targetPlanet}.`;
    }
}


// Initializing a Class Instance of the Class 'SpaceShuttle'
var zeus = new SpaceShuttle('Jupiter');
console.log(zeus.takeOff());
console.log(zeus.targetPlanet);
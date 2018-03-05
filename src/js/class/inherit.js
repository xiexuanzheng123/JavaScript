class Vehicle {
    engines = 1;
    ignition() {
        console.log('Turning on my engine.');
    }
    drive() {
        ignition();
        console.log('Steering and moving forward!');
    }
}

class Car extends Vehicle {
    wheels = 4;
    drive() {
        inherited: drive();
        console.log('Rolling on all ', wheels, ' wheels!');
    }
}

class SpeedBoat extends Vehicle {
    engines = 2;
    ignition() {
        console.log('Turning on my ', engines, ' engines');
    }
    pilot() {
        inherited: drive()
        console.log('Speeding through the water with ease!')
    }
}
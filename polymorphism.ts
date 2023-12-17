// A base class that defines a common method
class Animals {
  makeSound(): void {
    console.log("Generic animal sound");
  }
}

// A subclass that inherits from Animal and overrides the makeSound method
class Dogs extends Animals {
  makeSound(): void {
    console.log("Woof woof");
  }
}

// Another subclass that inherits from Animal and overrides the makeSound method
class Cats extends Animals {
  makeSound(): void {
    console.log("Meow meow");
  }
}


// A function that accepts an Animal parameter and calls its makeSound method
function playWithAnimal(animal: Animals): void {
  animal.makeSound();
}

// Create instances of Dog and Cat classes
let dog = new Dogs();
let cat = new Cats();



// Pass the instances to the playWithAnimal function
playWithAnimal(dog); // Woof woof
playWithAnimal(cat); // Meow meow

// access modifiers for variable
class Animal {
  public name: string; // public property
  private age: number; // private property
  protected type: string; // protected property

  // private properties is only available in that class 
  // private properties is only available in that class and child classes
  constructor(name: string, age: number, type: string) {
    this.name = name;
    this.age = age;
    this.type = type;
  }
}

class Dog extends Animal {
  constructor(name: string, age:number, type: string){
    super(name, age, type);
  };

  // getAge(){
  //   // cant be called age as it was private
  //   return `${this.name} having age of ${this.age}`;
  // };

  getType(){
    return `${this.name} having age of ${this.type}`;
  }
}
// const dog1 = new Animal("Max", 12, "Indian");
const dog1 = new Dog("Tiger", 12, "Indian");


console.log(dog1.name);
// console.log(dog1.age);
// console.log(dog1.type);



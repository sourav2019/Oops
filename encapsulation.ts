class Human{
  private name:string;
  constructor(name:string){
    this.name = name;
  };
  getName(){
    return this.name;
  };

  setName(name:string){
    this.name = name;
  };
}

class Person extends Human{
  gender:string;
  constructor(name:string, gender:string){
    super(name);
    this.gender = gender;
  };

  getFullName(){
    console.log(`Name is: ${this.getName()}`);
  }
};

const Sourav = new Person("Sourav Saha", "Male");

Sourav.setName("Prosourav");
Sourav.getFullName();

// in encapsulation we do not give access to the calss properties by declaring private access modifier to change or read value we use getter setter

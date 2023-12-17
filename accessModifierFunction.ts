// access modifiers for variable
class Device {
  
  name: string;
  brand: string;
  price: number;

  // private properties is only available in that class 
  // private properties is only available in that class and child classes
  // same applied for variable and function

  // on other hand static properties can be used to any place of code but you can inherit it you need to call the class name to access this

  constructor(name: string, price: number, brand: string) {
    this.name = name;
    this.brand = brand;
    this.price = price;
  };
  public getName(){
    console.log(`The model is ${this.name}`);
  };
  private getBrand(){
    console.log(`The brand is ${this.brand}`);
  };
  protected getPrice(){
    console.log(`The price is ${this.price}`);
  };
  static hello(){
    console.log("hello");
  }
};

class Computer extends Device {
  constructor(name: string, price: number, brand: string){
    super(name, price, brand);
  };

  getComputerPrice(){
    console.log(`${this.getPrice()}`);
  };

  greet(){
    // cant 
    // this.hello();
  // you can
   Device.hello();
  }
};




const prod = new Computer("M1", 80, "Apple");

prod.greet();

// cant
// prod.hello()

class Car {
  name: string;
  speed: number;
  color: string;
  
  constructor(name:string, speed: number = 60, color: string) {
    this.name = name;
    this.speed = speed;
    this.color = color;
  };
  getSpeed(){
    console.log(`This car is having speed ${this.speed}km/hour`);
  };
  colorVersion(){
      return `The ${this.color} model `;
  };
};


class BMW extends Car {
  price: number;
  constructor(speed: number = 60, color: string, price: number){
    super("BMW", speed, color);
    this.price = price;
  };

  getPrice(){
    console.log(`${this.colorVersion()}is ${this.price}`);
  }
};


const myBMW = new BMW(100, "Black", 50000);
myBMW.getSpeed();
myBMW.getPrice();

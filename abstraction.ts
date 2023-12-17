
abstract class Profession{
  job: string;
  constructor(job: string,){
    this.job = job;
  }
  abstract getSalary(): void

  getJob(){
    console.log("I do", this.job);
  }
};

class Doctor extends Profession{
  constructor(job: string){
    super(job);
  };
  getSalary(): void {
    console.log('salary 5 lakhs per month');
  }
};

class Engineer extends Profession{
  constructor(job: string){
    super(job);
  };
  getSalary(): void {
    console.log('Salary 2 lakhs per month');
  }
};

const PersonDoctor = new Doctor('Treatment');
PersonDoctor.getJob();
PersonDoctor.getSalary();


const PersonEngineer = new Engineer('Software Development');
PersonEngineer.getJob();
PersonEngineer.getSalary();

// First time i have understood abstraction
// 1. You can not create instances of abstract classes
// 2. if a that class there are abstract method then all the child of that class need to define and implement that method
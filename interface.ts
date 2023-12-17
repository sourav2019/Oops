interface IDeveloper {
  name: string
  position: string
  develop: () => void
}
// if class is implents interface then all the properties of the interface must be in that class and you can add  extra property
class Developer implements IDeveloper {
  name: string;
  position: string;
  technologies: string;

  constructor(name: string, position: string, tech: string) {
    this.name = name;
    this.position = position;
    this.technologies = tech;
  }

  develop(): void {
    console.log('develop an app on', this.technologies);
  };

  getDetails(): void{
    console.log(this.name, this.position, this.technologies);
  }

};

const dev = new Developer("Sourav", "Senior Developer", "MERN");
dev.develop();

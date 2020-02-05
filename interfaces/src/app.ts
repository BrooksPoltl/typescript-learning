interface Person {
  name: string;
  age: number;

  greet(prase: string): void;
}

let user1: Person;

user1 = {
  name: 'Brooks',
  age: 30,
  greet(phrase: string) {
    console.log(phrase + ' ' + this.name);
  }
};

user1.greet('Hi I am');

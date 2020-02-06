function Logger(logString: string) {
  return function(constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

@Logger('Logging - Person')
class Person {
  name = 'Brooks';
  constructor() {
    console.log('Creating person object...');
  }
}

const pers = new Person();

console.log(pers);

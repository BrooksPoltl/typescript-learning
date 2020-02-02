const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
} = {
  name: 'Brooks',
  age: 24,
  hobbies: ['Sports', 'Cooking'],
  role: [2, 'author']
};

person.role[1] = 'admin';
let favoriteActivities: string[];

favoriteActivities = ['Sports'];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby);
}

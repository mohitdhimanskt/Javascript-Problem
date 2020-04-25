function collectiveAge(people){
    const combinedAge = people.reduce((sum , person)=>{
        return sum + person.age;
    },0);
    return combinedAge;
}
const hackYourFutureMembers = [
    { name: 'Wouter', age: 33 },
    { name: 'Federico', age: 32 },
    { name: 'Noer', age: 27 },
    { name: 'Tjebbe', age: 22 },
  ];
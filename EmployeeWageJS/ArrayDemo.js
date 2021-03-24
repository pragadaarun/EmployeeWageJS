let origDog=['apple','blackberry','celkon'];
let cats=['dell','emo','flipkart','google'];
let birds=['peacock','pegeon','hen'];

//Array Copy Elements
let sliceDogs=origDog.slice(1,2);
let copyDogs=[...origDog];
let dogs=origDog.slice(0);

//Stack Function (LIFO) push and Pop
let PushDogs=dogs.push("Golden Retriever");
let popDog=dogs.pop();
dogs[dogs.length]="Poodle";

//Add and Remove from First
let addFirst=dogs.unshift('Golden Retriever');
let shiftDog=dogs.shift();

//Atomic add and remove elements (where, how many too remove,element list)
dogs.splice(2,2,'Pug','Boxer');

//Array Function - Concat, Slice and Sort
let animals=dogs.concat(cats,birds);
let newAnimal=[...dogs,...cats,...birds].toString;
let sortDog1=dogs.sort();
let sortDog=dogs.slice(0).sort();
function scanArray([first,second]){console.log('first',first,'second',second)};
scanArray(animals);
let joinAnimals=animals.join(' ');
let allAnimals="";
for(let animal of animals) allAnimals += animal+' ';
console.log('Animal : ', allAnimals);
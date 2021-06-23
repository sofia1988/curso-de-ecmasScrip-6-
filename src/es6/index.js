function newFunction(name, age,country) {
    var name = name || 'sofia';
    var age = age || '33';
    var country = country || 'arg';
    console.log(name,age, country);
}
 newFunction();

// ECMAS6
 
function newFunction2 (name = 'sofia',age ='33',country='arg'){
    console.log(name,age,country);
};

newFunction2();
newFunction2('emilia','26','arg');

let hello = " hello";
let world = "world";
let epicPhrase = hello + '' + world;
console.log(epicPhrase);

// ECMAS6.template lieteral
 let epicPhrase = `${hello}${world}`;
 console.log(epicPhrase);



 let lorem = "hola mundo  \n" + " hola mundo 2"

//  multilinea

let lorem2 = `hola mundo
hola mundo2`;
console.log(lorem2);

// destructuracion de elementos
 let person = {
     'name': 'sofia',
     'age': 33,
     'country':'arg'
 }
 console.log(person.name,person.age,person.country);
// nuevo
 let {name ,age ,country} = person;
 console.log(name,age,country);

//  operador de propagacion

let team1 =[ 'sofia','emilia','ale'];
let team2 = [ 'david', 'leo','cristian'];

let education = ['adriano', ...team1,...team2];

console.log(education);

// var/let

{
    var globalvar = 'globalvar';
}
{
    let globallet = 'globallet';
    console.log(globallet);
}
console.log(globalvar);
// console.log(globallet); no llama,solo en el bloque de codigo en el cual fue definido

// objetos

let name = 'sofia';
let age = 33;

obj = { name:name, age:age,};
// es6
obj2= {name ,age};
console.log(obj2);

// arrow f y un this no vilculable

const names = [
    {name: 'sofia',age:33 },
    {name: 'emilia',age:26}
]
 let listOfNames = names.map(function(item){
     console.log(item.name);
 })

 let listOfNames2 = names.map(item => console.log(item.name));

//  const listOfNames3 = ( name ,age, country) => {
//      ejemplo
//  }
//  const listOfNames4 = name => {
//      ejemplo
//  }
// const square = num => num * num;

// promesas

const hellopromise = () => {
    return new Promise((resolve, reject)=>{
      if (true){
          resolve('hey!');
      }else {
          reject('ups"');
      }
    });
}
hellopromise()
.then(response =>console.log(response))
.catch(error =>console.log(error));

// clases
 class calculator {
     constructor(){
         this.valuea =0;
         this.valueb=0;
     }
     sum(valuea,valueb){
         this.valuea= valuea;
         this.valueb=valueb;
         return this.valuea + this.valueb;
     }
 }
 const calc = new  calculator();
 console.log(calc.sum(2,2));

//  module
import { hello} from './module';
hello();

//  function generation
// yield guarda la info
// next es el q recuerda la asignacion logica anterior
fibonacci

function* helloWorld(){
    if(true){
        yield 'hello, ';
    }
    if(true){
        yield 'world';
    }
};
const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);


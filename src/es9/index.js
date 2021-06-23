// operador de reposo,el cual puede extraer las propiedades
// de un objeto q aun no se ha construido

const obj = {
    name:'sofia',
    age:33,
    country: 'ar'
}
// operador de reposo para separar los elementos
let{name,...all}=obj;
console.log(name,all);

// propagacion,podemos unir varios elementos de objetos aun nuevo objeto
// unir un objeto con otro objeto
const obj = {
    name:' sofia',
    age:33
}
const obj2 = {
    ...obj,
    country: 'ar'
}
console.log(obj2);

// cuando termina el llamado de una promesa y ejecutar una funcion o logica de codigo segun sea el caso

const helloWorld = ()=>{
    return new Promise((resolve, reject)=>{
        (true)
        // operacion termaria
        ? setTimeout(()=> resolve('hola'),3000)
        : reject(new Error('test error'))
    })
};
helloWorld()
.then(response => console.log (response))
.catch( error => console.log(error))
.finally(()=> console.log('finalizo'))


// regex(manejar bloques)
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec('2021-6-23');
const year = match[1]
const month = match[2]
const day = match[3]

console.log(year, month, day);
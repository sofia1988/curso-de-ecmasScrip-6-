// hace salto de linea
let array = [1,2,3 [1,2,1 [1,2,3]]];
console.log(array.flat());

// mapear cada elemento pasarle una funcion y aplanarlo segun el rdo

let array= [1,2,3,4,5];
console.log(array.flatMap(value=>[value, value*2]));


// eliminar los espacios en blanco de uns string
let hello ='      hello';
console.log(hello);
console.log(hello.trimStart());

// es opcional pasar el paramentro de error al chatch para async

try {

}catch{
    error
}

// transformar clave valor a un objeto(cuando trabjas con arreglos y quieras tranformalos a objetos)

let entries = [['name','sofia'],['age','33']];
console.log(Object.fromEntries(entries));

// objeto de tipo simbolo q accede a unas descripcion
let mySymbol = `My Symbol`;
let symbol = Symbol(mySymbol);
console.log(symbol.description);
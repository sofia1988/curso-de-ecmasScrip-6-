// para alguna validacion en una matriz
const data = {
    frontend : 'sofia',
    backend :'isabel',
    design : ' ana',
}
 const entries = Object.entries(data);
 console.log(entries);
 console.log(entries.length)

//  los valores de un objeto a un arreglo

const data = {
    frontend : 'sofia',
    backend :'isabel',
    design : ' ana',
}
 const values = Object.values(data);
 console.log(values);

//  padding
const string = 'hello';
console.log(string.padStart(7,'hi'))
console.log(string.padEnd(12,'-----'))

// asyc await

const helloworld = ()=>{
    return new Promise((resolve ,reject)=>{
       (true)
       ? setTimeout(()=> resolve('hello world'),3000)
       : reject( new Error('test error'))
    })
}

// const helloasync = async ()=> {
//     const hello = await helloworld();
//     console.log(hello);
// }
// helloasync();

// nuevo
const anotherfunction= async ()=> {
    try {
        const hello = await helloworld();
        console.log(hello);

    } catch (error) {
        console.log(error);
    }
}
anotherfunction();
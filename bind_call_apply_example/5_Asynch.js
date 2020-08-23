let a = 1;
let b = 2;

console.log('synch...');

console.log(a);

setTimeout(()=>{
    console.log('asynch');
},500)


fetch('/').then( ()=>{
    console.log('done........');
})

console.log(b);
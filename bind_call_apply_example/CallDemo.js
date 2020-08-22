let add = function (a,b) {
    console.log(this.x+a+b);
}

let xa = {
    x:10
}
//add.call(xa,1,2)

let arra= [1,2];


//add.apply(xa,arra)

//let addf = add.bind(xa,1,2)
let addf = add.bind(xa)
//addf(1,2);
//addf();



function Person(fname,lname){
    this.fname = fname;
    this.lname = lname;
}

let op1 = new Person('A','B');
let op2 = new Person('P','Q');
//let op3 = op1; shallow copy
//let op3 = Object.assign(op1);//shallow copy
let op3 = Object.assign({}, op1);//deep copy
op3.fname = 'A1';
let fl = function () {
    console.log(this.fname + ' ' +this.lname);
}

 fl.call(op1);
 fl.call(op2);
 fl.call(op3);
let xxx = JSON.parse(JSON.stringify({ results: 09 }));;
console.log(xxx)
var person={
    fname:'Manohar',
    lname:'SAmbayyapalem',
    getFullName:function (){
        return this.fname + ' ' + this.lname;
    }
}

//console.log(person.getFullName());

var myPerson={
    fname:'Abc',
    lname:'Xyz'
}

let myPersonF = person.getFullName.bind(myPerson);

//console.log(myPersonF())



let c1 = {
    x:10,
    y:20
}

let c2 = {
    x:100,
    y:200
}


let cx = function(){
    console.log(this.x + ' ' +this.y );
}

let cx_ = cx.bind(c1);
//cx_();
cx_ = cx.bind(c2);
//cx_();


//both together

var sample={
    fname:'Manohar',
    lname:'Sambayyapalem',
    getFullName1:function (){
        console.log(this.fname + ' ' + this.lname);
    },
    getFullName2: ()=>{
        console.log(this.fname + ' ' + this.lname);
    }
}

//sample.getFullName1();
//sample.getFullName2();





var sampleArg={
    getFullName1:function (){
        console.log(arguments);
    },
    getFullName2: ()=>{
        console.log(arguments);
    }
}
sampleArg.getFullName1(1,2);
sampleArg.getFullName2(3,4);


















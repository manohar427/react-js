let arr =[1,2,3]

let userobj = {
    name:'abc'
}

function abc(){
 return '';
}

let object = {
    name:'kumar',
    city:'blr',
    fname:function(){
        return this.name+' '+this.city;
    }
}
let obj2 = {
    city:'hyd'
}

obj2.__proto__ = object;


Function.prototype.mybind = function(){
    console.log('...');
}

function abc1(){
return '';
   }
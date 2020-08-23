localStorage.setItem('key','val1252');
localStorage.setItem('key1','val1252');
localStorage.setItem('key2','val1252');
let val = localStorage.getItem('key');
alert(val);

localStorage.removeItem('key');

localStorage.clear();

let user = {
    name:'manohar',
    age:25
}
let userstr = JSON.stringify(user);
localStorage.setItem('user',userstr)
let userjs = JSON.parse(localStorage.getItem('user'));
console.log(userjs);
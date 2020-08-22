function User(email,name){
    this.email = email;
    this.name = name;
    this.online = false;
}

User.prototype.login = function(){
    this.online = true;
        console.log(this.email,' has logged in');
    }

    User.prototype.logout = function(){
        this.online = false;
            console.log(this.email,' has logged out');
        }    
var user1 = new User('abc@dd.com','abc');
var user2 = new User('def@dd.com','abc');
//user1.login();
//user2.login();
console.dir(user1);
user1.logout();
console.dir(user1);
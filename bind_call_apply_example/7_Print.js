let my = {
    a:1,b:2,
    af:function(){
        console.log(this.a);
        return  this;
    },
    bf:function(){
        console.log(this.b);
    }
}

my.af().bf();
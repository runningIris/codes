let obj = {
    a: function () {
        console.log(this);
    }
}

obj.a();

let b = obj.a;
b();

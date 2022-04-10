function testFunction(){
    var x = 1;
    if(x) {
       let x = (x + 2); // ReferenceError
    }
 }

 testFunction();
 
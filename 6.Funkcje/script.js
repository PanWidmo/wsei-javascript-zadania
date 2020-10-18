//Task 1
let sayHi = () => {
    console.log("Udało się!");
}

sayHi();

//Task 2
var a=2;

let write = () => {
    console.log(a);
}

write();


//Task 3
let myArray = [1, 2, 3, 4];


let txt = 'omg';
returnString  = (txt) => {
    return txt;
}
console.log(returnString(txt));


//Task 4
function myString(paramStr) {
    
    let counter = 0;
 let myInterval =  setInterval(() => {
           counter++;
           if(counter == 5) {
                console.log("Koniec");
               clearInterval(myInterval);
           } else {
                console.log(paramStr);
           }
           
    }, 3000);
}

myString('Jakiś string');

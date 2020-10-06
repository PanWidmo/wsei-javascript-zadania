//Task 1
var x=12;
var y=19;

if(x>y){
  console.log("x jest wieksza")
}
else console.log("x jest mniejsza");

//Task 2
var x=1;
var y=2;
var z=3;

if(x>y && x>z){
  console.log("x jest najwieksze");
}
else if(y>x && y>z){
  console.log("y jest najwieksze")
}
else console.log("z jest najwieksze");

//Task 3
for(var i=0;i<10;i++){
  console.log("Lubie JS");
}

//Task 4
var result=0;

for(var i=1;i<=10;i++){
  result += i;
  console.log(result);
}

//Task 5
var n=5;

for(var i=0;i<=n;i++){
  if(i%2==0) console.log(`${i}` + " - parzysta");
  else console.log(`${i}` +" - nieparzysta");
}

//OR

for(var i=0;i<=n;i++){
  console.log(`${i} - ${i%2 ? 'parzysta' : 'nieparzysta'}`);
}

//Task 6
var x=3
var y=4;

for(var i=0; i<=x;i++){
  for(var j=0; j<=y;j++){
    console.log("i= " + i + ", j= " + j);
  }
}

//Task 7
for(var i=0;i<100;i++){
  if(i%3==0 && i%5==0) console.log("FizzBuzz");
  else if(i%5==0) console.log("Buzz");
  else if(i%3==0) console.log("Fizz");
  else console.log(i);
}

//Task 8a
var x=5;
var stars='*';

for(var i=0;i<x;i++){
  var result=' ';
  
  for(var j=0;j<=i;j++){
    result+=stars;
  }
  console.log(result);
}

//Task 8b
var x=5;
var stars='*';
var space=' ';

for(var i=0;i<x;i++){
  var result=' ';
  
  for(var j=x-1;j>i;j--){
    result+=space;
  }
  for(var k=0;k<=i;k++){
    result+=stars + space;
  }
  console.log(result);
}

//Task 8c

//Task 8d

//Task 8e

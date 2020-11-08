//Task 1
function Person(firstname,lastname,age,country,city,language){
    this.firstname=firstname,
    this.lastname=lastname,
    this.age=age,
    this.country=country,
    this.city=city,
    this.language=language
}

var user1 =new Person("Jan","Dzban",22,"Polska","Krakow","polski");

console.log(user1);

//Task 2
function Calculator(){
    this.memory = [],
    this.sum = function(a, b) {
        this.memory.push('Dodawanie');
        console.log(a + b);
    },
    this.odj = function(c, d) {
        this.memory.push('Odejmowanie');
        console.log(c - d);
    },
    this.mno = function(e, f) {
        this.memory.push('Mnozenie');
        console.log(e * f);
    },
    this.dziel = function(g, h) {
        this.memory.push('Dzielenie');
        console.log(g / h);
    },
    this.clearMemory = function() {
        this.memory = [];
    },
    this.showMemory = function() {
        console.log(this.memory);
    }
    
}

const calc1 = new Calculator();
calc1.sum(2,2)
calc1.odj(5,3)
calc1.mno(5,6)
calc1.dziel(10,5)
calc1.showMemory()

//Task 3

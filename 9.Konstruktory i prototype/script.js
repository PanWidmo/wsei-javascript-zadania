//Task 1
function Person(name, lastName, age, country, city, language) {
	this.name = name;
	this.lastname = lastName;
	this.age = age;
	this.country = country;
	this.city = city;
	this.language = language;
	this.changeCity = function (newCity) {
		return (this.city = newCity);
	};
	this.changeAge = function (newAge) {
		return (this.age = newAge);
	};
}
const p1 = new Person('marek', 'kowalski', 25, 'poland', 'lublin', 'pl');
const p2 = new Person('roman', 'nowak', 37, 'poland', 'krakow', 'pl');
const p3 = new Person('francis', 'kawa', 40, 'france', 'paris', 'fr');
const p4 = new Person('jakub', 'kot', 44, 'poland', 'katowice', 'pl');
const p5 = new Person('adolf', 'hool', 28, 'germany', 'berlin', 'de');

p1.changeAge(33);
p1.changeCity('radom');

console.log(p1, p2, p3, p4, p5);

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
    function Game() {
	this.changeNumber = function () {
		Game.prototype.interval = setInterval(() => {
			Game.prototype.number = Math.round(Math.random() * 10);
			console.log(Game.prototype.number);
		}, 1000);
	};
	this.checkNumber = function () {
		Game.prototype.check = setInterval(() => {
			if (Game.prototype.number > 5) {
				clearInterval(Game.prototype.interval);
				clearInterval(Game.prototype.check);
			}
		}, 1000);
	};
}
const game1 = new Game();
const game2 = new Game();
game1.changeNumber();
game2.checkNumber();

//Task 1
function Person(name, lastname, age, country, city) {
    this.name = name;
    this.lastname = lastname;
    this.age = age;
    this.country = country;
    this.city = city;
    this.favouriteDishes = [];

    this.showDetails = function () {
        console.log(`Person: ${this.name} ${this.lastname} age: ${this.age} country: ${this.country}, ${this.city}`);
    }

    this.addOneYear = function () {
        ++this.age;
    }
}

const person = new Person('Jan', 'Dzban', 25, 'Poland', 'Warsaw');
const person2 = new Person('Grzegorz', 'Orzech', 16, 'Poland', 'Warsaw');

person.showDetails();
person.addOneYear();
person.showDetails();

person.addOneYear();
person.addOneYear();
person.addOneYear();

person.showDetails();

person2.showDetails();
person2.addOneYear();
person2.showDetails();

person2.addOneYear();
person2.addOneYear();
person2.addOneYear();

person2.showDetails();

//Task 2
Person.prototype.addNewFavouriteDishes = function (name) {
    this.favouriteDishes.push(name);
}

Person.prototype.showFavouriteDishes = function () {
    console.log("("+this.name +" "+ this.lastname+ ")"+ " Favourite dishes: " + this.favouriteDishes.join(', '))
}

person.addNewFavouriteDishes('Bigos');
person.addNewFavouriteDishes('Pierogi');
person.showFavouriteDishes();

person.addNewFavouriteDishes('Omlet');
person.showFavouriteDishes();

//Task 3
function Calculator(a, b) {
    this.a = a;
    this.b = b;

    this.sum = function () {
        return (this.a + this.b);
    }
    this.odj = function () {
        return (this.a - this.b);
    }
    this.mnozenie = function () {
        return (this.a * this.b);
    }
    this.dzielenie = function () {
        if (!b)
            throw new Error("Cannot divide by zero");

        return this.a / this.b;
    }
}

const calc1 = new Calculator(4, 8);
const calc2 = new Calculator(4, 1);
const calc3 = new Calculator(7, 0);

console.log(calc1.sum());
console.log(calc2.odj())
console.log(calc2.mnozenie());
console.log(calc3.dzielenie());

//Task 4

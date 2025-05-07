"use strict";
// problem-1
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function formatString(input, toUpper) {
    if (toUpper === false) {
        return input.toLowerCase();
    }
    return input.toUpperCase();
}
formatString("Hello", false);
// problem -2
function filterByRating(items) {
    return items.filter((item) => item.rating >= 4);
}
const books = [
    { title: "Book A", rating: 1.5 },
    { title: "Book B", rating: 5.2 },
    { title: "Book C", rating: 1.0 },
];
filterByRating(books);
//   problem-3
function concatenateArrays(...arrays) {
    let result = [];
    for (const array of arrays) {
        result = result.concat(array);
    }
    return result;
}
concatenateArrays(["a", "b"], ["c"]);
concatenateArrays([1, 2], [3, 4], [5]);
// problem-4
class Vehicle {
    constructor(make, year) {
        this.make = make;
        this.year = year;
    }
    getInfo() {
        return `Make: ${this.make}  Year: ${this.year}`;
    }
}
class Car extends Vehicle {
    constructor(make, year, model) {
        super(make, year);
        this.model = model;
    }
    getModel() {
        return `Model: ${this.model}`;
    }
}
const myCar = new Car("Toyota", 2020, "Corolla");
myCar.getInfo();
myCar.getModel();
// problem-5
function processValue(value) {
    if (typeof value === "string") {
        return value.length;
    }
    else {
        return value * 2;
    }
}
processValue("hello");
processValue(10);
function getMostExpensiveProduct(products) {
    if (products.length === 0) {
        return null;
    }
    return products.reduce((maxProduct, currentProduct) => currentProduct.price > maxProduct.price ? currentProduct : maxProduct);
}
const products = [
    { name: "Pen", price: 10 },
    { name: "Notebook", price: 125 },
    { name: "Bag", price: 50 },
];
getMostExpensiveProduct(products);
// problem - 7
var Day;
(function (Day) {
    Day[Day["Monday"] = 0] = "Monday";
    Day[Day["Tuesday"] = 1] = "Tuesday";
    Day[Day["Wednesday"] = 2] = "Wednesday";
    Day[Day["Thursday"] = 3] = "Thursday";
    Day[Day["Friday"] = 4] = "Friday";
    Day[Day["Saturday"] = 5] = "Saturday";
    Day[Day["Sunday"] = 6] = "Sunday";
})(Day || (Day = {}));
function getDayType(day) {
    if (day === Day.Saturday || day === Day.Sunday) {
        return "Weekend";
    }
    return "Weekday";
}
getDayType(Day.Monday);
getDayType(Day.Sunday);
// problem - 8
function squareAsync(n) {
    return __awaiter(this, void 0, void 0, function* () {
        if (n < 0) {
            throw new Error("Negative number not allowed");
        }
        yield new Promise((resolve) => setTimeout(resolve, 1000));
        return n * n;
    });
}
squareAsync(4).then(console.log); // Output after 1s: 16
squareAsync(-3).catch(console.error);

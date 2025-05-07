// problem-1

function formatString(input: string, toUpper?: boolean): string {
  if (toUpper === false) {
    return input.toLowerCase();
  }
  return input.toUpperCase();
}

formatString("Hello", false);

// problem -2

function filterByRating(
  items: { title: string; rating: number }[]
): { title: string; rating: number }[] {
  return items.filter((item) => item.rating >= 4);
}

const books = [
  { title: "Book A", rating: 1.5 },
  { title: "Book B", rating: 5.2 },
  { title: "Book C", rating: 1.0 },
];

filterByRating(books);

//   problem-3

function concatenateArrays<T>(...arrays: T[][]): T[] {
  let result: T[] = [];
  for (const array of arrays) {
    result = result.concat(array);
  }

  return result;
}

concatenateArrays(["a", "b"], ["c"]);
concatenateArrays([1, 2], [3, 4], [5]);

// problem-4
class Vehicle {
  private make: string;
  private year: number;

  constructor(make: string, year: number) {
    this.make = make;
    this.year = year;
  }

  getInfo(): string {
    return `Make: ${this.make}  Year: ${this.year}`;
  }
}

class Car extends Vehicle {
  private model: string;

  constructor(make: string, year: number, model: string) {
    super(make, year);
    this.model = model;
  }

  getModel(): string {
    return `Model: ${this.model}`;
  }
}

const myCar = new Car("Toyota", 2020, "Corolla");
myCar.getInfo();
myCar.getModel();

// problem-5

function processValue(value: string | number): number {
  if (typeof value === "string") {
    return value.length;
  } else {
    return value * 2;
  }
}

processValue("hello");
processValue(10);

// problem - 6

interface Product {
  name: string;
  price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null {
  if (products.length === 0) {
    return null;
  }

  return products.reduce((maxProduct, currentProduct) =>
    currentProduct.price > maxProduct.price ? currentProduct : maxProduct
  );
}

const products: Product[] = [
  { name: "Pen", price: 10 },
  { name: "Notebook", price: 125 },
  { name: "Bag", price: 50 },
];

getMostExpensiveProduct(products)





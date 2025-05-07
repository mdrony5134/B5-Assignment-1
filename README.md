# B5-Assignment-1

# 🆚 Type vs Interface in TypeScript

When working with **TypeScript**, one of the most common questions is:

> **Should I use `type` or `interface`?**

Both are used to define custom data shapes, but they have different features that make them better suited for different use cases. This guide will help you understand their differences and when to use each.

---

## 📘 Table of Contents

- [Understanding the Basics](#understanding-the-basics)
- [Key Differences and When to Use Each](#key-differences-and-when-to-use-each)
  - [1. Declaration Merging (Extensibility)](#1-declaration-merging-extensibility)
  - [2. Inheritance and Implementation](#2-inheritance-and-implementation)
  - [3. Use Cases Where `type` Excels](#3-use-cases-where-type-excels)
- [✅ Best Practices: When to Use Each](#-best-practices-when-to-use-each)
- [🧠 Conclusion](#-conclusion)

---

## Understanding the Basics

### Using `interface`:

```ts
interface User {
  name: string;
  age: number;
}
```

### Using `type`:

```ts
type User = {
 name: string;
 age: number;
}
```

### Key Differences and When to Use Each
1. Declaration Merging (Extensibility)

Interfaces can be extended after their initial declaration, which is impossible with types. This feature is called “declaration merging.”

``` ts
// ✅ Works with interfaces
interface Animal {
 name: string;
}

interface Animal {
 age: number;
}

const dog: Animal = {
 name: "Rex",
 age: 5
} // Valid!


// ❌ Doesn't work with types
type Vehicle = {
 brand: string;
}

type Vehicle = { // Error: Duplicate identifier 'Vehicle'
 model: string;
}

```

### 2. Inheritance and Implementation

Both can be extended, but interfaces offer a more natural syntax that aligns better with object-oriented programming principles.

``` ts 
// Interface inheritance
interface Animal {
 name: string;
}

interface Dog extends Animal {
 breed: string;
}

// Type inheritance (using intersection)
type Animal = {
 name: string;
}

type Dog = Animal & {
 breed: string;
}

// Implementing interfaces in classes
interface Moveable {
 move(): void;
 getPosition(): { x: number, y: number };
}

class Car implements Moveable {
 move() { console.log("Moving…"); }
 getPosition() { return { x: 0, y: 0 }; }
}
```

### 3. Use Cases Where Types Excel

Types are better suited for certain scenarios:

Union Types

``` ts
 // Simple and clean with types
type Status = "loading" | "success" | "error";
type NumberOrString = number | string;

// Less intuitive with interfaces
interface StatusInterface {
 status: "loading" | "success" | "error";
}
```
### Best Practices: When to Use Each
Use Interfaces When:
Defining object shapes that might need extension
Creating contracts for classes to implement
Working with object-oriented design patterns
Building public APIs where consumers might need to extend the types

### Use Types When:
Creating unions or intersections
Defining function types
Creating mapped types
Working with tuples and arrays
Needing complex type manipulations

### Conclusion
While both `type` and `interface` are powerful features in TypeScript, choosing between them depends on your specific use case:

- Use `interface` for defining object shapes and class contracts, especially when you might need to extend them later.
- Use `type` for unions, intersections, and complex type manipulations.


# Intersection and Union Types in TypeScript: When and How to Use Them

TypeScript provides powerful type system features that allow developers to create complex and flexible type definitions. Two of the most useful and versatile of these features are intersection types and union types. In this article, we’ll explore what these types are, when to use them, and how they can improve your TypeScript code.

Union Types
A Union type represents a value that can be one of several types. This is useful when a variable or function parameter can accept more than one type of value.

The syntax for a union type is really simple:

``` ts 
type A = string | number;
```
In the example above, A can be either a string or a number.

Union Types can be very useful in this circumstances

- You want to create a type that represents a set of literal values
- You need to handle different cases in a type-safe manner
- When a value can be one of several types but not a combination.
For instance, imagine a function that takes either a string or number and performs an operation based on the type:

``` ts 
function newValue(value: string | number): void {
  if (typeof value === 'string') {
    console.log(`String: ${value.toUpperCase()}`);
  } else {
    console.log(`Number: ${value.toFixed(2)}`);
  }
}

newValue("hello");  // Output: String: HELLO
newValue(42.3);     // Output: Number: 42.30
```

### Intersection Types
An Intersection type allows you to combine multiple types into one. When you use Intersection types, the result is a type that includes all the properties of the intersected types. They are defined using the & operator.

The syntax for intersection types look like this

``` ts 
type A = { name: string };
type B = { age: number };
type Person = A & B;
```

In this case, Person will have both name and age properties.

Union Types can be very useful in this circumstances

- When you need to combine multiple types into one type that has all the properties of both.
- When modeling objects that require properties from multiple sources.
- Combining interfaces or type aliases
- Extending existing types with additional properties

# Union Types vs. Intersection Types
Understanding the difference between Union and Intersection types is key to using them effectively.

Union types (A | B): A value can be of type A or type B but not both.
Intersection types (A & B): A value must satisfy both types A and B.
Example: Combining Union and Intersection Types
You can combine Union and Intersection types for more complex scenarios.

``` ts 
type Admin = { role: "admin"; accessLevel: number };
type User = { username: string; password: string };

type AdminOrUser = Admin | User;
type AdminAndUser = Admin & User;

function handleUser(user: AdminOrUser) {
  if ("accessLevel" in user) {
    console.log(`Admin with access level: ${user.accessLevel}`);
  } else {
    console.log(`User with username: ${user.username}`);
  }
}

const admin: AdminAndUser = {
  role: "admin",
  accessLevel: 5,
  username: "adminUser",
  password: "securePassword"
};

handleUser(admin); // Output: Admin with access level: 5
```

Union and Intersection types are fundamental concepts in TypeScript that enhance type safety and flexibility. Union types allow variables to be one of several types, while Intersection types combine multiple types into one. By leveraging these features, you can write more maintainable, expressive, and safer code.
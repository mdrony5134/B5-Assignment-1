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
- [🛠 Practical Example: Building a Custom Array Type](#-practical-example-building-a-custom-array-type)
- [✅ Best Practices: When to Use Each](#-best-practices-when-to-use-each)
- [⚙️ Performance Considerations](#️-performance-considerations)
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


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

### Using `type`:

```
// Using type
type User = {
 name: string;
 age: number;
}
```

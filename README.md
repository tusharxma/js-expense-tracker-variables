# js-expense-tracker-variables
A simple console-based JavaScript Expense Tracker project focused on exploring var, let, and const. The goal is to strengthen understanding of variable declarations, scope, hoisting, and best practices in modern JavaScript.

## 🎯 Learning Objectives
- Understand the differences between `var`, `let`, and `const`.
- Explore variable **scope** (global, function, block).
- See how **hoisting** affects variable behavior.
- Practice immutability with `const`.
- Learn when to use `let` vs `const` in real-world code.

---

## 🚀 Features
- Add expenses with categories (Food, Travel, Entertainment, etc.).
- Calculate total spending.
- View categorized expense breakdown.
- Demonstrates `var` pitfalls (hoisting, redeclaration).
- Refactored version using modern `let` and `const`.

## 📂 Project Structure
```
js-expense-tracker-variables/
│── index.js        # Main program logic
│── README.md       # Documentation (project description, setup, learnings)

```
## 🛠️ How to Run
1. Clone the repository:
   ```bash
   git clone https://github.com/tusharxma/js-expense-tracker-variables.git
   cd js-expense-tracker-variables
   node index.js

## 🚀 Features
- Stores user expenses with `expenseName`, `amount`, and `expenseType`.
- Prints each expense when added.
- Calculates total expenses.
- Groups expenses by category (Food, Entertainment, etc.).
- Demonstrates good usage of `const` and `let`.

## 🧑‍💻 Code Walkthrough

### 🔹 Declaring the Expenses List
```js
const userExpenses = [
    { expenseName: "Lunch", amount: 2000, expenseType: "Food" },
    { expenseName: "Movie", amount: 500, expenseType: "Entertainment" }
];

Why const?
We don’t want to reassign userExpenses to a different value.
But we still mutate the array (push new expenses later).
This shows that const prevents reassignment, but allows mutation.

let totalExpense = 0;
→ Chosen because the value changes (accumulates) as we loop.

let breakdown = {};
→ This variable itself never gets reassigned, only mutated.
→ Could be const breakdown = {} for safety.

for (let i = 0; i < expenses.length; i++)
→ let ensures i is scoped to the loop, preventing leaks.
→ If we had used var i, it would pollute the function scope.

const expense = expenses[i];
→ Each loop iteration, expense should not be reassigned.
→ Declaring it const makes it clear this is fixed per iteration.

🧠 Learnings

const for fixed references
Use const for arrays, objects, and values that should not be reassigned.

let for evolving values
Use let when the value is expected to change (totalExpense, loop counters).

Avoid var

var is function-scoped, not block-scoped.

It allows redeclaration, which can cause bugs.

Example pitfall:

var x = 10;
var x = 20; // ✅ allowed, but can cause confusion

Mutation vs Reassignment

const prevents reassignment, but does not make objects/arrays immutable.

Example:

const arr = [];
arr.push(1);   // ✅ allowed
arr = [2, 3];  // ❌ error

## 📊 Var vs Let vs Const

| Feature             | `var`                               | `let`                               | `const`                                |
|---------------------|--------------------------------------|--------------------------------------|-----------------------------------------|
| **Scope**           | Function-scoped or globally scoped   | Block-scoped                         | Block-scoped                            |
| **Hoisting**        | Hoisted (initialized as `undefined`) | Hoisted (in TDZ\*)                   | Hoisted (in TDZ\*)                      |
| **Redeclaration**   | ✅ Allowed                          | ❌ Not allowed in same scope          | ❌ Not allowed in same scope             |
| **Reassignment**    | ✅ Allowed                          | ✅ Allowed                           | ❌ Not allowed                          |
| **Mutation**        | ✅ Allowed                          | ✅ Allowed                           | ✅ Allowed (objects/arrays can mutate)  |
| **Attached to global (in browser)** | ✅ Yes (`window.varName`)       | ❌ No                                | ❌ No                                   |
| **Best Use Case**   | Legacy code only                     | Variables that will change            | Variables that should not be reassigned |

\* **TDZ (Temporal Dead Zone):** Variables declared with `let` and `const` cannot be accessed before they are declared.

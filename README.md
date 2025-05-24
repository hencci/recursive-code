# Recursive Algorithms in JavaScript

This project demonstrates the power and elegance of recursion in solving common problems in computer science. It includes implementations of:

- **Fibonacci Sequence Generator** (using pure recursion)
- **Merge Sort Algorithm** (recursive sorting technique)

There is no graphical user interface for this project. It is designed to be run via the command line using Node.js.

---

## 📘 Features

### 1. Fibonacci Sequence (Recursive)

Generates the first _n_ numbers of the Fibonacci sequence using pure recursion.

**Example:**
```js
generateFibonacciSequence(8);
// Output: [0, 1, 1, 2, 3, 5, 8, 13]
```

### 2. Merge Sort (Recursive)

Implements the classic merge sort algorithm to sort an array of numbers.

**Example:**
```js
mergeSort([3, 2, 1, 13, 8, 5, 0, 1]);
// Output: [0, 1, 1, 2, 3, 5, 8, 13]
```

## ▶️ How to Run

### 1. Install Node.js

Make sure you have Node.js installed. You can download it from:
https://nodejs.org

**To check if Node.js is installed:**
```js
node -v
```

### 2. Run the Scripts

Assuming you have the files (e.g. fibonacci.js and mergeSort.js):
```js
node fibonacci.js
node mergeSort.js
```
You will see the results logged to the terminal.

## 🧠 Educational Focus

This project is intended as a learning exercise to:
- Understand recursion through practical examples.
- Recognize the importance of base cases and recursive calls.
- See the trade-offs of recursion vs iteration in real-world problems.

## 📁 Project Structure

recursive-code/<br>
├── fibonacci.js<br>
├── mergeSort.js<br>
└── README.md
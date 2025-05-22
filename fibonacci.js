//      ITERATIVE SOLOUTION

function fibonacciIterative(n) {
    const sequence = [0, 1];

    for (let i = 2; i < n; i++) {
    sequence.push(sequence[i - 1] + sequence[i - 2]);
    }

    return sequence.slice(0, n); // Handles cases where n < 2
}

console.log(fibonacciIterative(8)); // [0, 1, 1, 2, 3, 5, 8, 13]


//       RECURSIVE SOLOTION

function fibonacciRecursive(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;
    return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

function generateFibonacciSequence(n, result = [], index = 0) {
    if (index === n) return result;
    result.push(fibonacciRecursive(index));
    return generateFibonacciSequence(n, result, index + 1);
}

console.log(generateFibonacciSequence(8)); // [0, 1, 1, 2, 3, 5, 8, 13]
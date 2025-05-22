function fibonacciIterative(n) {
    const sequence = [0, 1];

    for (let i = 2; i < n; i++) {
    sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    
    return sequence.slice(0, n); // Handles cases where n < 2
}

console.log(fibonacciIterative(8)); // [0, 1, 1, 2, 3, 5, 8, 13]  
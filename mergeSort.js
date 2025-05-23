// Recursive Merge Sort implementation
function mergeSort(array) {
    // Base case: arrays with 0 or 1 element are already sorted
    if (array.length <= 1) return array;

    // Split the array in half
    const mid = Math.floor(array.length / 2);
    const left = array.slice(0, mid);
    const right = array.slice(mid);

    // Recursively sort both halves and merge them
    return merge(mergeSort(left), mergeSort(right));
}

// Helper function to merge two sorted arrays
function merge(left, right) {
    const result = [];
    let L = 0;
    let R = 0;

    while (L < left.length && R < right.length) {
        if (left[L] < right[R]) {
            result.push(left[L]);
            L++;
        }
        else {
            result.push(right[R]);
            R++;
        }
    }

    // Concatenate remaining elements (only one of these will run)
    return result.concat(left.slice(L)).concat(right.slice(R));
}

console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
console.log(mergeSort([105, 79, 100, 110]));
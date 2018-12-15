// range
function range(start, end) {
    if (start === end) return [start];

    let prev = range(start, end - 1);
    prev.push(end);

    return prev;
}

console.log(`range(3, 10) = ${range(3, 10)}`);
console.log(`range(3, 10) = ${range(0, 5)}`);

// sumRec
function sumRec(numbers) {
    if (!numbers.length) return 0;

    let prev = sumRec(numbers.slice(1));
    prev += numbers[0];

    return prev;
}

console.log(`sumRec([1, 3, 5]) = ${sumRec([1, 3, 5])}`);

// // sumIter
function sumIter(numbers) {
    let res = 0;

    for (let i = 0; i < numbers.length; i++) {
        res += numbers[i];
    }

    return res;
}

console.log(`sumIter([1, 3, 5]) = ${sumIter([1, 3, 5])}`);

// // exp1, exp2
function exp1(base, exponent) {
    if (exponent === 0) {
        return 1;
    } else {
        return base * (exp1(base, exponent - 1));
    }
}

console.log(`exp1(2, 4) = ${exp1(2, 4)}`);

function exp2(base, exponent) {
    if (exponent === 0) return 1;
    let temp;
    if (exponent % 2 === 0) {
        temp = exp2(base, exponent / 2);
        return temp * temp;
    } else {
        temp = exp2(base, ((exponent - 1) / 2));
        return temp * temp * base;
    }
}

console.log(`exp2(2, 4) =  ${exp2(2, 4)}`);
console.log(`exp2(2, 5) =  ${exp2(2, 5)}`);

// // fibsRec, fibsIter
function fibsRec(n) {
    if (n < 3) return [0, 1].slice(0, n);

    let prev = fibsRec(n - 1);
    prev.push(prev[prev.length - 1] + prev[prev.length - 2]);
    return prev;
}

console.log(`fibsRec(5) = ${fibsRec(5)}`);

function fibsIter(n) {
    let prev = [0, 1]

    if (n < 3) return prev.slice(0, n);

    while (prev.length < n) {
        prev.push(prev[prev.length - 1] + prev[prev.length - 2]);
    }
    return prev;
}

console.log(`fibsIter(5) = ${fibsIter(5)}`);

// deepDup

// This function is a type-checking helper function
// See this article for an explanation:
// https://toddmotto.com/understanding-javascript-types-and-reliable-type-checking/

function deepDup(arr) {
    if (!(arr instanceof Array)) {
        return arr;
    }
    return arr.map((el) => {
        return deepDup(el);
    });
}

const array = [
    [2], 3, 4, [5, 6]
];
const dupedArray = deepDup(array);
console.log(`deepDup original = ${JSON.stringify(array)}`);

dupedArray[0].push(4);

console.log(`deepDup original = ${JSON.stringify(array)} (should not be mutated)`);
console.log(`deepDup duped = ${JSON.stringify(dupedArray)} (should be mutated)`);

// // bsearch
function bsearch(numbers, target) {
    if (!numbers.length) return -1;

    let mid = Math.floor(numbers.length / 2);

    if (numbers[mid] === target) {
        return mid;
    } else if (numbers[mid] > target) {
        return bsearch(numbers.slice(0, mid), target);
    } else {
        let right = numbers.slice(mid + 1);
        let sub = bsearch(right, target);

        return sub === -1 ? -1 : sub + mid + 1;
    }

}

console.log(`bsearch([1, 2, 3], 3) = ${bsearch([1, 2, 3], 3)}`);
console.log(`bsearch([1, 2, 3], 2.5) = ${bsearch([1, 2, 3], 2.5)}`);

// // merge, mergeSort
function merge(left, right) {
    let sorted = [];

    while (left.length && right.length) {
        if (left[0] > right[0]) {
            sorted.push(right.shift());
        } else {
            sorted.push(left.shift());
        }
    }
    return sorted.concat(left, right);
}

function mergeSort(array) {
    if (array.length < 2) {
        return array;
    } else {
        let mid = Math.floor(array.length / 2);

        let left = mergeSort(array.slice(0, mid));
        let right = mergeSort(array.slice(mid));

        return merge(left, right);
    }
}

console.log(`mergeSort([4, 5, 2, 3, 1]) = ${mergeSort([4, 5, 2, 3, 1])}`);

// // subsets
function subsets(array) {
    if (!array.length) {
        return [
            []
        ];
    }

    let first = array[0];
    let prev = subsets(array.slice(1));
    let curr = prev.map(el => {
        return [first].concat(el);
    });

    return prev.concat(curr);
}

console.log(`subsets([1, 3, 5]) = ${JSON.stringify(subsets([1, 3, 5]))}`);
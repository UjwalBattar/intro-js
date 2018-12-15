// Array.prototype.uniq
Array.prototype.uniq = function () {
    let uniqArr = [];
    for (let i = 0; i < this.length; i++) {
        if (this.indexOf(this[i]) === i) {
            uniqArr.push(this[i]);
        }
    }
    return uniqArr;
};
console.log([1, 2, 3, 4, 5, 6, 5, 4, 3, 2, 1].uniq());

// alternate solution using 'forEach'
Array.prototype.uniq2 = function () {
    let uniqArr = [];
    this.forEach((el) => {
        if (!uniqArr.includes(el)) {
            uniqArr.push(el);
        }
    });
    return uniqArr;
};

console.log([1, 2, 3, 4, 5, 6, 5, 4, 3, 2, 1].uniq2());

// Array#twoSum
Array.prototype.twoSum = function () {
    let posPairs = [];
    for (let i = 0; i < this.length; i++) {
        for (let j = i + 1; j < this.length; j++) {
            if (this[i] + this[j] === 0) {
                posPairs.push([i, j]);
            }
        }
    }
    return posPairs;
};
console.log([-1, 0, 2, -2, 1].twoSum());

// This time we've reduced the time complexity from N^2 to N
// by using a hash
Array.prototype.twoSum2 = function () {
    let complements = {};
    let posPairs = [];
    for (let i = 0; i < this.length; i++) {
        if (complements[this[i]] !== undefined) {
            posPairs.push([complements[this[i]], i]);
        } else {
            complements[0 - this[i]] = i;
        }
    }
    return posPairs;
};

console.log([-1, 0, 2, -2, 1].twoSum2());

// Array#transpose
Array.prototype.transpose = function () {
    let transposed = Array.from({
            length: this[0].length
        },
        () => Array.from({
            length: this.length
        })
    );

    for (let i = 0; i < this.length; i++) {
        for (let j = 0; j < this[i].length; j++) {
            transposed[j][i] = this[i][j];
        }
    }
    return transposed;
};

console.log([
    [0, 1, 2, 3],
    [4, 5, 6, 7],
    [8, 9, 10, 11],
    [12, 13, 14, 15]
].transpose());
const NUMS = [1, 2, 3, 4, 5];

// Array#myEach
Array.prototype.myEach = function (func) {
    for (let i = 0; i < this.length; i++) {
        func(this[i]);
    }
};

NUMS.myEach((num) => {
    console.log(`square of ${num} is ${num * num}`);
});

// Array#.myMap
Array.prototype.myMap = function (func) {
    let mapped = [];

    for (let i = 0; i < this.length; i++) {
        mapped.push(func(this[i]));
    }

    return mapped;
};

console.log(NUMS.myMap(num => num * num));

// Array#myInject
Array.prototype.myReduce = function (func, initialValue) {
    let arr = this.slice();
    let res = initialValue;

    if (res === undefined) {
        res = arr[0];
        arr = arr.slice(1);
    }

    arr.myEach((el) => {
        res = func(res, el);
    });

    return res;
};

console.log(NUMS.myReduce((total, item) => total + item));
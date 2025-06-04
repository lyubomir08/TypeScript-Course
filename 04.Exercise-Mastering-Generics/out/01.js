"use strict";
function swap(a, aIndex, b, bIndex) {
    const temp = a[aIndex];
    a[aIndex] = b[bIndex];
    b[bIndex] = temp;
}
let a = ['test', '123'];
let b = ['a', 'b', 'c'];
swap(a, 0, b, 2);
console.log(a);
console.log(b);
// let a = [20, 30 , 40];
// let b = [1, 2, 3, 4, 5];
// swap<number>(a, 0, b, 2);
// console.log(a);
// console.log(b);
//# sourceMappingURL=01.js.map
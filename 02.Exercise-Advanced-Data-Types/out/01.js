"use strict";
function multiply(param1, param2, param3) {
    let num1 = param1 == undefined ? 1 : Number(param1);
    let num2 = param2 == undefined ? 1 : Number(param2);
    let num3 = param3 == undefined ? 1 : Number(param3);
    return num1 * num2 * num3;
}
console.log(multiply('3', 5, '10'));
console.log(multiply('2', '2'));
console.log(multiply(undefined, 2, 3));
console.log(multiply());
//# sourceMappingURL=01.js.map
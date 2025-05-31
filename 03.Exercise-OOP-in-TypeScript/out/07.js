"use strict";
class Counter {
    static count = 0;
    static increment() {
        Counter.count++;
    }
    static getCount() {
        return Counter.count;
    }
}
Counter.increment();
Counter.increment();
console.log(Counter.getCount());
// expected error
// Counter.count = 10;
//# sourceMappingURL=07.js.map
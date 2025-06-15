"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decorator1 = decorator1;
exports.decorator2 = decorator2;
exports.decorator3 = decorator3;
exports.decorator4 = decorator4;
exports.decorator5 = decorator5;
function decorator1(constructor) { }
function decorator2(target, propertyName, descriptor) {
    const originalGetter = descriptor.get;
    descriptor.get = function () {
        const value = originalGetter?.call(this);
        return value * 1.2;
    };
    return descriptor;
}
function decorator3(target, propertyName, descriptor) {
    const originalGetter = descriptor.get;
    descriptor.get = function () {
        const value = originalGetter?.call(this);
        return value * 1.2;
    };
    return descriptor;
}
function decorator4(target, propertyName) {
}
function decorator5(constructor) {
    class ExtendedPartialMonthlyMotel extends constructor {
        static MotelName = 'Monthly Motel';
    }
    return ExtendedPartialMonthlyMotel;
}
//# sourceMappingURL=decorators.js.map
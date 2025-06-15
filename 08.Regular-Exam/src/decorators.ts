export function decorator1<T extends new (...args: any[]) => {}>(constructor: T) { }
export function decorator2(target: any, propertyName: string, descriptor: PropertyDescriptor) {
    const originalGetter = descriptor.get;

    descriptor.get = function () {
        const value = originalGetter?.call(this);
        return value * 1.2;
    }

    return descriptor;
}
export function decorator3(target: any, propertyName: string, descriptor: PropertyDescriptor) {
    const originalGetter = descriptor.get;

    descriptor.get = function () {
        const value = originalGetter?.call(this);
        return value * 1.2;
    }

    return descriptor;
}
export function decorator4(target: any, propertyName: string, parameterIndex: number) { }
export function decorator5<T extends abstract new (...args: any[]) => {}>(constructor: T) {
    abstract class ExtendedPartialMonthlyMotel extends constructor {
        public static readonly MotelName = 'Monthly Motel';
    }

    return ExtendedPartialMonthlyMotel;
}
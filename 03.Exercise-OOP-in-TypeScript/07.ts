class Counter {
    private static count = 0;

    public static increment(): void {
        Counter.count++;
    }

    public static getCount(): number {
        return Counter.count;
    }
}

Counter.increment();
Counter.increment();
console.log(Counter.getCount());
// expected error
// Counter.count = 10;
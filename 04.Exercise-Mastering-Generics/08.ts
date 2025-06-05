type FunctionKeys<T> = {
    [K in keyof T]: T[K] extends Function ? K : never;
}[keyof T];

type AllFunctions<T> = Pick<T, FunctionKeys<T>>;


type test1 = {
    name: string,
    age: number,
    test: () => string;
};
type extracted1 = AllFunctions<test1>;

type Employee = {
    name: string,
    salary: number,
    work: () => void,
    takeBreak: () => string
};
type extracted3 = AllFunctions<Employee>;
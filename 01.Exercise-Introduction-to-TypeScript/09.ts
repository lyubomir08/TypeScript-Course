function friday13(arr: unknown[]): void {
    enum Months {
        January,
        February,
        March,
        April,
        May,
        June,
        July,
        August,
        September,
        October,
        November,
        December
    }

    for (const date of arr) {
        if (date instanceof Date) {
            const monthDay = date.getDate();
            const weeklyDay = date.getDay();
            const monthNum = date.getMonth();

            if(monthDay === 13 && weeklyDay === 5) {
                console.log(`${monthDay}-${Months[monthNum]}-${date.getFullYear()}`);
            }
        }
    }
}
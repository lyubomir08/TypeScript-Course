function reversedDayOfWeek(dayName: string): void {
    enum Days {
        Monday = 1,
        Tuesday,
        Wednesday,
        Thursday,
        Friday,
        Saturday,
        Sunday
    };

    console.log(Days[dayName as keyof typeof Days] || 'error');
}

reversedDayOfWeek('Monday');
reversedDayOfWeek('Friday');
reversedDayOfWeek('Invalid');
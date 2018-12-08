class AccurateTime {
    constructor(str) {
        this.year = 0;
        this.month = 0;
        this.day = 0;
        this.hour = 0;
        this.minute = 0;
        this.second = 0;
        if (str === undefined) {
            this.currentTime();
        } else {
            this.assignStr(str);
        }
    }

    static isLeapYear(year) {
        return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
    }

    static getMonthDay(year, month) {
        switch (month) {
            case 1:
                return 31;
            case 2:
                return AccurateTime.isLeapYear(year) ? 29 : 28;
            case 3:
                return 31;
            case 4:
                return 30;
            case 5:
                return 31;
            case 6:
                return 30;
            case 7:
                return 31;
            case 8:
                return 31;
            case 9:
                return 30;
            case 10:
                return 31;
            case 11:
                return 30;
            case 12:
                return 31;
        }
        return -1;
    }

    reconstruct() {
        while (this.second < 0) {
            this.second += 60;
            this.minute--;
        }
        this.minute += parseInt(this.second / 60);
        this.second %= 60;
        while (this.minute < 0) {
            this.minute += 60;
            this.hour--;
        }
        this.hour += parseInt(this.minute / 60);
        this.minute %= 60;
        while (this.hour < 0) {
            this.hour += 24;
            this.day--;
        }
        this.day += parseInt(this.hour / 24);
        this.hour %= 24;
        this.month--;
        while (this.month < 0) {
            this.month += 12;
            this.year--;
        }
        this.year += parseInt(this.month / 12);
        this.month %= 12;
        this.month++;
        while (this.day > AccurateTime.getMonthDay(this.year, this.month, true)) {
            this.day -= AccurateTime.getMonthDay(this.year, this.month, true);
            this.month++;
            if (this.month > 12) {
                this.month -= 12;
                this.year++;
            }
        }
        while (this.day <= 0) {
            this.month--;
            if (this.month <= 0) {
                this.month += 12;
                this.year--;
            }
            this.day += AccurateTime.getMonthDay(this.year, this.month, true);
        }
    }

    assignStr(string) {
        let result = string.split(new RegExp("[\\s:-]"));
        this.year = Number(result[0]);
        this.month = Number(result[1]);
        this.day = Number(result[2]);
        this.hour = Number(result[3]);
        this.minute = Number(result[4]);
        this.second = Number(result[5]);
    }

    assignInt(y, M, d, h, m, s) {
        this.year = y;
        this.month = M;
        this.day = d;
        this.hour = h;
        this.minute = m;
        this.second = s;
    }

    currentTime() {
        let myDate = new Date();
        this.assignInt(myDate.getFullYear(), myDate.getMonth(),  myDate.getDate(), myDate.getDay(), myDate.getHours(), myDate.getMinutes(), myDate.getSeconds());
    }

    add(d, h, m, s) {
        this.day += d;
        this.hour += h;
        this.minute += m;
        this.second += s;
        this.reconstruct();
    }

    getYear() {
        return this.year;
    }

    getMonth() {
        return this.month;
    }

    getDay() {
        return this.day;
    }

    getHour() {
        return this.hour;
    }

    getMinute() {
        return this.minute;
    }

    getSecond() {
        return this.second;
    }

    setYear(year) {
        this.year = year;
        this.reconstruct();
    }

    setMonth(month) {
        this.month = month;
        this.reconstruct();
    }

    setDay(day) {
        this.day = day;
        this.reconstruct();
    }

    setHour(hour) {
        this.hour = hour;
        this.reconstruct();
    }

    setMinute(minute) {
        this.minute = minute;
        this.reconstruct();
    }

    setSecond(second) {
        this.second = second;
        this.reconstruct();
    }

    addOneYear() {
        this.year++;
        this.day = AccurateTime.min(this.day, AccurateTime.getMonthDay(this.year, this.month));
    }

    minusOneYear() {
        this.year--;
        this.day = AccurateTime.min(this.day, AccurateTime.getMonthDay(this.year, this.month));
    }

    static min(a, b) {
        if (a < b) return a;
        return b;
    }

    addOneMonth() {
        this.month++;
        if (this.month > 12) {
            this.month = 1;
            this.year++;
        }
        this.day = AccurateTime.min(this.day, AccurateTime.getMonthDay(this.year, this.month));
    }

    minusOneMonth() {
        this.month--;
        if (this.month < 1) {
            this.month = 12;
            this.year++;
        }
        this.day = AccurateTime.min(this.day, AccurateTime.getMonthDay(this.year, this.month));
    }

    smallerThan(alter) {
        if (this.year > alter.year) return 0;
        if (this.year < alter.year) return 1;
        if (this.month > alter.month) return 0;
        if (this.month < alter.month) return 1;
        if (this.day > alter.day) return 0;
        if (this.day < alter.day) return 1;
        if (this.hour > alter.hour) return 0;
        if (this.hour < alter.hour) return 1;
        if (this.minute > alter.minute) return 0;
        if (this.minute < alter.minute) return 1;
        if (this.second >= alter.second) return 0;
        return 1;
    }

    compareTo(alter) {
        if (this.equals(alter)) return 0;
        if (this.smallerThan(alter)) return -1;
        return 1;
    }

    equals(alter) {
        return this.year === alter.year &&
            this.month === alter.month &&
            this.day === alter.day &&
            this.hour === alter.hour &&
            this.minute === alter.minute &&
            this.second === alter.second;
    }

    toString() {
        return this.year.toString() + "-" + this.month.toString() + "-" + this.day.toString() + " "
            + this.hour.toString() + ":" + this.minute.toString() + ":" + this.second.toString();
    }
}
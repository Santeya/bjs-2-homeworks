class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.timerId = null;
    }

    addClock(time, callback, idAlarm) {
        if (idAlarm === undefined) {
            throw new Error('Невозможно идентифицировать будильник. Параметр id не передан.');
        } else if (this.alarmCollection.some((item) => item.id === idAlarm)) {
            return console.error('Будильник с таким id уже существует.');
        } else {

            //this.timerId = idAlarm;
            this.alarmCollection.push({ id: idAlarm, time, callback });
        }

        
    }

    removeClock() { }

    getCurrentFormattedTime() {
        let now = (new Date().getHours().toString()) + ':' + (new Date().getMinutes().toString());
        return now;
    }

    start() { }

    stop() { }

    printAlarms() {
        console.log(`Печать всех будильников в количестве: ${this.alarmCollection.length}`);
        //forEach - console.log('Будильник №${...} заведён на ${...}');
    }

    clearAlarms() { }
}
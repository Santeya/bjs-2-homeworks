class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.timerId = null;
    }

    addClock(time, callback, id) {
        if (id === undefined) {
            throw new Error('Невозможно идентифицировать будильник. Параметр id не передан.');
        } else if (this.alarmCollection.some((item) => item.id === id)) {
            return console.error('Будильник с таким id уже существует.');
        } else {
            this.alarmCollection.push({ id, time, callback });
        }

        
    }

    removeClock(id) {
        let clockToDelete = this.alarmCollection.findIndex(item => item.id === id);
        if (clockToDelete === -1) {
            return false;
        }
        this.alarmCollection.splice(clockToDelete, 1);
        return true;
    }

    getCurrentFormattedTime() {
        let now = new Date().toLocaleTimeString('ru-Ru', {
            hour: '2-digit',
            minute: '2-digit',
        })  
        return now;
    }

    start() {
        let checkClock = (phoneAlarm) => {
            if (this.getCurrentFormattedTime() === phoneAlarm.time) {
                phoneAlarm.callback();
            }
        }

        if (this.timerId === null) {
            this.timerId = setInterval(() => {
                this.alarmCollection.forEach(phoneAlarm => checkClock(phoneAlarm));
            }, 1000);
        }
    }

    stop() { 
        if (this.timerId !== null) {
            clearInterval(this.timerId);
            this.timerId = null;
        }
    }

    printAlarms() {
        console.log(`Печать всех будильников в количестве: ${this.alarmCollection.length}`);
        this.alarmCollection.forEach((phoneAlarm) => console.log(`Будильник №${phoneAlarm.id} заведён на ${phoneAlarm.time}`));
    }

    clearAlarms() { 
        this.stop();
        this.alarmCollection = [];
    }
}

function testCase() {

    let phoneAlarm = new AlarmClock();
    phoneAlarm.addClock('09:00', () => console.log('Пора вставать'), 1);

    phoneAlarm.addClock('09:01', () => {
        console.log('Давай, вставай уже');
        removeClock(2);
    }, 2);

    phoneAlarm.addClock('09:02', () => {
        console.log('Вставай, а то проспишь!');
        phoneAlarm.stop();
        phoneAlarm.clearAlarms();
        phoneAlarm.printAlarms();
    }, 3);

    phoneAlarm.printAlarms();
    phoneAlarm.start();
}

testCase();
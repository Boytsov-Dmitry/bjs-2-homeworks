class AlarmClock {
    constructor () {
    this.alarmCollection = [];
    this.intervalId = null;
    };


    addClock (currentTime, callback) {    
        if (typeof currentTime !== 'string' || typeof callback !== 'function') {
            throw new Error('Отсутствуют обязательные аргументы');
        };

        if(this.alarmCollection.some((alarm) => alarm === currentTime)) {
            console.warn('Уже присутствует звонок на это же время');
        };

        this.alarmCollection.push(this.newObject = {
            callback: callback, 
            time: currentTime,
            canCall: true
        });
    };

    removeClock (time) {
        this.alarmCollection = this.alarmCollection.filter((alarm) => alarm.time !== time);
    };

    getCurrentFormattedTime() {
        return new Date().toLocaleTimeString().slice(0,-3);
    };

    start () {
        if (this.intervalId !== null) {
            return;
        };
        
        this.intervalId = setInterval(() => {
            this.alarmCollection.forEach((alarm) => {
                if (alarm.time === this.getCurrentFormattedTime() && alarm.canCall === true) {
                    alarm.canCall = false;
                    alarm.callback();
                }
            })}, 1000);
    };

    stop() {
        clearInterval(this.intervalId);
        this.intervalId = null;
    };

    resetAllCalls() {
        this.alarmCollection.forEach((alarm) => {
            alarm.canCall = true;
        });
    };

    clearAlarms() {
        stop(this.intervalId);
        this.alarmCollection = [];
    };
};



const callback = f => f;
clock = new AlarmClock();
clock.addClock("16:45", f => f);
clock.getCurrentFormattedTime();
clock.start();

let flagToCall = false;
clock.addClock("16:45", () => flagToCall = true);
clock.getCurrentFormattedTime();
clock.start();


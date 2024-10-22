class CountdownTimer {
    constructor({ selector, targetDate }) {
        this.selector = selector;
        this.targetDate = targetDate;
        this.start();
    }

    start() {
        this.timerId = setInterval(() => {
            const currentTime = Date.now();
            const time = this.targetDate - currentTime;

            if (time <= 0) {
                clearInterval(this.timerId);
                this.updateTimer(0, 0, 0, 0);
                return;
            }

            const days = Math.floor(time / (1000 * 60 * 60 * 24));
            const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
            const secs = Math.floor((time % (1000 * 60)) / 1000);

            this.updateTimer(days, hours, mins, secs);
        }, 1000);
    }

    updateTimer(days, hours, mins, secs) {
        const daysElement = document.querySelector(`${this.selector} .value[data-value="days"]`);
        const hoursElement = document.querySelector(`${this.selector} .value[data-value="hours"]`);
        const minsElement = document.querySelector(`${this.selector} .value[data-value="mins"]`);
        const secsElement = document.querySelector(`${this.selector} .value[data-value="secs"]`);

        daysElement.textContent = days; 
        hoursElement.textContent = String(hours).padStart(2, '0');
        minsElement.textContent = String(mins).padStart(2, '0');
        secsElement.textContent = String(secs).padStart(2, '0');
    }
}

new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('Dec 31, 2024 12:00:00'),
});

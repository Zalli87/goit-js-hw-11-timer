const timerFaceDaysEl = document.querySelector('[data-value="days"]');
const timerFaceHoursEl = document.querySelector('[data-value="hours"]');
const timerFaceMinsEl = document.querySelector('[data-value="mins"]');
const timerFaceSecsEl = document.querySelector('[data-value="secs"]');

class CountdownTimer {
  constructor({ targetDate , onTick }) {
    this.targetDate = targetDate;
    this.onTick = onTick;
    this.start();
  }
  start() {
     setInterval(() => {
      const currentData = Date.now();
      const deltaData = this.targetDate - currentData;
      const time = this.getTimeComponents(deltaData);
      this.onTick(time);
      }, 1000);
  }
  
  getTimeComponents(time) {
const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
  return { days, hours, mins, secs };
  }
  
  pad(value) {
  return String(value).padStart(2, '0');
}
};

function updateClockFace({ days, hours, mins, secs }) {
  timerFaceDaysEl.textContent = `${days}`;
  timerFaceHoursEl.textContent = `${hours}`;
  timerFaceMinsEl.textContent = `${mins}`;
  timerFaceSecsEl.textContent = `${secs}`;
};


new CountdownTimer({
  onTick: updateClockFace,
  selector: '#timer-1',
  targetDate: new Date('Jan 01, 2021'),
});